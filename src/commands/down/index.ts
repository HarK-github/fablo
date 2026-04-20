import { Args, Command } from "@oclif/core";
import parseFabloConfig from "../../utils/parseFabloConfig";
import extendConfig from "../../extend-config/extendConfig";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

export default class Down extends Command {
  static override description = "Tear down Fablo network";

  static override args = {
    fabloConfig: Args.string({
      description: "Fablo config file path",
      required: false,
      default: "fablo-config.json",
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
      const json = parseFabloConfig(configContent);
      const config = extendConfig(json);

      if (config.global.platform === "fabricx") {
        this.log("Bringing down Fabric-X network...");
        try {
          execSync(
            "docker compose -f fablo-target/docker-compose.xdev.yaml down",
            {
              stdio: "inherit",
            },
          );
          this.log("✅ Fabric-X network brought down successfully.");
        } catch (e) {
          this.error(`Failed to bring down Fabric-X network: ${(e as Error).message}`);
        }
        return;
      }

      // Default (classic Fabric) down is handled by fabric-docker.sh via fablo.sh,
      // but if called directly via CLI, we could implement it here too.
      this.log("Classic Fabric network should be brought down via './fablo.sh down'");
    } catch (error) {
      this.error(`Error bringing down network: ${(error as Error).message}`);
    }
  }
}
