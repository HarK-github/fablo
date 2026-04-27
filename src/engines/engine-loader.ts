import { FabloEngine } from "./engine";
import { FabricXEngine } from "./fabricx";
import { ClassicFabricEngine } from "./classic";

const FABRICX_SCHEMA_SUFFIX = "fabricx-schema-v1.json";

export function getEngine(config: any): FabloEngine {
  if (config?.$schema?.endsWith(FABRICX_SCHEMA_SUFFIX)) {
    return new FabricXEngine();
  }
  return new ClassicFabricEngine();
}
