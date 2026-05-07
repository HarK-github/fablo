import * as fs from "fs-extra";
import * as os from "os";
import * as path from "path";
import { Validator as SchemaValidator } from "jsonschema";
import { renderTemplate } from "../../utils/templateUtils";
import {
  createNamespace,
  ensureDockerAvailable,
  generateCryptoWithDocker,
  listNamespaces,
  runDockerCompose,
  waitForTcpPort,
} from "../../utils/dockerHelpers";
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

type FabricXOrganization = {
  name: string;
  mspId: string;
  domain: string;
  peerName?: string;
  adminUser?: string;
};

type FabricXConfig = {
  $schema: string;
  global: {
    fabricVersion: string;
    tls?: boolean;
  };
  fabricx: {
    channelId?: string;
    channel?: {
      name: string;
      profile?: string;
      policy?: string;
    };
    namespace: string;
    infrastructure: {
      image: string;
      toolsImage?: string;
      containerName?: string;
      ports?: Partial<FabricXPorts>;
    };
    organizations: FabricXOrganization[];
    nodes?: FabricXNode[];
  };
};

type NormalizedFabricXOrganization = Required<FabricXOrganization>;

type FabricXEngineState = {
  channelName: string;
  containerName: string;
  image: string;
  namespace: string;
  namespacePolicy: string;
  ports: FabricXPorts;
  profileName: string;
  organizations: NormalizedFabricXOrganization[];
  toolsImage: string;
};

const DEFAULT_PORTS: FabricXPorts = {
  sidecar: 4001,
  query: 7001,
  orderer: 7050,
  database: 5433,
};

const DEFAULT_COMMITTER_IMAGE = "ghcr.io/hyperledger/fabric-x-committer-test-node:0.1.9";
const DEFAULT_TOOLS_IMAGE = "ghcr.io/hyperledger/fabric-x-tools:latest";
const DEFAULT_CONTAINER_NAME = "committer";
const DEFAULT_PROFILE_NAME = "OrgsChannel";
const DEFAULT_PEER_NAME = "SC";
const DEFAULT_ADMIN_USER = "channel_admin";

function resolveTargetDir(targetDir?: string): string {
  return targetDir ?? path.join(process.cwd(), "fablo-target", "fabricx");
}

function formatJsonSchemaErrors(errors: unknown): string[] {
  if (!Array.isArray(errors)) return ["Invalid config."];
  return errors.map((error: any) => `${error?.property ?? ""} : ${error?.message ?? "is invalid"}`.trim());
}

function getChannelName(config: FabricXConfig): string {
  return config.fabricx.channel?.name ?? config.fabricx.channelId ?? "mychannel";
}

function getProfileName(config: FabricXConfig): string {
  return config.fabricx.channel?.profile ?? DEFAULT_PROFILE_NAME;
}

function getNamespacePolicy(config: FabricXConfig, organizations: NormalizedFabricXOrganization[]): string {
  return config.fabricx.channel?.policy ?? `AND('${organizations[0].mspId}.member')`;
}

function getPorts(config: FabricXConfig): FabricXPorts {
  const overridePorts = config.fabricx.infrastructure.ports ?? {};
  return {
    sidecar: overridePorts.sidecar ?? DEFAULT_PORTS.sidecar,
    query: overridePorts.query ?? DEFAULT_PORTS.query,
    orderer: overridePorts.orderer ?? DEFAULT_PORTS.orderer,
    database: overridePorts.database ?? DEFAULT_PORTS.database,
  };
}

function normalizeOrganizations(config: FabricXConfig): NormalizedFabricXOrganization[] {
  return config.fabricx.organizations.map((organization) => ({
    ...organization,
    peerName: organization.peerName ?? DEFAULT_PEER_NAME,
    adminUser: organization.adminUser ?? DEFAULT_ADMIN_USER,
  }));
}

async function resolveSignCertPath(cryptoDir: string, organization: NormalizedFabricXOrganization): Promise<string> {
  const signCertDir = path.join(
    cryptoDir,
    "peerOrganizations",
    organization.domain,
    "users",
    `${organization.adminUser}@${organization.domain}`,
    "msp",
    "signcerts",
  );

  if (!(await fs.pathExists(signCertDir))) {
    throw new Error(`Missing signcert directory: ${signCertDir}`);
  }

  const entries = await fs.readdir(signCertDir);
  const pemFile = entries.find((entry) => entry.endsWith(".pem")) ?? entries[0];
  if (!pemFile) {
    throw new Error(`No signcert found in ${signCertDir}`);
  }

  return path.join(signCertDir, pemFile);
}

