// src/engine/io/parser.ts

import { parse } from 'yaml'

export type ParsedFile<T = unknown> = {
  value: T
  source: string
}

export function parseYaml<T = unknown>(
  source: string,
  filename: string
): ParsedFile<T> {
  try {
    const value = parse(source)
    if (value === null || value === undefined) {
      throw new Error('YAML file is empty or invalid')
    }
    return { value, source: filename }
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Unknown YAML parse error'
    throw new Error(`YAML parse error in ${filename}: ${message}`)
  }
}
