<script lang="ts">
  import { loadGameFiles } from '../engine/io/loader'
  import { validateGameData } from '../engine/schema/validate'
  import { normalizeGameData } from '../engine/schema/normalize'
  import { Engine } from '../engine/runtime/engine'
  import { engineStore } from './engineStore'
  import { get } from 'svelte/store'
  import type {
    GameManifest,
    RulesConfig,
    StateDefinition,
    SceneDefinition,
    LocalizationBundle,
    ParsedGameData
  } from '../engine/schema/types'

  import DebugOverlay from '../ui/debug/DebugOverlay.svelte'

  let error: string | null = null
  const DEV = true
  let debugVisible = true

  try {
    const files = loadGameFiles()

    const data: ParsedGameData = {
      manifest: files.game.value as GameManifest,
      rules: files.rules.value as RulesConfig,
      state: files.state.value as StateDefinition,
      scenes: Object.fromEntries(
        Object.entries(files.scenes).map(([k, v]) => [
          k,
          v.value as SceneDefinition,
        ])
      ),
      localization: Object.fromEntries(
        Object.entries(files.localization).map(([k, v]) => [
          k,
          v.value as LocalizationBundle[string],
        ])
      ),
    }

    validateGameData(data)
    const model = normalizeGameData(data)

    const engineInstance = new Engine(model)
    const vm = engineInstance.start()

    engineStore.set({
      engine: engineInstance,
      viewModel: vm,
    })
  } catch (e) {
    error = e instanceof Error ? e.toString() : String(e)
  }

  function onChoose(id: string) {
    const state = get(engineStore)
    if (!state.engine) return

    const newVm = state.engine.choose(id)

    engineStore.set({
      engine: state.engine,
      viewModel: newVm,
    })
  }
</script>

{#if error}
  <pre>{error}</pre>

{:else if $engineStore.viewModel}
  <h1>{$engineStore.viewModel.gameTitle}</h1>

  {#if DEV}
    <h2>
      {$engineStore.viewModel.sceneId}.
      {$engineStore.viewModel.nodeId}
    </h2>
  {/if}

  {#each $engineStore.viewModel.text as line}
    <p>{line}</p>
  {/each}

  <div>
    {#each $engineStore.viewModel.choices as c}
      <button
        on:click={() => onChoose(c.id)}
        disabled={!c.enabled}
      >
        {c.text}
      </button>
    {/each}
  </div>

  <button on:click={() => (debugVisible = !debugVisible)}>
    Toggle Debug
  </button>

  <DebugOverlay visible={debugVisible} />
{/if}
