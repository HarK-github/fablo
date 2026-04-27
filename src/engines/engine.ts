export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export interface FabloEngine {
  validate(rawConfig: unknown): ValidationResult;
  generate(config: any, targetDir?: string): Promise<void>;
  up(targetDir?: string): Promise<void>;
  down(targetDir?: string): Promise<void>;
  status(targetDir?: string): Promise<string>;
}
