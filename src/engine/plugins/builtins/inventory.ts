import type { EnginePlugin } from '../plugin'
import type { GameSession } from '../../runtime/session'
import type { NormalizedGameModel } from '../../schema/normalize'
import { EngineError } from '../../runtime/errors'

export const InventoryPlugin: EnginePlugin = {
  id: 'inventory',
  dependsOn: ['core'],
  order: { after: ['core'] },

  /* ============================================================
   * CONDITION
   * ============================================================
   */

  conditions: {
    has_item(payload, session: GameSession, model: NormalizedGameModel) {
      if (!payload || typeof payload.id !== 'string') {
        throw new EngineError(
          'E_CONDITION_INVALID',
          'has_item requires { id: string }'
        )
      }

      if (!model.items.has(payload.id)) {
        throw new EngineError(
          'E_REF_NOT_FOUND',
          `Unknown item "${payload.id}"`
        )
      }

      return session.hasItem(payload.id)
    },
  },

  /* ============================================================
   * EFFECTS
   * ============================================================
   */

  effects: {
    add_item(payload, session: GameSession, model: NormalizedGameModel) {
      if (!payload || typeof payload.id !== 'string') {
        throw new EngineError(
          'E_EFFECT_INVALID',
          'add_item requires { id: string }'
        )
      }

      if (!model.items.has(payload.id)) {
        throw new EngineError(
          'E_REF_NOT_FOUND',
          `Unknown item "${payload.id}"`
        )
      }

      session.addItem(payload.id)
    },

    remove_item(payload, session: GameSession, model: NormalizedGameModel) {
      if (!payload || typeof payload.id !== 'string') {
        throw new EngineError(
          'E_EFFECT_INVALID',
          'remove_item requires { id: string }'
        )
      }

      if (!model.items.has(payload.id)) {
        throw new EngineError(
          'E_REF_NOT_FOUND',
          `Unknown item "${payload.id}"`
        )
      }

      session.removeItem(payload.id)
    },
  },
}
