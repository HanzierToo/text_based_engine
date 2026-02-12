<script lang="ts">
  import { engineStore } from '../../app/engineStore'
  import { get } from 'svelte/store'

  export let visible: boolean = false

  function jumpTo(scene: string, node: string) {
    const state = get(engineStore)
    if (!state.engine) return

    const save = state.engine.save()
    save.at = { scene, node }

    const vm = state.engine.load(save)

    engineStore.set({
      engine: state.engine,
      viewModel: vm,
    })
  }
</script>

{#if visible && $engineStore.engine}
  <div class="debug">
    <h3>DEBUG PANEL</h3>

    <section>
      <strong>Current Node:</strong>
      <div>
        {$engineStore.viewModel?.sceneId}.
        {$engineStore.viewModel?.nodeId}
      </div>
    </section>

    <section>
      <strong>State:</strong>
      <pre>
{JSON.stringify($engineStore.engine.getFullState(), null, 2)}
      </pre>
    </section>

    <section>
      <strong>Inventory:</strong>
      <pre>{JSON.stringify($engineStore.engine.getInventory(), null, 2)}</pre>
    </section>

    <section>
      <strong>History:</strong>
      <pre>
{JSON.stringify($engineStore.engine.getHistory(), null, 2)}
      </pre>
    </section>

    <section>
      <strong>Jump To:</strong>
      {#each Array.from($engineStore.engine.getAllScenes().entries()) as [sceneId, scene]}
        <div>
          <strong>{sceneId}</strong>
          {#each Array.from(scene.nodes.keys()) as nodeId}
            <button on:click={() => jumpTo(sceneId, nodeId)}>
              {nodeId}
            </button>
          {/each}
        </div>
      {/each}
    </section>
  </div>
{/if}

<style>
  .debug {
    position: fixed;
    right: 0;
    top: 0;
    width: 320px;
    height: 100vh;
    background: #111;
    color: #eee;
    padding: 12px;
    overflow-y: auto;
    font-family: monospace;
    font-size: 12px;
    border-left: 2px solid #444;
    z-index: 9999;
  }

  .debug button {
    margin: 2px;
    font-size: 11px;
  }

  section {
    margin-bottom: 16px;
  }
</style>
