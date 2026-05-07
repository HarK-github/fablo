import { spawn } from "child_process";
import * as fs from "fs-extra";
import * as net from "net";
import * as path from "path";

type CommandOptions = {
  check?: boolean;
  cwd?: string;
  env?: NodeJS.ProcessEnv;
  inheritStdio?: boolean;
};

type CommandResult = {
  exitCode: number;
  stdout: string;
  stderr: string;
};

type GenerateCryptoOptions = {
  buildContextDir?: string;
  channelName: string;
  configDir: string;
  cryptoTargetDir: string;
  dockerfile?: string;
  profileName: string;
  toolsImage: string;
};

type NamespaceBaseOptions = {
  containerName: string;
  cryptoTargetDir: string;
  image: string;
};

type CreateNamespaceOptions = NamespaceBaseOptions & {
  mspConfigPath: string;
  mspId: string;
  namespace: string;
  notificationsAddress: string;
  ordererAddress: string;
  policy: string;
  channelName: string;
  waitForCommit?: boolean;
};

type ListNamespacesOptions = NamespaceBaseOptions & {
  queriesAddress: string;
};

function currentDockerUserArgs(): string[] {
  if (process.platform === "win32") {
    return [];
  }
  if (typeof process.getuid !== "function" || typeof process.getgid !== "function") {
    return [];
  }
  return ["--user", `${process.getuid()}:${process.getgid()}`];
}

export async function runCommand(
  command: string,
  args: string[],
  options: CommandOptions = {},
): Promise<CommandResult> {
  const { check = true, cwd, env, inheritStdio = false } = options;

  return new Promise<CommandResult>((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      env,
      shell: false,
      stdio: inheritStdio ? "inherit" : "pipe",
    });

    let stdout = "";
    let stderr = "";

    if (!inheritStdio) {
      child.stdout?.on("data", (chunk) => {
        stdout += chunk.toString();
      });
      child.stderr?.on("data", (chunk) => {
        stderr += chunk.toString();
      });
    }

    child.on("error", (error) => {
      reject(error);
    });

    child.on("close", (exitCode) => {
      const result = {
        exitCode: exitCode ?? 1,
        stdout,
        stderr,
      };

      if (check && result.exitCode !== 0) {
        const details = result.stderr.trim() || result.stdout.trim() || `${command} exited with code ${result.exitCode}`;
        reject(new Error(details));
        return;
      }

      resolve(result);
    });
  });
}

export async function ensureDockerAvailable(): Promise<void> {
  await runCommand("docker", ["version"], { inheritStdio: true });
}

export async function ensureDockerImage(
  image: string,
  localBuild?: {
    contextDir: string;
    dockerfile?: string;
  },
): Promise<void> {
  const inspect = await runCommand("docker", ["image", "inspect", image], { check: false });
  if (inspect.exitCode === 0) {
    return;
  }
  if (localBuild) {
    const buildArgs = ["build", "-t", image];
    if (localBuild.dockerfile) {
      buildArgs.push("-f", localBuild.dockerfile);
    }
    buildArgs.push(localBuild.contextDir);
    await runCommand("docker", buildArgs, { inheritStdio: true });
    return;
  }
  await runCommand("docker", ["pull", image], { inheritStdio: true });
}

export async function runDockerCompose(
  composeFile: string,
  args: string[],
  inheritStdio = true,
): Promise<CommandResult> {
  return runCommand("docker", ["compose", "-f", composeFile, ...args], { inheritStdio });
}

