// src/engine/plugins/builtins/core.ts

import type { EnginePlugin } from '../plugin'
import type { GameSession } from '../../runtime/session'
import type { NormalizedGameModel } from '../../schema/normalize'
import type { RandomValue } from '../../schema/types'
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
    add(
      payload: { var: string; value: number | RandomValue },
      session: GameSession,
      model: NormalizedGameModel
    ) {
      if (!payload || typeof payload.var !== 'string') {
        throw new EngineError(
          'E_EFFECT_INVALID',
          'add requires { var: string, value: number | RandomValue }'
        )
      }

      const current = session.getVar(payload.var)

      if (typeof current !== 'number') {
        throw new EngineError(
          'E_STATE_TYPE_MISMATCH',
          `Cannot add to non-number variable "${payload.var}"`
        )
      }

      let delta: number

      if (typeof payload.value === 'number') {
        delta = payload.value
      } else if (
        typeof payload.value === 'object' &&
        payload.value &&
        'random' in payload.value
      ) {
        if (!model.rules.systems.randomness) {
          throw new EngineError(
            'E_SYSTEM_DISABLED_USAGE',
            'Randomness system disabled'
          )
        }

        delta = resolveRandom(payload.value.random, session)
      } else {
        throw new EngineError(
          'E_EFFECT_INVALID',
          'Invalid add value'
        )
      }

      console.log("[Core.add] applying", {
        var: payload.var,
        current,
        delta,
        next: current + delta,
        payload,
      });

      session.setVar(payload.var, current + delta)
    },

    set(
      payload: { var: string; value: boolean | number | string },
      session: GameSession
    ) {
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
      'Numeric comparison requires numbers'
    )
  }

  return comparator(current, value)
}

function resolveRandom(
  randomString: string,
  session: GameSession
): number {
  const rng = session.rng
  if (!rng) {
    console.error("[Core.add] RNG missing. Did randomness plugin initialize it?");
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

  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator <= 0) {
    throw new EngineError(
      'E_EFFECT_INVALID',
      `Invalid random values "${randomString}"`
    );
  }

  const before = { seed: rng.seed, counter: rng.counter };
  const seed = rng.seed;
  const counter = rng.counter++;
  const rand = Math.abs(Math.sin(seed + counter) * 10000) % 1;
  const out = rand < numerator / denominator ? 1 : 0;

  console.log("[Core.add] resolveRandom", {
    randomString,
    before,
    after: { seed: rng.seed, counter: rng.counter },
    rand,
    threshold: numerator / denominator,
    out,
  });

  return rand < numerator / denominator ? 1 : 0
}