import type { EnginePlugin } from '../plugin'
import type { GameSession } from '../../runtime/session'
import { EngineError } from '../../runtime/errors'

export const RandomnessPlugin: EnginePlugin = {
  id: 'randomness',
  order: { after: ['core'] },
  dependsOn: ['core'],

  hooks: {
    onStart(session) {
      session.initializeRng(Date.now())
    },
  },

  effects: {
    add(payload, session, model) {
      if (
        typeof payload.value !== 'object' ||
        !payload.value ||
        !('random' in payload.value)
      ) {
        return
      }

      const { var: name } = payload
      const current = session.getVar(name)

      if (typeof current !== 'number') {
        throw new EngineError(
          'E_STATE_TYPE_MISMATCH',
          `Cannot add random value to non-number variable "${name}"`
        )
      }

      const delta = resolveRandom(payload.value.random, session)
      session.setVar(name, current + delta)
    },
  },
}


function resolveRandom(
  randomString: string,
  session: GameSession
): number {
  const rng = session.rng
  if (!rng) {
    throw new EngineError(
      'E_EFFECT_INVALID',
      'Randomness system enabled but RNG state missing'
    )
  }

  const parts = randomString.split('/')
  if (parts.length !== 2) {
    throw new EngineError(
      'E_EFFECT_INVALID',
      `Invalid random format "${randomString}"`
    )
  }

  const numerator = Number(parts[0])
  const denominator = Number(parts[1])

  if (
    !Number.isFinite(numerator) ||
    !Number.isFinite(denominator) ||
    denominator <= 0
  ) {
    throw new EngineError(
      'E_EFFECT_INVALID',
      `Invalid random values "${randomString}"`
    )
  }

  const seed = rng.seed
  const counter = rng.counter++

  const rand =
    Math.abs(Math.sin(seed + counter) * 10000) % 1

  return rand < numerator / denominator ? 1 : 0
}
