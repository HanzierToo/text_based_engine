// src/engine/runtime/evaluator.ts

import type {
  Condition,
  LogicalCondition,
} from '../schema/types'
import type { GameSession } from './session'
import type { NormalizedGameModel } from '../schema/normalize'
import { EngineError } from './errors'
import { PluginRegistry } from '../plugins/registry'

export function evaluateCondition(
  condition: Condition,
  session: GameSession,
  model: NormalizedGameModel,
  plugins: PluginRegistry
): boolean {
  if (isLogicalCondition(condition)) {
    return evaluateLogical(condition, session, model, plugins)
  }

  return evaluateOperator(condition, session, model, plugins)
}

/* ============================================================
 * OPERATOR CONDITIONS (Plugin-Driven)
 * ============================================================
 */

function evaluateOperator(
  condition: Record<string, any>,
  session: GameSession,
  model: NormalizedGameModel,
  plugins: PluginRegistry
): boolean {
  const keys = Object.keys(condition)

  if (keys.length !== 1) {
    throw new EngineError(
      'E_CONDITION_INVALID',
      'Operator condition must contain exactly one operator'
    )
  }

  const operator = keys[0]
  const payload = condition[operator]

  const handler = plugins.findConditionHandler(operator)

  if (!handler) {
    throw new EngineError(
      'E_CONDITION_INVALID',
      `Unknown condition operator "${operator}"`
    )
  }

  try {
    return handler(payload, session, model)
  } catch (err) {
    if (err instanceof EngineError) throw err

    throw new EngineError(
      'E_CONDITION_INVALID',
      `Condition operator "${operator}" threw an error`
    )
  }
}

/* ============================================================
 * LOGICAL CONDITIONS
 * ============================================================
 */

function evaluateLogical(
  cond: LogicalCondition,
  session: GameSession,
  model: NormalizedGameModel,
  plugins: PluginRegistry
): boolean {
  if (cond.all) {
    if (!Array.isArray(cond.all) || cond.all.length === 0) {
      throw new EngineError(
        'E_CONDITION_INVALID',
        '"all" must be a non-empty array'
      )
    }

    return cond.all.every(c =>
      evaluateCondition(c, session, model, plugins)
    )
  }

  if (cond.any) {
    if (!Array.isArray(cond.any) || cond.any.length === 0) {
      throw new EngineError(
        'E_CONDITION_INVALID',
        '"any" must be a non-empty array'
      )
    }

    return cond.any.some(c =>
      evaluateCondition(c, session, model, plugins)
    )
  }

  if (cond.not) {
    return !evaluateCondition(cond.not, session, model, plugins)
  }

  throw new EngineError(
    'E_CONDITION_INVALID',
    'Empty logical condition'
  )
}

function isLogicalCondition(c: Condition): c is LogicalCondition {
  return (
    typeof c === 'object' &&
    (('all' in c) || ('any' in c) || ('not' in c))
  )
}