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
    ParsedGameData,
    ItemsFile,
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
      items: files.items.value as ItemsFile,
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

<!-- UI BELOW -->

{#if error}
  <div class="terminal">
    <pre class="error">{error}</pre>
  </div>

{:else if $engineStore.viewModel}
  <div class="terminal">

    <div class="header">
      <h1>{$engineStore.viewModel.gameTitle}</h1>

      {#if DEV}
        <div class="node">
          <i>{$engineStore.viewModel.sceneId}.{$engineStore.viewModel.nodeId}</i>
        </div>
      {/if}
    </div>

    <div class="content">
      {#each $engineStore.viewModel.text as line}
        <p>{line}</p>
      {/each}
    </div>

    <div class="choices">
      {#each $engineStore.viewModel.choices as c}
        <button
          on:click={() => onChoose(c.id)}
          disabled={!c.enabled}
        >
          &gt; {c.text}
        </button>
      {/each}
    </div>

    <div class="inventory">
      <h3>Inventory</h3>

      {#if $engineStore.viewModel.inventory.length === 0}
        <p class="muted">(empty)</p>
      {:else}
        <ul>
          {#each $engineStore.viewModel.inventory as item}
            <li title={item.description}>
              • {item.name}
            </li>
          {/each}
        </ul>
      {/if}
    </div>

    <div class="controls">
      <h3>Controls</h3>
      <button on:click={() => (debugVisible = !debugVisible)}>
        [ Toggle Debug ]
      </button>
    </div>

  </div>

  <DebugOverlay visible={debugVisible} />
{/if}

<!-- STYLE BELOW -->

<style>
  .terminal {
    min-height: 100vh;
    padding: 32px;
    background: #0f1a14; /* dark greenish grey */
    color: #8aff8a;       /* CRT green */
    font-family: monospace;
    line-height: 1.6;
  }

  .header h1 {
    margin: 0 0 4px 0;
    font-size: 20px;
    letter-spacing: 1px;
  }

  .node {
    font-size: 12px;
    color: #5fbf5f;
    margin-bottom: 24px;
  }

  .content p {
    margin: 0 0 12px 0;
  }

  .choices {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }

  .choices button {
    display: block;
    background: transparent;
    border: 1px solid #3a5f3a;
    color: #8aff8a;
    padding: 6px 10px;
    font-family: monospace;
    cursor: pointer;
  }

  .choices button:hover:not(:disabled) {
    background: #1f3327;
  }

  .choices button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .inventory {
    margin-top: 32px;
    padding-top: 16px;
    border-top: 1px solid #2e4d2e;
  }

  .inventory h3 {
    margin: 0 0 12px 0;
    font-size: 14px;
    color: #6fdc6f;
  }

  .inventory ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .inventory li {
    margin-bottom: 6px;
  }

  .muted {
    color: #4c7a4c;
  }

  .controls {
    margin-top: 32px;
    border-top: 1px solid #2e4d2e;
  }

  .controls button {
    background: transparent;
    border: 1px solid #3a5f3a;
    color: #8aff8a;
    padding: 6px 10px;
    font-family: monospace;
    cursor: pointer;
  }

  .controls button:hover {
    background: #1f3327;
  }

  .error {
    color: #ff5555;
  }
</style>
