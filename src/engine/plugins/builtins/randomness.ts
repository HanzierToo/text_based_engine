// src/engine/plugins/builtins/randomness.ts

import type { EnginePlugin } from '../plugin'

export const RandomnessPlugin: EnginePlugin = {
  id: 'randomness',
  order: { after: ['core'] },
  dependsOn: ['core'],

  hooks: {
    onStart(session) {
      session.initializeRng(Date.now())
    },
  },
}