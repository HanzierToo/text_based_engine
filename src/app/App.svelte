<script lang="ts">
  import { loadGameFiles } from '../engine/io/loader'
  import { validateGameData } from '../engine/schema/validate'
  import { normalizeGameData } from '../engine/schema/normalize'
  import { Engine } from '../engine/runtime/engine'
  import type {
    GameManifest,
    RulesConfig,
    StateDefinition,
    SceneDefinition,
    LocalizationBundle,
    ParsedGameData
  } from '../engine/schema/types'

  let status = 'loading...'
  let engine: Engine | null = null
  let vm: import('../engine/runtime/engine').ViewModel | null = null
  let error: string | null = null

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

    engine = new Engine(model)
    vm = engine.start()

    console.log('Normalized model:', model)
    status = 'Game normalized successfully'
  } catch (e) {
    error = e instanceof Error ? e.toString() : String(e)
    status = 'Validation error'
  }

  function onChoose(id: string) {
    if (!engine) return
    vm = engine.choose(id)
  }
</script>
{#if error}
  <pre>{error}</pre>
{:else if vm}
  <h1>{vm.gameTitle}</h1>
  <h2>{vm.sceneId}.{vm.nodeId}</h2>

  {#each vm.text as line}
    <p>{line}</p>
  {/each}

  <div>
    {#each vm.choices as c}
      <button on:click={() => onChoose(c.id)} disabled={!c.enabled}>
        {c.text}
      </button>
    {/each}
  </div>
{/if}