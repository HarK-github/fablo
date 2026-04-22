import { Args, Command } from "@oclif/core";
import parseFabloConfig from "../../utils/parseFabloConfig";
import extendConfig from "../../extend-config/extendConfig";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

export default class Status extends Command {
  static override description = "Show network status";

  static override args = {
    fabloConfig: Args.string({
      description: "Fablo config file path",
      required: false,
      default: "fablo-config.json",
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
      const json = parseFabloConfig(configContent);
      const config = extendConfig(json);

      if (config.global.platform === "fabricx") {
        this.log("Fabric-X Network Status:");
        try {
          execSync(
            "docker ps --filter name=test-committer --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'",
            {
              stdio: "inherit",
            },
          );
        } catch (e) {
          this.error("Failed to get Docker status.");
        }

        // Bonus: Check if services are healthy
        this.log("\nService Health:");
          const checkService = (port: number, serviceName: string) => {
            try {
              execSync(`nc -zv localhost ${port}`, { stdio: "ignore", timeout: 2000 });
              this.log(`✅ ${serviceName} (${port})`);
            } catch (e) {
              this.log(`❌ ${serviceName} (${port})`);
            }
          };

          checkService(7050, "Orderer");
          checkService(7001, "Query Service");
          checkService(4001, "Sidecar");
        return;
      }

      // Default (classic Fabric) status is handled by fabric-docker.sh via fablo.sh,
      // but if called directly via CLI, we could implement it here too.
      // For now, we only implement the Fabric-X branch as requested.
      this.log("Classic Fabric status should be viewed via './fablo.sh status'");
    } catch (error) {
      this.error(`Error getting status: ${(error as Error).message}`);
    }
  }
}
