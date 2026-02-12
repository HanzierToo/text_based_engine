import type { GameSession } from '../runtime/session'
import type { NormalizedGameModel } from '../schema/normalize'

export type ConditionHandler = (
  payload: any,
  session: GameSession,
  model: NormalizedGameModel
) => boolean

export type EffectHandler = (
  payload: any,
  session: GameSession,
  model: NormalizedGameModel
) => void

export type Hook = (
  session: GameSession,
  model: NormalizedGameModel
) => void

export interface EnginePlugin {
  id: string

  dependsOn?: string[]
  order?: {
    before?: string[]
    after?: string[]
  }

  conditions?: Record<string, ConditionHandler>
  effects?: Record<string, EffectHandler>

  hooks?: {
    onStart?: Hook
    beforeChoice?: Hook
    afterChoice?: Hook
    beforeTransition?: Hook
    afterTransition?: Hook
  }
}

