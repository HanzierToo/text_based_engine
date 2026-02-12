// src/engine/runtime/resolver.ts

import type {
  TextFragment,
  LocalizationKey,
} from '../schema/types'
import type { GameSession } from './session'
import type { NormalizedGameModel } from '../schema/normalize'
import { evaluateCondition } from './evaluator'
import { EngineError } from './errors'
import type { PluginRegistry } from '../plugins/registry'

export function resolveText(
  fragments: TextFragment[],
  session: GameSession,
  model: NormalizedGameModel,
  plugins: PluginRegistry
): string[] {
  const out: string[] = []

  for (const frag of fragments) {
    if (typeof frag === 'string') {
      out.push(interpolate(frag, session, model, plugins))
      continue
    }

    if (isLocalizationKey(frag)) {
      const raw = resolveKey(frag.key, model)
      out.push(interpolate(raw, session, model, plugins))
      continue
    }

    // Conditional fragment
    if ('if' in frag) {
      if (evaluateCondition(frag.if, session, model, plugins)) {
        const thenPart = frag.then

        if (typeof thenPart === 'string') {
          out.push(interpolate(thenPart, session, model, plugins))
        } else {
          const raw = resolveKey(thenPart.key, model)
          out.push(interpolate(raw, session, model, plugins))
        }
      }
      continue
    }

    throw new EngineError(
      'E_SCHEMA_INVALID_TYPE',
      'Unknown text fragment structure'
    )
  }

  return out
}

/* ============================================================
 * Localization
 * ============================================================
 */

function resolveKey(
  key: string,
  model: NormalizedGameModel
): string {
  const parts = key.split('.')
  if (parts.length !== 2) {
    throw new EngineError(
      'E_LOCALIZATION_KEY_MISSING',
      `Invalid localization key format "${key}"`
    )
  }

  const [namespace, entry] = parts

  const bundle = model.localization[namespace]
  if (!bundle) {
    throw new EngineError(
      'E_LOCALIZATION_KEY_MISSING',
      `Localization namespace "${namespace}" not found`
    )
  }

  const value = bundle[entry]
  if (value === undefined) {
    throw new EngineError(
      'E_LOCALIZATION_KEY_MISSING',
      `Localization key "${key}" not found`
    )
  }

  return value
}

/* ============================================================
 * Interpolation
 * ============================================================
 */

function interpolate(
  input: string,
  session: GameSession,
  model: NormalizedGameModel,
  plugins: PluginRegistry
): string {
  /* ==========================================
   * Inline conditional blocks
   * ========================================== */

  const conditionalRegex =
    /\{\{if (.*?)\}\}([\s\S]*?)\{\{\/if\}\}/g

  input = input.replace(
    conditionalRegex,
    (_, conditionRaw, innerContent) => {
      const condition = parseInlineCondition(conditionRaw)

      const result = evaluateCondition(
        condition,
        session,
        model,
        plugins
      )

      return result ? innerContent : ''
    }
  )

  /* ==========================================
   * Standard variable interpolation
   * ========================================== */

  return input.replace(/\{\{(.*?)\}\}/g, (_, raw) => {
    const expr = raw.trim()

    if (expr === 'inventory_count') {
      return String(session.inventory.size)
    }

    if (expr === 'inventory_list') {
      if (session.inventory.size === 0) {
        return '(none)'
      }

      const names = Array.from(session.inventory).map(id => {
        const def = model.items.get(id)
        if (!def) {
          throw new EngineError(
            'E_REF_NOT_FOUND',
            `Inventory contains unknown item "${id}"`
          )
        }
        return def.name
      })

      return names.join(', ')
    }

    if (expr.startsWith('has_item:')) {
      const id = expr.slice('has_item:'.length).trim()

      if (!model.items.has(id)) {
        throw new EngineError(
          'E_REF_NOT_FOUND',
          `Interpolation references unknown item "${id}"`
        )
      }

      return String(session.hasItem(id))
    }

    try {
      const value = session.getVar(expr)
      return String(value)
    } catch {
      throw new EngineError(
        'E_STATE_VAR_UNDECLARED',
        `Interpolation variable "${expr}" not declared`
      )
    }
  })
}

function parseInlineCondition(raw: string): any {
  const parts = raw.trim().split(/\s+/)

  if (parts.length === 0) {
    throw new EngineError(
      'E_CONDITION_INVALID',
      'Empty inline condition'
    )
  }

  const operator = parts[0]

  /* ==========================================
   * has_item intro_key
   * ========================================== */
  if (operator === 'has_item') {
    if (parts.length !== 2) {
      throw new EngineError(
        'E_CONDITION_INVALID',
        'has_item requires one argument'
      )
    }

    return {
      has_item: { id: parts[1] }
    }
  }

  /* ==========================================
   * eq has_key true
   * ========================================== */
  if (parts.length !== 3) {
    throw new EngineError(
      'E_CONDITION_INVALID',
      `Invalid inline condition format "${raw}"`
    )
  }

  const [_, varName, valueRaw] = parts

  let value: any = valueRaw

  if (valueRaw === 'true') value = true
  else if (valueRaw === 'false') value = false
  else if (!isNaN(Number(valueRaw))) value = Number(valueRaw)

  return {
    [operator]: {
      var: varName,
      value
    }
  }
}

/* ============================================================
 * Type Guards
 * ============================================================
 */

function isLocalizationKey(
  frag: unknown
): frag is LocalizationKey {
  return typeof frag === 'object' && frag !== null && 'key' in frag
}
