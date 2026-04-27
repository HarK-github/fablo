import { Args, Command } from "@oclif/core";
import parseFabloConfig from "../../utils/parseFabloConfig";
import * as fs from "fs";
import * as path from "path";
import { getEngine } from "../../engines/engine-loader";

const FABRICX_SCHEMA_SUFFIX = "fabricx-schema-v1.json";

function resolveDefaultTargetDir(config: any): string {
  if (config?.$schema?.endsWith(FABRICX_SCHEMA_SUFFIX)) {
    return path.join(process.cwd(), "fablo-target", "fabricx");
  }
  return path.join(process.cwd(), "fablo-target");
}

export default class Down extends Command {
  static override description = "Tear down Fablo network";

  static override args = {
    fabloConfig: Args.string({
      description: "Fablo config file path",
      required: false,
      default: "fablo-config.json",
    }),
    targetDir: Args.string({
      description: "Target directory with generated files",
      required: false,
    }),
  };

  public async run(): Promise<void> {
    try {
      const { args } = await this.parse(Down);
      const configPath = args.fabloConfig ?? "fablo-config.json";
      const fabloConfigPath = path.isAbsolute(configPath) ? configPath : path.join(process.cwd(), configPath);

      if (!fs.existsSync(fabloConfigPath)) {
        this.error(`Config file not found: ${fabloConfigPath}`);
      }

      const configContent = fs.readFileSync(fabloConfigPath, "utf-8");
      const config = parseFabloConfig(configContent);
      const engine = getEngine(config);

      const defaultTargetDir = resolveDefaultTargetDir(config);
      const targetDirArg = args.targetDir;
      const targetDir = targetDirArg
        ? path.isAbsolute(targetDirArg)
          ? targetDirArg
          : path.join(process.cwd(), targetDirArg)
        : defaultTargetDir;

      await engine.down(targetDir);
    } catch (error) {
      this.error(`Error bringing down network: ${(error as Error).message}`);
    }
  }
}
