import { FabloConfigExtended, FabricXOrgConfig, FabricXTemplateModel } from "../types/FabloConfigExtended";
import { renderTemplate, getTemplatePath, getDestinationPath } from "../utils/templateUtils";
import { shellQuote } from "../utils/shellQuote";
import * as fs from "fs-extra";
import * as path from "path";

export { FabricXOrgConfig, FabricXTemplateModel };

export const getFabricXTemplateModel = (configExtended: FabloConfigExtended): FabricXTemplateModel => {
  const [channel] = configExtended.channels;
  if (!channel) {
    throw new Error("Fabric-X generation requires exactly one channel.");
  }
  if (!channel.orgs || channel.orgs.length === 0) {
    throw new Error("Fabric-X generator requires at least one channel with an organization.");
  }

  const applicationOrgs: FabricXOrgConfig[] = channel.orgs.map((org, index) => {
    const orgIndex = configExtended.orgs.findIndex((o) => o.name === org.name);
    const resolvedIndex = orgIndex >= 0 ? orgIndex : index;
    return {
      ...org,
      slug: org.name.toLowerCase(),
      sidecarPort: 4001 + 1000 * resolvedIndex,
      queryServicePort: 7001 + 1000 * resolvedIndex,
    };
  });

  const applicationOrg = applicationOrgs[0];
  const defaultPolicy = `AND(${applicationOrgs.map((o) => `'${o.mspName}.member'`).join(",")})`;

  return {
    channelName: channel.name,
    channelProfileName: channel.profileName,
    applicationOrg,
    applicationOrgSlug: applicationOrg.slug,
    applicationOrgs,
    defaultPolicy,
  };
};

export class FabricXDockerWriter {
  constructor(private templatesDir: string, private outputDir: string, private log: (msg: string) => void) {}

  public async write(configExtended: FabloConfigExtended): Promise<void> {
    this.log("Generating Fabric-X network files...");

    const fabricX = getFabricXTemplateModel(configExtended);
    const data = {
      ...(configExtended as unknown as Record<string, unknown>),
      fabricX,
      appOrg: fabricX.applicationOrg,
      shellQuote,
    };

    await this.renderTemplateFile("fabric-x-docker.sh", data);
    await this.renderTemplateDirectory("fabric-x", data);

    for (const org of fabricX.applicationOrgs) {
      const orgData = { ...data, appOrg: org };
      await this.renderTemplateFile(
        path.join("fabric-x", "config", "validator.yaml"),
        orgData,
        path.join("fabric-x", "config", `committer-${org.slug}-validator.yaml`),
      );
      await this.renderTemplateFile(
        path.join("fabric-x", "config", "committer-coordinator.yaml"),
        orgData,
        path.join("fabric-x", "config", `committer-${org.slug}-coordinator.yaml`),
      );
      await this.renderTemplateFile(
        path.join("fabric-x", "config", "sidecar.yaml"),
        orgData,
        path.join("fabric-x", "config", `committer-${org.slug}-sidecar.yaml`),
      );
      await this.renderTemplateFile(
        path.join("fabric-x", "config", "query-service.yaml"),
        orgData,
        path.join("fabric-x", "config", `committer-${org.slug}-query-service.yaml`),
      );
      await this.renderTemplateFile(
        path.join("fabric-x", "fxconfig.yaml"),
        orgData,
        path.join("fabric-x", `fxconfig-${org.slug}.yaml`),
      );
    }

    this.log("Fabric-X network files successfully generated under fabric-x/");
  }

  private async renderTemplateFile(file: string, data: Record<string, unknown>, destFile?: string): Promise<void> {
    const templatePath = getTemplatePath(this.templatesDir, file);
    const destPath = getDestinationPath(this.outputDir, destFile ?? file);
    await renderTemplate(templatePath, destPath, data);
  }

  private async renderTemplateDirectory(dir: string, data: Record<string, unknown>): Promise<void> {
    const templateDirPath = getTemplatePath(this.templatesDir, dir);

    const entries = await fs.readdir(templateDirPath, { withFileTypes: true });

    for (const entry of entries) {
      const relativePath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await this.renderTemplateDirectory(relativePath, data);
      } else if (entry.isFile()) {
        await this.renderTemplateFile(relativePath, data);
      }
    }
  }
}
