import Ajv = require("ajv");
import * as fs from "fs-extra";
import * as net from "net";
import * as path from "path";
import { execSync } from "child_process";
import { renderTemplate } from "../../utils/templateUtils";
import type { FabloEngine, ValidationResult } from "../engine";
import schema = require("./schema/fabricx-schema-v1.json");

type FabricXPorts = {
  sidecar: number;
  query: number;
  orderer: number;
  database: number;
};

type FabricXNode = {
  id: string;
  type: "issuer" | "endorser" | "owner";
  apiPort: number;
  p2pPort: number;
  wallets?: string[];
};

type FabricXConfig = {
  $schema: string;
  global: {
    fabricVersion: string;
    tls?: boolean;
  };
  fabricx: {
    channelId: string;
    namespace: string;
    infrastructure: {
      image: string;
      ports?: Partial<FabricXPorts>;
    };
    nodes: FabricXNode[];
  };
};

function formatAjvErrors(errors: unknown): string[] {
  if (!Array.isArray(errors)) return ["Invalid config."];
  return errors.map((e: any) => {
    const instancePath = e?.instancePath ?? "";
    const message = e?.message ?? "is invalid";
    return `${instancePath} ${message}`.trim();
  });
}

async function waitForTcpPort(host: string, port: number, timeoutMs: number): Promise<void> {
  const POLL_INTERVAL_MS = 1000;
  const start = Date.now();
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const reachable = await new Promise<boolean>((resolve) => {
      const socket = new net.Socket();
      socket.setTimeout(POLL_INTERVAL_MS);
      socket.once("connect", () => {
        socket.destroy();
        resolve(true);
      });
      const fail = () => {
        socket.destroy();
        resolve(false);
      };
      socket.once("error", fail);
      socket.once("timeout", fail);
      socket.connect(port, host);
    });

    if (reachable) return;
    if (Date.now() - start > timeoutMs) {
      throw new Error(`Port ${host}:${port} did not become ready within ${Math.ceil(timeoutMs / 1000)}s.`);
    }
    await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
  }
}

function resolveTargetDir(targetDir?: string): string {
  return targetDir ?? path.join(process.cwd(), "fablo-target", "fabricx");
}

function resolveCryptoSourceDir(): string | undefined {
  const envPath = process.env.FABLO_FABRICX_CRYPTO_SOURCE;
  if (envPath) return path.resolve(envPath);

  const candidates = [
    path.join(process.cwd(), "..", "fabric-x-repo", "samples", "tokens", "crypto"),
    path.join(process.cwd(), "fabric-x-repo", "samples", "tokens", "crypto"),
  ].map((p) => path.resolve(p));

  return candidates.find((p) => fs.existsSync(p));
}

type FabricXEngineState = {
  ports: FabricXPorts;
};

export class FabricXEngine implements FabloEngine {
  private ajv = new Ajv({ allErrors: true });

  validate(rawConfig: unknown): ValidationResult {
    const validate = this.ajv.compile(schema as any);
    const valid = validate(rawConfig);
    return {
      valid: !!valid,
      errors: valid ? [] : formatAjvErrors(validate.errors),
    };
  }

