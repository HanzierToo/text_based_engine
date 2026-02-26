<script lang="ts">
  import { engineStore } from '../../app/engineStore'
  import { get } from 'svelte/store'

  export let visible: boolean = false

  function reloadWithSave(mutator: (save: any) => void) {
    const state = get(engineStore)
    if (!state.engine) return

    const save = state.engine.save()
    mutator(save)

    const vm = state.engine.load(save)

    engineStore.set({
      engine: state.engine,
      viewModel: vm,
    })
  }

  function jumpTo(scene: string, node: string) {
    reloadWithSave(save => {
      save.at = { scene, node }
    })
  }

  function setState(key: string, value: any) {
    reloadWithSave(save => {
      save.state[key] = value
    })
  }

  function addItem(itemId: string) {
    reloadWithSave(save => {
      if (!save.inventory.includes(itemId)) {
        save.inventory.push(itemId)
      }
    })
  }

  function removeItem(itemId: string) {
    reloadWithSave(save => {
      save.inventory = save.inventory.filter((i: string) => i !== itemId)
    })
  }

  function handleStateInputChange(
    e: Event,
    key: string
  ) {
    const input = e.currentTarget as HTMLInputElement
    const raw = input.value

    setState(
      key,
      isNaN(+raw) ? raw : +raw
    )
  }
</script>

{#if visible && $engineStore.engine}
  <div class="debug">
    <h3>DEBUG PANEL</h3>

    <!-- CURRENT NODE -->
    <section>
      <strong>Current Node:</strong>
      <div>
        {$engineStore.viewModel?.sceneId}.
        {$engineStore.viewModel?.nodeId}
      </div>
    </section>

    <!-- STATE EDITOR -->
    <section>
      <strong>State Editor:</strong>
      {#each Object.entries($engineStore.engine.getFullState()) as [key, value]}
        <div class="row">
          <span>{key}</span>

          {#if typeof value === 'boolean'}
            <button on:click={() => setState(key, !value)}>
              {String(value)}
            </button>
          {:else}
            <input
              type="text"
              value={value}
              on:change={(e) => handleStateInputChange(e, key)}
            />
          {/if}
        </div>
      {/each}
    </section>

    <!-- INVENTORY EDITOR -->
    <section>
      <strong>Inventory Editor:</strong>

      <div>
        <em>Current:</em>
        {#each $engineStore.engine.getInventory() as item}
          <div class="row">
            {item.id}
            <button on:click={() => removeItem(item.id)}>Remove</button>
          </div>
        {/each}
      </div>

      <div>
        <em>Add Item:</em>
        {#each $engineStore.engine.getAllItemIds() as itemId}
          <button on:click={() => addItem(itemId)}>
            + {itemId}
          </button>
        {/each}
      </div>
    </section>

    <!-- HISTORY -->
    <section>
      <strong>History:</strong>
      <pre>
{JSON.stringify($engineStore.engine.getHistory(), null, 2)}
      </pre>
    </section>

    <!-- SCENE JUMP -->
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
    width: 360px;
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

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px 0;
  }

  .debug input {
    width: 100px;
    font-size: 11px;
  }

  .debug button {
    margin-left: 4px;
    font-size: 11px;
  }

  section {
    margin-bottom: 16px;
  }
</style>