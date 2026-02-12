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
 * OPERATOR CONDITIONS
 * ============================================================
 */

function evaluateOperator(
  condition: any,
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

  return handler(payload, session, model)
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
    return cond.all.every(c =>
      evaluateCondition(c, session, model, plugins)
    )
  }

  if (cond.any) {
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
  return 'all' in c || 'any' in c || 'not' in c
}
