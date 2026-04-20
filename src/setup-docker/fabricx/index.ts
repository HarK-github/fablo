import { FabloConfigExtended } from "../../types/FabloConfigExtended";
import { FabricXNodeJson } from "../../types/FabloConfigJson";
import * as path from "path";
import * as fs from "fs-extra";
import { renderTemplate } from "../../utils/templateUtils";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

import { execSync } from "child_process";

async function waitForServices(): Promise<void> {
  console.log("Waiting for Fabric-X services to become available...");
  const ports = [7001, 7050]; // Query and Orderer ports
  const maxAttempts = 100; // 100 seconds timeout
  const delay = 1000; // 1 second delay

  for (const port of ports) {
    let attempts = 0;
    let serviceReady = false;
    while (attempts < maxAttempts && !serviceReady) {
      try {
        execSync(`nc -zv localhost ${port}`, { stdio: "ignore", timeout: delay });
        console.log(`✓ Service on port ${port} ready`);
        serviceReady = true;
      } catch (e) {
        attempts++;
        await sleep(delay);
      }
    }

    if (!serviceReady) {
      throw new Error(`Service on port ${port} did not become available within ${maxAttempts} seconds.`);
    }
  }
}



export async function setupDockerFabricX(_config: FabloConfigExtended): Promise<void> {
  console.log("Generating Fabric-X artifacts...");

  const targetDir = path.join(process.cwd(), "fablo-target");
  await fs.ensureDir(targetDir);

  // Remove Fablo's snapshot files to prevent corruption errors
  const snapshotFiles = [path.join(targetDir, "fablo-config-snapshot.json"), path.join(targetDir, ".fablo-snapshot")];
  for (const file of snapshotFiles) {
    if (await fs.pathExists(file)) {
      await fs.remove(file);
    }
  }

  const templatesDir = path.join(__dirname, "../templates");

  // Phase 3: Infrastructure Compose Template
  const cryptoPath = path.join(process.cwd(), "fablo-target", "crypto");
  const composeTemplatePath = path.join(templatesDir, "fabricx-docker/docker-compose.xdev.yaml.ejs");
  const composeDestPath = path.join(targetDir, "docker-compose.xdev.yaml");

  await renderTemplate(composeTemplatePath, composeDestPath, {
    cryptoPath,
  });
  // Note: renderTemplate already writes to file, but I'll follow the user's snippet logic if needed.
  // Actually, our renderTemplate writes the file. So we are good.

  // Phase 4: Copy Crypto Material
  const sampleCryptoPath = path.join(process.cwd(), "..", "fabric-x-repo", "samples", "tokens", "crypto");
  const targetCryptoPath = path.join(targetDir, "crypto");

  if (await fs.pathExists(sampleCryptoPath)) {
    await fs.copy(sampleCryptoPath, targetCryptoPath);
    console.log(`Copied crypto from ${sampleCryptoPath}`);
  } else {
    console.warn("Sample crypto not found. Run 'make setup-fabric' in fabric-x/samples/tokens first.");
  }

  const channelId = _config.fabricx?.channelId;
  const namespace = _config.fabricx?.namespace;

  const allNodes: (FabricXNodeJson & { mspName: string })[] = [];
  _config.orgs.forEach((org) => {
    if (org.fabricx?.nodes) {
      org.fabricx.nodes.forEach((node: FabricXNodeJson) => {
        allNodes.push({ ...node, mspName: org.mspName });
      });
    }
  });

  const endorserNodes = allNodes.filter((node) => node.type === "endorser");

  // Phase 5: core.yaml Generation
  for (const org of _config.orgs) {
    if (org.fabricx && org.fabricx.nodes) {
      for (const node of org.fabricx.nodes) {
        const confDir = path.join(targetDir, "conf", node.id);
        await fs.ensureDir(confDir);

        const coreYamlTemplatePath = path.join(templatesDir, "fabricx-config/core.yaml.ejs");
        const coreYamlDestPath = path.join(confDir, "core.yaml");

        await renderTemplate(coreYamlTemplatePath, coreYamlDestPath, {
          node,
          mspName: org.mspName,
          channelId,
          namespace,
          allNodes,
          endorserNodes,
        });
      }
    }
  }

  // Phase 6: routing-config.yaml Generation
  const routingConfigTemplatePath = path.join(templatesDir, "fabricx-config/routing-config.yaml.ejs");
  const routingConfigDestPath = path.join(targetDir, "conf", "routing-config.yaml");

  await renderTemplate(routingConfigTemplatePath, routingConfigDestPath, {
    allNodes,
  });

  console.log("Fabric-X generation complete.");

  // Phase 7: fabric-docker.sh Generation
  const fabricDockerShTemplatePath = path.join(templatesDir, "fabricx-docker/fabric-docker.sh.ejs");
  const fabricDockerShDestPath = path.join(targetDir, "fabric-docker.sh");

  await renderTemplate(fabricDockerShTemplatePath, fabricDockerShDestPath, {});
  await fs.chmod(fabricDockerShDestPath, 0o755);

  await waitForServices();

  console.log("Fabric-X setup complete. Network should be ready.");
}
