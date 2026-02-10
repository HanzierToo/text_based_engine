// src/engine/io/assets.ts

export type RawGameAssets = {
  game: string
  rules: string
  state: string
  scenes: Record<string, string>
  localization: Record<string, string>
}

export function collectRawGameAssets(): RawGameAssets {
  // Load all yaml files under src/game
  const files = import.meta.glob('/src/game/**/*.yaml', {
    as: 'raw',
    eager: true,
  }) as Record<string, string>

  let game: string | null = null
  let rules: string | null = null
  let state: string | null = null

  const scenes: Record<string, string> = {}
  const localization: Record<string, string> = {}

  for (const [path, content] of Object.entries(files)) {
    if (path.endsWith('/game.yaml')) {
      game = content
    } else if (path.endsWith('/rules.yaml')) {
      rules = content
    } else if (path.endsWith('/state.yaml')) {
      state = content
    } else if (path.includes('/scenes/')) {
      const name = path.split('/scenes/')[1]
      scenes[name] = content
    } else if (path.includes('/localization/')) {
      const name = path.split('/localization/')[1]
      localization[name] = content
    }
  }

  if (!game) throw new Error('Missing required file: game.yaml')
  if (!rules) throw new Error('Missing required file: rules.yaml')
  if (!state) throw new Error('Missing required file: state.yaml')

  return {
    game,
    rules,
    state,
    scenes,
    localization,
  }
}
