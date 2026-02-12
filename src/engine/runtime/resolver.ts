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
      out.push(interpolate(frag, session))
      continue
    }

    if (isLocalizationKey(frag)) {
      const raw = resolveKey(frag.key, model)
      out.push(interpolate(raw, session))
      continue
    }

    // Conditional fragment
    if ('if' in frag) {
      if (evaluateCondition(frag.if, session, model, plugins)) {
        const thenPart = frag.then

        if (typeof thenPart === 'string') {
          out.push(interpolate(thenPart, session))
        } else {
          const raw = resolveKey(thenPart.key, model)
          out.push(interpolate(raw, session))
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
  session: GameSession
): string {
  return input.replace(/\{\{(.*?)\}\}/g, (_, varNameRaw) => {
    const varName = varNameRaw.trim()

    const value = session.getVar(varName)
    return String(value)
  })
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
