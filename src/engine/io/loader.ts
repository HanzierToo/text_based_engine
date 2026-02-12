// src/engine/io/loader.ts

import { collectRawGameAssets } from './assets'
import { parseYaml, ParsedFile } from './parser'

export type LoadedGameFiles = {
  game: ParsedFile
  rules: ParsedFile
  state: ParsedFile
  items: ParsedFile
  scenes: Record<string, ParsedFile>
  localization: Record<string, ParsedFile>
}

export function loadGameFiles(): LoadedGameFiles {
  const raw = collectRawGameAssets()

  const scenes: Record<string, ParsedFile> = {}
  for (const [name, content] of Object.entries(raw.scenes)) {
    scenes[name] = parseYaml(content, `scenes/${name}`)
  }

  const localization: Record<string, ParsedFile> = {}

  for (const [name, content] of Object.entries(raw.localization)) {
    const namespace = name.replace(/\.ya?ml$/, '')
    localization[namespace] = parseYaml(
      content,
      `localization/${name}`
    )
  }
  
  return {
    game: parseYaml(raw.game, 'game.yaml'),
    rules: parseYaml(raw.rules, 'rules.yaml'),
    state: parseYaml(raw.state, 'state.yaml'),
    items: parseYaml(raw.items, 'items.yaml'),
    scenes,
    localization,
  }
}
