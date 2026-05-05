import { Args, Command } from "@oclif/core";
import parseFabloConfig from "../../utils/parseFabloConfig";
import * as fs from "fs";
import * as path from "path";
import { getEngine } from "../../engines/engine-loader";
import { resolveDefaultTargetDir } from "../../utils/resolveTargetDir";

export default class Status extends Command {
  static override description = "Show network status";

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
      const { args } = await this.parse(Status);
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

      const statusText = await engine.status(targetDir);
      this.log(statusText);
    } catch (error) {
      this.error(`Error getting status: ${(error as Error).message}`);
    }
  }
}
