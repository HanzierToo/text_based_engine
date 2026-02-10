// src/engine/runtime/errors.ts

export type EngineErrorCode =
  | 'E_YAML_PARSE'
  | 'E_SCHEMA_MISSING_FIELD'
  | 'E_SCHEMA_INVALID_TYPE'
  | 'E_REF_NOT_FOUND_SCENE'
  | 'E_REF_NOT_FOUND_NODE'
  | 'E_DUPLICATE_ID'
  | 'E_STATE_VAR_UNDECLARED'
  | 'E_STATE_TYPE_MISMATCH'
  | 'E_SYSTEM_DISABLED_USAGE'
  | 'E_CONDITION_INVALID'
  | 'E_EFFECT_INVALID'
  | 'E_LOCALIZATION_KEY_MISSING'
  | 'E_RUNTIME_ILLEGAL_CHOICE'

export class EngineError extends Error {
  readonly code: EngineErrorCode
  readonly file?: string
  readonly path?: string

  constructor(
    code: EngineErrorCode,
    message: string,
    opts?: {
      file?: string
      path?: string
    }
  ) {
    super(message)
    this.code = code
    this.file = opts?.file
    this.path = opts?.path
  }

  toString(): string {
    let out = `[${this.code}] ${this.message}`
    if (this.file) out += `\nFile: ${this.file}`
    if (this.path) out += `\nPath: ${this.path}`
    return out
  }
}
