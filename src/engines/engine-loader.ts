import { FabloEngine } from "./engine";
import { FabricXEngine } from "./fabricx";
import { ClassicFabricEngine } from "./classic";
import { FABRICX_SCHEMA_SUFFIX } from "../utils/resolveTargetDir";

export function getEngine(config: any): FabloEngine {
  if (config === null || typeof config !== "object") {
    throw new Error("Invalid config: expected a JSON object.");
  }

  if (typeof config.$schema === "string" && config.$schema.endsWith(FABRICX_SCHEMA_SUFFIX)) {
    return new FabricXEngine();
  }
  return new ClassicFabricEngine();
}
