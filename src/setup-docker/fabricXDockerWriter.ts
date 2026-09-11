import { FabloConfigExtended, ChannelConfig, OrgConfig } from "../types/FabloConfigExtended";
import { renderTemplate, getTemplatePath, getDestinationPath } from "../utils/templateUtils";
import * as fs from "fs-extra";
import * as path from "path";

export class FabricXDockerWriter {
  constructor(private templatesDir: string, private outputDir: string, private log: (msg: string) => void) {}

  public async write(configExtended: FabloConfigExtended): Promise<void> {
    const { channel, primaryOrg } = this._validateAndExtractContext(configExtended);

    this.log("Generating Fabric-X network files...");

    const primaryOrgSlug = primaryOrg.name.toLowerCase();
    const data: Record<string, unknown> = {
      ...configExtended,
      channel,
      primaryOrg,
      primaryOrgSlug,
    };

    // Render root helper script
    await this._renderTemplateFile("fabric-x-docker.sh", data);

    // Render Fabric-X topology directory tree
    await this._renderTemplateDirectory("fabric-x", data);

    this.log("Fabric-X network files successfully generated under fabric-x/");
  }

  private _validateAndExtractContext(config: FabloConfigExtended): {
    channel: ChannelConfig;
    primaryOrg: OrgConfig;
  } {
    // Fabric-X committer stack currently operates on a single channel and primary application org
    const channel = config.channels?.[0];
    if (!channel || !channel.instantiatingOrg) {
      throw new Error("Fabric-X generator requires at least one channel with an organization.");
    }
    return { channel, primaryOrg: channel.instantiatingOrg };
  }

  private async _renderTemplateFile(file: string, data: Record<string, unknown>): Promise<void> {
    const templatePath = getTemplatePath(this.templatesDir, file);
    const destPath = getDestinationPath(this.outputDir, file);
    await renderTemplate(templatePath, destPath, data);
  }

  private async _renderTemplateDirectory(dir: string, data: Record<string, unknown>): Promise<void> {
    const templateDirPath = getTemplatePath(this.templatesDir, dir);
    const entries = await fs.readdir(templateDirPath, { withFileTypes: true });

    for (const entry of entries) {
      const relativePath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await this._renderTemplateDirectory(relativePath, data);
      } else if (entry.isFile()) {
        await this._renderTemplateFile(relativePath, data);
      }
    }
  }
}
