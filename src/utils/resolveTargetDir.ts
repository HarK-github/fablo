import * as path from "path";

export const FABRICX_SCHEMA_SUFFIX = "fabricx-schema-v1.json";

export function resolveDefaultTargetDir(config: any): string {
  if (config?.$schema?.endsWith(FABRICX_SCHEMA_SUFFIX)) {
    return path.join(process.cwd(), "fablo-target", "fabricx");
  }

  return path.join(process.cwd(), "fablo-target");
}
