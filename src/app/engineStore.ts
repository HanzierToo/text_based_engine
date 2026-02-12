import { writable } from 'svelte/store'
import type { Engine } from '../engine/runtime/engine'
import type { ViewModel } from '../engine/runtime/engine'

export interface EngineState {
  engine: Engine | null
  viewModel: ViewModel | null
}

export const engineStore = writable<EngineState>({
  engine: null,
  viewModel: null,
})
