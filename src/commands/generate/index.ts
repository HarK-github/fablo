import { Args, Command } from "@oclif/core";
import * as fs from "fs";
import * as path from "path";
import parseFabloConfig from "../../utils/parseFabloConfig";
import { getEngine } from "../../engines/engine-loader";
import { resolveDefaultTargetDir } from "../../utils/resolveTargetDir";

export default class Generate extends Command {
  static override description = "Generate network files based on config (engine-driven)";

  static override args = {
    fabloConfig: Args.string({
      description: "Fablo config file path",
      required: false,
      default: "fablo-config.json",
    }),
    targetDir: Args.string({
      description: "Target directory for generated files",
      required: false,
    }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(Generate);
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

    await engine.generate(config, targetDir);
    this.log(`✅ Generated into ${targetDir}`);
  }
}
