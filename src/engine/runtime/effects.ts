// src/engine/runtime/effects.ts

import type { Effect } from '../schema/types'
import type { GameSession } from './session'
import type { NormalizedGameModel } from '../schema/normalize'
import { EngineError } from './errors'
import { PluginRegistry } from '../plugins/registry'

export function applyEffects(
  effects: Effect[] | undefined,
  session: GameSession,
  model: NormalizedGameModel,
  plugins: PluginRegistry
): void {
  if (!effects || effects.length === 0) return

  for (const effect of effects) {
    const key = Object.keys(effect)[0]
    const handler = plugins.findEffectHandler(key)

    if (!handler) {
      throw new EngineError(
        'E_EFFECT_INVALID',
        `Unknown effect operator "${key}"`
      )
    }

    handler((effect as any)[key], session, model)
  }
}
