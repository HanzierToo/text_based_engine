// src/engine/runtime/session.ts

import type {
  NormalizedGameModel,
  NormalizedState,
} from '../schema/normalize'
import { EngineError } from './errors'

export type NodeRef = {
  scene: string
  node: string
}

export interface TransitionRecord {
  from: NodeRef
  to: NodeRef
  choiceId: string
  ts: number
}

export interface SaveDataV0 {
  version: '0.1'
  at: NodeRef
  state: Record<string, boolean | number | string>
  history: TransitionRecord[]
  rng?: {
    seed: number
    counter: number
  }
}

export class GameSession {
  private _at: NodeRef
  private _state: NormalizedState
  private _history: TransitionRecord[] = []
  private _rng?: { seed: number; counter: number }

  constructor(model: NormalizedGameModel) {
    const start = model.manifest.start
    this._at = { scene: start.scene, node: start.node }
    this._state = cloneState(model.state)
  }

  get at(): NodeRef {
    return this._at
  }

  get history(): readonly TransitionRecord[] {
    return this._history
  }

  get rng(): { seed: number; counter: number } | undefined {
    return this._rng
  }

  /** Returns a value for a declared variable. Throws if not found. */
  getVar(name: string): boolean | number | string {
    const v = this._state.variables.get(name)
    if (!v) {
      throw new EngineError('E_STATE_VAR_UNDECLARED', `Unknown state var "${name}"`, {
        path: `state.variables.${name}`,
      })
    }
    return v.value
  }

  /** Sets a value for a declared variable. Type checking happens later in effects.ts. */
  setVar(name: string, value: boolean | number | string): void {
    const v = this._state.variables.get(name)
    if (!v) {
      throw new EngineError('E_STATE_VAR_UNDECLARED', `Unknown state var "${name}"`, {
        path: `state.variables.${name}`,
      })
    }
    v.value = value
  }

  getVisibleState(): Record<string, boolean | number | string> {
    const out: Record<string, boolean | number | string> = {}
    for (const [name, v] of this._state.variables.entries()) {
      if (v.visible) out[name] = v.value
    }
    return out
  }

  move(to: NodeRef, choiceId: string, from: NodeRef): void {
    this._at = to
    this._history.push({
      from,
      to,
      choiceId,
      ts: Date.now(),
    })
  }

  save(): SaveDataV0 {
    const state: Record<string, boolean | number | string> = {}
    for (const [name, v] of this._state.variables.entries()) {
      state[name] = v.value
    }

    return {
      version: '0.1',
      at: { ...this._at },
      state,
      history: [...this._history],
      rng: this._rng ? { ...this._rng } : undefined,
    }
  }

  load(save: SaveDataV0): void {
    if (save.version !== '0.1') {
      throw new EngineError('E_SCHEMA_INVALID_TYPE', `Unsupported save version "${save.version}"`)
    }

    this._at = { ...save.at }
    this._history = [...save.history]

    for (const [name, v] of Object.entries(save.state)) {
      const slot = this._state.variables.get(name)
      if (!slot) {
        throw new EngineError('E_STATE_VAR_UNDECLARED', `Save contains unknown var "${name}"`)
      }
      slot.value = v
    }

    if (save.rng) {
      this._rng = { ...save.rng }
    }
  }

  initializeRng(seed: number): void {
    if (!this._rng) {
        this._rng = { seed, counter: 0 }
    }
  }
}

function cloneState(state: NormalizedState): NormalizedState {
  const variables = new Map(state.variables)
  for (const [k, v] of variables.entries()) {
    variables.set(k, { ...v })
  }
  return { variables }
}