async function writeScPubKey(cryptoDir: string, organization: NormalizedFabricXOrganization): Promise<void> {
  const source = await resolveSignCertPath(cryptoDir, organization);
  const destination = path.join(cryptoDir, "sc_pubkey.pem");
  await fs.copy(source, destination, { overwrite: true });
}

async function makeTreeReadable(targetPath: string): Promise<void> {
  const stats = await fs.lstat(targetPath);
  if (stats.isSymbolicLink()) {
    return;
  }

  if (stats.isDirectory()) {
    await fs.chmod(targetPath, 0o755);
    const entries = await fs.readdir(targetPath);
    for (const entry of entries) {
      await makeTreeReadable(path.join(targetPath, entry));
    }
    return;
  }

  await fs.chmod(targetPath, 0o644);
}

async function retryOperation<T>(
  operation: () => Promise<T>,
  timeoutMs: number,
  description: string,
  intervalMs = 2000,
): Promise<T> {
  const startedAt = Date.now();
  let lastError: Error | undefined;

  while (Date.now() - startedAt <= timeoutMs) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
      await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }
  }

  throw new Error(`${description} failed: ${lastError?.message ?? "timed out"}`);
}

export class FabricXEngine implements FabloEngine {
  validate(rawConfig: unknown): ValidationResult {
    const validator = new SchemaValidator();
    const results = validator.validate(rawConfig as any, schema as any);
    return {
      valid: results.errors.length === 0,
      errors: formatJsonSchemaErrors(results.errors),
    };
  }

  async generate(config: FabricXConfig, targetDir?: string): Promise<void> {
    const validation = this.validate(config);
    if (!validation.valid) {
      throw new Error(`Fabric-X config validation failed:\n- ${validation.errors.join("\n- ")}`);
    }

    if (config.global.tls) {
      throw new Error("Fabric-X MVP currently supports only tls=false. This matches the FSC Fabric-X topology defaults.");
    }

    await ensureDockerAvailable();

    const effectiveTargetDir = resolveTargetDir(targetDir);
    const templatesDir = path.join(__dirname, "templates");
    const configDir = path.join(effectiveTargetDir, "fxconfig");
    const cryptoDir = path.join(effectiveTargetDir, "crypto");
    const channelName = getChannelName(config);
    const profileName = getProfileName(config);
    const organizations = normalizeOrganizations(config);
    const namespacePolicy = getNamespacePolicy(config, organizations);
    const ports = getPorts(config);
    const image = config.fabricx.infrastructure.image || DEFAULT_COMMITTER_IMAGE;
    const toolsImage = config.fabricx.infrastructure.toolsImage || DEFAULT_TOOLS_IMAGE;
    const containerName = config.fabricx.infrastructure.containerName || DEFAULT_CONTAINER_NAME;

    await fs.ensureDir(effectiveTargetDir);
    await fs.ensureDir(configDir);

    await renderTemplate(path.join(templatesDir, "crypto-config.yaml.ejs"), path.join(configDir, "crypto-config.yaml"), {
      organizations,
    });
    await renderTemplate(path.join(templatesDir, "configtx.yaml.ejs"), path.join(configDir, "configtx.yaml"), {
      organizations,
      namespacePolicy,
      ports,
      profileName,
    });

    await generateCryptoWithDocker({
      channelName,
      configDir,
      cryptoTargetDir: cryptoDir,
      profileName,
      toolsImage,
    });

    await makeTreeReadable(cryptoDir);
    await writeScPubKey(cryptoDir, organizations[0]);

    const sidecarPeerMspDir = path.posix.join(
      "/root/artifacts/crypto",
      "peerOrganizations",
      organizations[0].domain,
      "peers",
      `${organizations[0].peerName}.${organizations[0].domain}`,
      "msp",
    );

    await renderTemplate(
      path.join(templatesDir, "docker-compose.xdev.yaml.ejs"),
      path.join(effectiveTargetDir, "docker-compose.xdev.yaml"),
      {
        addLinuxHostGateway: os.platform() === "linux",
        channelName,
        containerName,
        image,
        ports,
        sidecarMspId: organizations[0].mspId,
        sidecarPeerMspDir,
      },
    );

    const state: FabricXEngineState = {
      channelName,
      containerName,
      image,
      namespace: config.fabricx.namespace,
      namespacePolicy,
      ports,
      profileName,
      organizations,
      toolsImage,
    };

    await fs.writeJSON(path.join(effectiveTargetDir, "fabricx-engine-state.json"), state, { spaces: 2 });

    console.log(`\n✅ Fabric-X artifacts generated in ${effectiveTargetDir}`);
    console.log(`📁 Crypto material: ${cryptoDir}`);
    console.log(`📁 Fabric-X config: ${configDir}`);
  }