export async function waitForTcpPort(host: string, port: number, timeoutMs: number): Promise<void> {
  const pollIntervalMs = 1000;
  const startedAt = Date.now();

  while (Date.now() - startedAt <= timeoutMs) {
    const reachable = await new Promise<boolean>((resolve) => {
      const socket = new net.Socket();
      socket.setTimeout(pollIntervalMs);

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

    if (reachable) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
  }

  throw new Error(`Timed out waiting for ${host}:${port} to become ready.`);
}

export async function generateCryptoWithDocker(options: GenerateCryptoOptions): Promise<void> {
  const { buildContextDir, channelName, configDir, cryptoTargetDir, dockerfile, profileName, toolsImage } = options;
  const resolvedConfigDir = path.resolve(configDir);
  const resolvedCryptoDir = path.resolve(cryptoTargetDir);
  const userArgs = currentDockerUserArgs();
  const mountArgs = [
    "-v",
    `${resolvedConfigDir}:/config`,
    "-v",
    `${resolvedCryptoDir}:/crypto`,
    "-v",
    `${resolvedCryptoDir}:/config/crypto`,
    "-w",
    "/config",
  ];

  await fs.ensureDir(resolvedCryptoDir);
  await fs.emptyDir(resolvedCryptoDir);
  await ensureDockerImage(
    toolsImage,
    buildContextDir
      ? {
          contextDir: buildContextDir,
          dockerfile,
        }
      : undefined,
  );

  await runCommand(
    "docker",
    [
      "run",
      "--rm",
      ...userArgs,
      ...mountArgs,
      toolsImage,
      "cryptogen",
      "generate",
      "--config=/config/crypto-config.yaml",
      "--output=/crypto",
    ],
    { inheritStdio: true },
  );

  await runCommand(
    "docker",
    [
      "run",
      "--rm",
      ...userArgs,
      ...mountArgs,
      toolsImage,
      "configtxgen",
      "-configPath",
      "/config",
      "-channelID",
      channelName,
      "-profile",
      profileName,
      "-outputBlock",
      "/crypto/genesis.block",
    ],
    { inheritStdio: true },
  );
}

async function containerHasFxconfig(containerName: string): Promise<boolean> {
  const result = await runCommand(
    "docker",
    ["exec", containerName, "sh", "-lc", "command -v fxconfig >/dev/null 2>&1"],
    { check: false },
  );
  return result.exitCode === 0;
}

async function runFxconfigCommand(
  options: NamespaceBaseOptions,
  envVars: string[],
  args: string[],
  inheritStdio = true,
): Promise<CommandResult> {
  const { containerName, cryptoTargetDir, image } = options;
  const dockerEnvArgs = envVars.flatMap((envVar) => ["-e", envVar]);

  if (await containerHasFxconfig(containerName)) {
    return runCommand("docker", ["exec", ...dockerEnvArgs, containerName, "fxconfig", ...args], {
      inheritStdio,
    });
  }

  const resolvedCryptoDir = path.resolve(cryptoTargetDir);

  return runCommand(
    "docker",
    [
      "run",
      "--rm",
      "--user",
      "0:0",
      "--network",
      `container:${containerName}`,
      "-v",
      `${resolvedCryptoDir}:/root/artifacts/crypto`,
      ...dockerEnvArgs,
      image,
      "fxconfig",
      ...args,
    ],
    { inheritStdio },
  );
}

export async function listNamespaces(options: ListNamespacesOptions): Promise<string> {
  const result = await runFxconfigCommand(
    options,
    [`FXCONFIG_QUERIES_ADDRESS=${options.queriesAddress}`],
    ["namespace", "list"],
    false,
  );
  return result.stdout;
}

export async function createNamespace(options: CreateNamespaceOptions): Promise<void> {
  const envVars = [
    `FXCONFIG_MSP_LOCALMSPID=${options.mspId}`,
    `FXCONFIG_MSP_CONFIGPATH=${options.mspConfigPath}`,
    `FXCONFIG_ORDERER_CHANNEL=${options.channelName}`,
    `FXCONFIG_ORDERER_ADDRESS=${options.ordererAddress}`,
    `FXCONFIG_NOTIFICATIONS_ADDRESS=${options.notificationsAddress}`,
  ];

  const args = ["namespace", "create", options.namespace, `--policy=${options.policy}`, "--endorse", "--submit"];
  if (options.waitForCommit) {
    args.push("--wait");
  }

  await runFxconfigCommand(options, envVars, args);
}
