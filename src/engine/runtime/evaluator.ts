// src/engine/runtime/evaluator.ts

import type { Condition, PrimitiveCondition, LogicalCondition } from '../schema/types'
import type { GameSession } from './session'
import { EngineError } from './errors'

export function evaluateCondition(
  condition: Condition,
  session: GameSession
): boolean {
  if (isLogicalCondition(condition)) {
    return evaluateLogical(condition, session)
  }

  if (isPrimitiveCondition(condition)) {
    return evaluatePrimitive(condition, session)
  }

  throw new EngineError(
    'E_CONDITION_INVALID',
    'Invalid condition structure'
  )
}

/* ============================================================
 * Primitive Conditions
 * ============================================================
 */

function evaluatePrimitive(
  cond: PrimitiveCondition,
  session: GameSession
): boolean {
  const value = session.getVar(cond.var)

  if ('eq' in cond) return value === cond.eq
  if ('neq' in cond) return value !== cond.neq

  if (typeof value !== 'number') {
    throw new EngineError(
      'E_CONDITION_INVALID',
      `Numeric comparison on non-number variable "${cond.var}"`
    )
  }

  if ('gt' in cond) return value > cond.gt!
  if ('gte' in cond) return value >= cond.gte!
  if ('lt' in cond) return value < cond.lt!
  if ('lte' in cond) return value <= cond.lte!

  throw new EngineError(
    'E_CONDITION_INVALID',
    `No operator specified for condition on "${cond.var}"`
  )
}

/* ============================================================
 * Logical Conditions
 * ============================================================
 */

function evaluateLogical(
  cond: LogicalCondition,
  session: GameSession
): boolean {
  if (cond.all) {
    return cond.all.every(c => evaluateCondition(c, session))
  }

  if (cond.any) {
    return cond.any.some(c => evaluateCondition(c, session))
  }

  if (cond.not) {
    return !evaluateCondition(cond.not, session)
  }

  throw new EngineError(
    'E_CONDITION_INVALID',
    'Empty logical condition'
  )
}

/* ============================================================
 * Type Guards
 * ============================================================
 */

function isPrimitiveCondition(c: Condition): c is PrimitiveCondition {
  return 'var' in c
}

function isLogicalCondition(c: Condition): c is LogicalCondition {
  return 'all' in c || 'any' in c || 'not' in c
}