  async up(targetDir?: string): Promise<void> {
    await ensureDockerAvailable();

    const effectiveTargetDir = resolveTargetDir(targetDir);
    const composeFile = path.join(effectiveTargetDir, "docker-compose.xdev.yaml");
    const statePath = path.join(effectiveTargetDir, "fabricx-engine-state.json");

    if (!(await fs.pathExists(composeFile)) || !(await fs.pathExists(statePath))) {
      throw new Error("Run 'fablo generate <config> <targetDir>' first.");
    }

    const state = (await fs.readJSON(statePath)) as FabricXEngineState;
    await runDockerCompose(composeFile, ["up", "-d", "--remove-orphans"]);

    await waitForTcpPort("127.0.0.1", state.ports.sidecar, 90_000);
    await waitForTcpPort("127.0.0.1", state.ports.query, 90_000);

    const approverOrg = state.organizations[0];
    const namespaces = await retryOperation(
      () =>
        listNamespaces({
          containerName: state.containerName,
          cryptoTargetDir: path.join(effectiveTargetDir, "crypto"),
          image: state.toolsImage,
          queriesAddress: "127.0.0.1:7001",
        }),
      60_000,
      "Query service readiness check",
    );

    if (namespaces.includes(state.namespace)) {
      return;
    }

    await retryOperation(
      () =>
        createNamespace({
          channelName: state.channelName,
          containerName: state.containerName,
          cryptoTargetDir: path.join(effectiveTargetDir, "crypto"),
          image: state.toolsImage,
          mspConfigPath: path.posix.join(
            "/root/artifacts/crypto",
            "peerOrganizations",
            approverOrg.domain,
            "users",
            `${approverOrg.adminUser}@${approverOrg.domain}`,
            "msp",
          ),
          mspId: approverOrg.mspId,
          namespace: state.namespace,
          notificationsAddress: "127.0.0.1:7001",
          ordererAddress: "127.0.0.1:7050",
          policy: state.namespacePolicy,
          waitForCommit: false,
        }),
      90_000,
      "Namespace bootstrap",
    );

    await retryOperation(
      async () => {
        const updatedNamespaces = await listNamespaces({
          containerName: state.containerName,
          cryptoTargetDir: path.join(effectiveTargetDir, "crypto"),
          image: state.toolsImage,
          queriesAddress: "127.0.0.1:7001",
        });

        if (!updatedNamespaces.includes(state.namespace)) {
          throw new Error(`Namespace ${state.namespace} not visible yet`);
        }
      },
      90_000,
      "Namespace visibility check",
    );
  }

  async down(targetDir?: string): Promise<void> {
    const effectiveTargetDir = resolveTargetDir(targetDir);
    const composeFile = path.join(effectiveTargetDir, "docker-compose.xdev.yaml");

    if (!(await fs.pathExists(composeFile))) {
      throw new Error(`Missing ${composeFile}. Run 'fablo generate' first.`);
    }

    await runDockerCompose(composeFile, ["down", "--remove-orphans"]);
  }

  async status(targetDir?: string): Promise<string> {
    const effectiveTargetDir = resolveTargetDir(targetDir);
    const composeFile = path.join(effectiveTargetDir, "docker-compose.xdev.yaml");

    if (!(await fs.pathExists(composeFile))) {
      throw new Error(`Missing ${composeFile}. Run 'fablo generate' first.`);
    }

    const result = await runDockerCompose(composeFile, ["ps"], false);
    return result.stdout.trimEnd();
  }
}
