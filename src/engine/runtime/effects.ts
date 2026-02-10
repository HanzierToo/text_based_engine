// src/engine/runtime/effects.ts

import type { Effect, SetEffect, AddEffect, RandomValue } from '../schema/types'
import type { GameSession } from './session'
import type { NormalizedGameModel } from '../schema/normalize'
import { EngineError } from './errors'

export function applyEffects(
  effects: Effect[] | undefined,
  session: GameSession,
  model: NormalizedGameModel
): void {
  if (!effects || effects.length === 0) return

  for (const effect of effects) {
    if ('set' in effect) {
      applySet(effect, session)
    } else if ('add' in effect) {
      applyAdd(effect, session, model)
    } else {
      throw new EngineError(
        'E_EFFECT_INVALID',
        'Unknown effect type'
      )
    }
  }
}

/* ============================================================
 * SET
 * ============================================================
 */

function applySet(
  effect: SetEffect,
  session: GameSession
): void {
  const { var: name, value } = effect.set
  const current = session.getVar(name)

  if (typeof current !== typeof value) {
    throw new EngineError(
      'E_STATE_TYPE_MISMATCH',
      `Cannot set "${name}" (${typeof current}) to ${typeof value}`
    )
  }

  session.setVar(name, value)
}

/* ============================================================
 * ADD
 * ============================================================
 */

function applyAdd(
  effect: AddEffect,
  session: GameSession,
  model: NormalizedGameModel
): void {
  const { var: name, value } = effect.add
  const current = session.getVar(name)

  if (typeof current !== 'number') {
    throw new EngineError(
      'E_STATE_TYPE_MISMATCH',
      `Cannot add to non-number variable "${name}"`
    )
  }

  const delta =
    typeof value === 'number'
      ? value
      : resolveRandom(value, session, model)

  session.setVar(name, current + delta)
}

/* ============================================================
 * RANDOM
 * ============================================================
 */

function resolveRandom(
  rv: RandomValue,
  session: GameSession,
  model: NormalizedGameModel
): number {
  if (!model.rules.systems.randomness) {
    throw new EngineError(
      'E_SYSTEM_DISABLED_USAGE',
      'Randomness used but randomness system is disabled'
    )
  }

  const rng = session.rng
  if (!rng) {
    throw new EngineError(
      'E_EFFECT_INVALID',
      'Randomness system enabled but RNG state missing'
    )
  }

  // Format: "1/10"
  const parts = rv.random.split('/')
  if (parts.length !== 2) {
    throw new EngineError(
      'E_EFFECT_INVALID',
      `Invalid random format "${rv.random}", expected "x/y"`
    )
  }

  const numerator = Number(parts[0])
  const denominator = Number(parts[1])

  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator <= 0) {
    throw new EngineError(
      'E_EFFECT_INVALID',
      `Invalid random values "${rv.random}"`
    )
  }

  // Deterministic RNG (LCG-style)
  const seed = rng.seed
  const counter = rng.counter++

  const rand =
    Math.abs(
      Math.sin(seed + counter) * 10000
    ) % 1

  return rand < numerator / denominator ? 1 : 0
}