  async generate(config: FabricXConfig, targetDir?: string): Promise<void> {
    const validation = this.validate(config);
    if (!validation.valid) {
      throw new Error(`Fabric-X config validation failed:\n- ${validation.errors.join("\n- ")}`);
    }

    const DEFAULT_PORTS: FabricXPorts = {
      sidecar: 4001,
      query: 7001,
      orderer: 7050,
      database: 5433,
    };
    const effectiveTargetDir = resolveTargetDir(targetDir);
    const templatesDir = path.join(__dirname, "templates");

    const portsPartial = config.fabricx.infrastructure.ports ?? {};
    const ports: FabricXPorts = {
      sidecar: portsPartial.sidecar ?? DEFAULT_PORTS.sidecar,
      query: portsPartial.query ?? DEFAULT_PORTS.query,
      orderer: portsPartial.orderer ?? DEFAULT_PORTS.orderer,
      database: portsPartial.database ?? DEFAULT_PORTS.database,
    };

    await fs.ensureDir(effectiveTargetDir);
    await fs.ensureDir(path.join(effectiveTargetDir, "conf"));

    const statePath = path.join(effectiveTargetDir, "fabricx-engine-state.json");
    const state: FabricXEngineState = { ports };
    await fs.writeJSON(statePath, state, { spaces: 2 });

    const cryptoSourceDir = resolveCryptoSourceDir();
    const cryptoTargetDir = path.join(effectiveTargetDir, "crypto");
    if (cryptoSourceDir) {
      await fs.copy(cryptoSourceDir, cryptoTargetDir, { overwrite: true });
    } else {
      await fs.ensureDir(cryptoTargetDir);
      console.warn(
        "[fablo] WARNING: No crypto material found. Set FABLO_FABRICX_CRYPTO_SOURCE to a valid directory.\n" +
          "The network will start but cannot process transactions without certificates.\n" +
          "Checked: FABLO_FABRICX_CRYPTO_SOURCE env var, and default relative paths.",
      );
    }

    const dockerComposeTemplate = path.join(templatesDir, "docker-compose.xdev.yaml.ejs");
    const dockerComposeDest = path.join(effectiveTargetDir, "docker-compose.xdev.yaml");
    await renderTemplate(dockerComposeTemplate, dockerComposeDest, {
      image: config.fabricx.infrastructure.image,
      ports,
      channelId: config.fabricx.channelId,
      containerName: "committer",
      networkName: "fabricx",
      ordererIdentityMspId: process.env.FABLO_FABRICX_ORDERER_MSP_ID ?? "Org1MSP",
      ordererIdentityMspDir:
        process.env.FABLO_FABRICX_ORDERER_MSP_DIR_REL ?? "peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp",
    });

    const routingConfigTemplate = path.join(templatesDir, "routing-config.yaml.ejs");
    const routingConfigDest = path.join(effectiveTargetDir, "conf", "routing-config.yaml");
    await renderTemplate(routingConfigTemplate, routingConfigDest, {
      nodes: config.fabricx.nodes,
    });

    const coreTemplate = path.join(templatesDir, "core.yaml.ejs");
    for (const node of config.fabricx.nodes) {
      const nodeConfDir = path.join(effectiveTargetDir, "conf", node.id);
      const coreDest = path.join(nodeConfDir, "core.yaml");
      await renderTemplate(coreTemplate, coreDest, {
        node,
        nodes: config.fabricx.nodes,
        channelId: config.fabricx.channelId,
        namespace: config.fabricx.namespace,
        ports,
        tls: config.global.tls ?? false,
      });
    }
  }

  async up(targetDir?: string): Promise<void> {
    const effectiveTargetDir = resolveTargetDir(targetDir);
    const composeFile = path.join(effectiveTargetDir, "docker-compose.xdev.yaml");
    const statePath = path.join(effectiveTargetDir, "fabricx-engine-state.json");
    if (!(await fs.pathExists(composeFile)) || !(await fs.pathExists(statePath))) {
      throw new Error("Run 'fablo generate <config> <targetDir>' first.");
    }

    execSync(`docker compose -f ${composeFile} up -d`, { stdio: "inherit" });
    const state = (await fs.readJSON(statePath)) as FabricXEngineState;

    await waitForTcpPort("127.0.0.1", state.ports.orderer, 60_000);
    await waitForTcpPort("127.0.0.1", state.ports.query, 60_000);
  }

  async down(targetDir?: string): Promise<void> {
    const effectiveTargetDir = resolveTargetDir(targetDir);
    const composeFile = path.join(effectiveTargetDir, "docker-compose.xdev.yaml");
    if (!(await fs.pathExists(composeFile))) {
      throw new Error(`Missing ${composeFile}. Run 'fablo generate' first.`);
    }
    execSync(`docker compose -f ${composeFile} down`, { stdio: "inherit" });
  }

  async status(targetDir?: string): Promise<string> {
    const effectiveTargetDir = resolveTargetDir(targetDir);
    const composeFile = path.join(effectiveTargetDir, "docker-compose.xdev.yaml");
    if (!(await fs.pathExists(composeFile))) {
      throw new Error(`Missing ${composeFile}. Run 'fablo generate' first.`);
    }
    const output = execSync(`docker compose -f ${composeFile} ps`, { stdio: "pipe" }).toString("utf-8");
    return output.trimEnd();
  }
}
