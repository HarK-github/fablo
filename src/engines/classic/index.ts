import { execSync } from "child_process";
import * as fs from "fs-extra";
import * as path from "path";
import { Validator as SchemaValidator } from "jsonschema";
import type { FabloEngine, ValidationResult } from "../engine";
import * as config from "../../config";

function resolveTargetDir(targetDir?: string): string {
  return targetDir ?? path.join(process.cwd(), "fablo-target");
}

function resolveBinRunPath(): string {
  let dir = __dirname;
  for (let i = 0; i < 6; i++) {
    const candidate = path.join(dir, "bin", "run.mjs");
    if (fs.existsSync(candidate)) {
      return candidate;
    }

    const parent = path.dirname(dir);
    if (parent === dir) {
      break;
    }
    dir = parent;
  }

  throw new Error(`Cannot locate bin/run.mjs. Started search from: ${__dirname}`);
}

function formatJsonSchemaErrors(errors: unknown): string[] {
  if (!Array.isArray(errors)) return ["Invalid config."];
  return errors.map((e: any) => `${e?.property ?? ""} : ${e?.message ?? "is invalid"}`.trim());
}

export class ClassicFabricEngine implements FabloEngine {
  validate(rawConfig: unknown): ValidationResult {
    const validator = new SchemaValidator();
    const results = validator.validate(rawConfig as any, config.schema);
    return {
      valid: results.errors.length === 0,
      errors: formatJsonSchemaErrors(results.errors),
    };
  }

  async generate(configJson: any, targetDir?: string): Promise<void> {
    const validation = this.validate(configJson);
    if (!validation.valid) {
      throw new Error(`Classic Fabric config validation failed:\n- ${validation.errors.join("\n- ")}`);
    }

    const effectiveTargetDir = resolveTargetDir(targetDir);
    await fs.ensureDir(effectiveTargetDir);

    const configPath = path.join(effectiveTargetDir, "fablo-config.json");
    await fs.writeJSON(configPath, configJson, { spaces: 2 });

    const binRun = resolveBinRunPath();
    execSync(`node ${binRun} setup-network fablo-config.json`, {
      cwd: effectiveTargetDir,
      stdio: "inherit",
      env: process.env,
    });
  }

  async up(targetDir?: string): Promise<void> {
    const effectiveTargetDir = resolveTargetDir(targetDir);
    const fabricDockerSh = path.join(effectiveTargetDir, "fabric-docker.sh");
    if (!(await fs.pathExists(fabricDockerSh))) {
      throw new Error(`Missing ${fabricDockerSh}. Run 'fablo generate' first.`);
    }
    execSync(`${fabricDockerSh} up`, { cwd: effectiveTargetDir, stdio: "inherit", env: process.env });
  }

  async down(targetDir?: string): Promise<void> {
    const effectiveTargetDir = resolveTargetDir(targetDir);
    const fabricDockerSh = path.join(effectiveTargetDir, "fabric-docker.sh");
    if (!(await fs.pathExists(fabricDockerSh))) {
      throw new Error(`Missing ${fabricDockerSh}. Run 'fablo generate' first.`);
    }
    execSync(`${fabricDockerSh} down`, { cwd: effectiveTargetDir, stdio: "inherit", env: process.env });
  }

  async status(targetDir?: string): Promise<string> {
    const effectiveTargetDir = resolveTargetDir(targetDir);
    const fabricDockerSh = path.join(effectiveTargetDir, "fabric-docker.sh");
    if (!(await fs.pathExists(fabricDockerSh))) {
      throw new Error(`Missing ${fabricDockerSh}. Run 'fablo generate' first.`);
    }
    return execSync(`${fabricDockerSh} status`, { cwd: effectiveTargetDir, stdio: "pipe", env: process.env }).toString("utf-8").trimEnd();
  }
}
