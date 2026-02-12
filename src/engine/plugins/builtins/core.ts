// src/engine/plugins/builtins/core.ts

import type { EnginePlugin } from '../plugin'
import type { GameSession } from '../../runtime/session'
import type { NormalizedGameModel } from '../../schema/normalize'
import { EngineError } from '../../runtime/errors'

export const CorePlugin: EnginePlugin = {
  id: 'core',

  /* ============================================================
   * CONDITION OPERATORS
   * ============================================================
   */

  conditions: {
    eq(payload, session: GameSession) {
      const { var: name, value } = payload
      const current = session.getVar(name)
      return current === value
    },

    neq(payload, session: GameSession) {
      const { var: name, value } = payload
      const current = session.getVar(name)
      return current !== value
    },

    gt(payload, session: GameSession) {
      return numericCompare(payload, session, (a, b) => a > b)
    },

    gte(payload, session: GameSession) {
      return numericCompare(payload, session, (a, b) => a >= b)
    },

    lt(payload, session: GameSession) {
      return numericCompare(payload, session, (a, b) => a < b)
    },

    lte(payload, session: GameSession) {
      return numericCompare(payload, session, (a, b) => a <= b)
    },
  },

  /* ============================================================
   * EFFECT OPERATORS
   * ============================================================
   */

  effects: {
    set(payload, session: GameSession) {
      const { var: name, value } = payload
      const current = session.getVar(name)

      if (typeof current !== typeof value) {
        throw new EngineError(
          'E_STATE_TYPE_MISMATCH',
          `Cannot set "${name}" (${typeof current}) to ${typeof value}`
        )
      }

      session.setVar(name, value)
    },

    add(payload, session: GameSession, model: NormalizedGameModel) {
      const { var: name, value } = payload
      const current = session.getVar(name)

      if (typeof current !== 'number') {
        throw new EngineError(
          'E_STATE_TYPE_MISMATCH',
          `Cannot add to non-number variable "${name}"`
        )
      }

      if (typeof value !== 'number') {
        throw new EngineError(
            'E_EFFECT_INVALID',
            'Random values require randomness system enabled'
        )
      }

      const delta = value

      session.setVar(name, current + delta)
    },
  },
}

/* ============================================================
 * HELPERS
 * ============================================================
 */

function numericCompare(
  payload: any,
  session: GameSession,
  comparator: (a: number, b: number) => boolean
): boolean {
  const { var: name, value } = payload
  const current = session.getVar(name)

  if (typeof current !== 'number' || typeof value !== 'number') {
    throw new EngineError(
      'E_CONDITION_INVALID',
      `Numeric comparison requires numbers`
    )
  }

  return comparator(current, value)
}
