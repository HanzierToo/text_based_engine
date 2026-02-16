<script lang="ts">
  import { collectAllRawGameAssets } from "../engine/io/assets";
  import { parseYaml } from "../engine/io/parser";
  import { validateGameData } from "../engine/schema/validate";
  import { normalizeGameData } from "../engine/schema/normalize";
  import { Engine } from "../engine/runtime/engine";
  import { engineStore } from "./engineStore";
  import { get } from "svelte/store";

  import DebugOverlay from "../ui/debug/DebugOverlay.svelte";
  import Typewriter from "../ui/components/Typewriter.svelte";
  import Cursor from "../ui/components/Cursor.svelte";

  import type {
    GameManifest,
    RulesConfig,
    StateDefinition,
    SceneDefinition,
    LocalizationBundle,
    ParsedGameData,
    ItemsFile,
  } from "../engine/schema/types";

  let error: string | null = null;
  let debugVisible = false;
  let selectedGameId: string | null = null;
  let selectedGameTitle: string | null = null;

  let displayedLines: string[] = [];
  let currentLineIndex = 0;
  let isTyping = false;
  let resolvedTextSpeed = 10; // default fallback
  let instantMode = false;
  let lastRenderedNodeKey: string | null = null;

  const DEV = true;

  const allGames = collectAllRawGameAssets();

  type GameMeta = {
    id: string;
    title: string;
  };

  const gameMetaList: GameMeta[] = [];

  for (const [id, entry] of Object.entries(allGames)) {
    try {
      const manifest =
        parseYaml(entry.raw.game, "game.yaml").value as GameManifest;

      gameMetaList.push({
        id,
        title: manifest.game.title,
      });
    } catch {
      // Ignore invalid game.yaml in selector
    }
  }

  function startGame(gameId: string) {
    try {
      const entry = allGames[gameId];
      if (!entry) throw new Error(`Game "${gameId}" not found`);

      const raw = entry.raw;

      const parsedGame =
        parseYaml(raw.game, "game.yaml").value as GameManifest;

      const parsedRules =
        parseYaml(raw.rules, "rules.yaml").value as RulesConfig;

      const parsedState =
        parseYaml(raw.state, "state.yaml").value as StateDefinition;

      const parsedItems =
        parseYaml(raw.items, "items.yaml").value as ItemsFile;

      const parsedScenes: Record<string, SceneDefinition> = {};
      for (const [k, v] of Object.entries(raw.scenes)) {
        parsedScenes[k] =
          parseYaml(v, `scenes/${k}`).value as SceneDefinition;
      }

      resolveTextSpeed(parsedGame.game.ui.text_speed);

      const parsedLocalization: Record<string, LocalizationBundle> = {};
      for (const [k, v] of Object.entries(raw.localization)) {
        const namespace = k.replace(/\.ya?ml$/, "");
        parsedLocalization[namespace] =
          parseYaml(v, `localization/${k}`).value as LocalizationBundle;
      }

      const data: ParsedGameData = {
        manifest: parsedGame,
        rules: parsedRules,
        state: parsedState,
        items: parsedItems,
        scenes: parsedScenes,
        localization: parsedLocalization,
      };

      validateGameData(data);

      const model = normalizeGameData(data);
      const engineInstance = new Engine(model);
      const vm = engineInstance.start();

      engineStore.set({
        engine: engineInstance,
        viewModel: vm,
      });

      selectedGameId = gameId;
      selectedGameTitle = parsedGame.game.title;
      error = null;
    } catch (e) {
      error = e instanceof Error ? e.toString() : String(e);
    }
  }

  function ejectDisc() {
    selectedGameId = null;
    selectedGameTitle = null;
    engineStore.set({ engine: null, viewModel: null });
  }

  function onChoose(id: string) {
    const state = get(engineStore);
    if (!state.engine) return;

    try {
      console.groupCollapsed(`[UI] choose("${id}")`);
      console.log("Before:", {
        at: state.engine.getCurrentNodeRef(),
        visibleState: state.engine.getFullState(),
      });

      const newVm = state.engine.choose(id);

      console.log("After:", {
        at: state.engine.getCurrentNodeRef(),
        visibleState: state.engine.getFullState(),
        vm: { sceneId: newVm.sceneId, nodeId: newVm.nodeId, choices: newVm.choices.map(c => c.id) },
      });

      engineStore.set({
        engine: state.engine,
        viewModel: newVm,
      });

      error = null;
    } catch (e) {
      console.error("[UI] choose failed:", e);

      // IMPORTANT. Surface it instead of "freezing"
      error = e instanceof Error ? e.toString() : String(e);
    } finally {
      console.groupEnd();
    }
  }

  $: if ($engineStore.viewModel) {
    const vm = $engineStore.viewModel;
    const nodeKey = `${vm.sceneId}:${vm.nodeId}`;

    if (nodeKey !== lastRenderedNodeKey) {
      lastRenderedNodeKey = nodeKey;

      const lines = vm.text;

      displayedLines = [];
      currentLineIndex = 0;

      if (lines.length > 0) {
        displayedLines = [lines[0]];
        isTyping = !instantMode;
      } else {
        isTyping = false;
      }
    }
  }

  function handleLineComplete() {
    const vm = get(engineStore).viewModel;
    if (!vm) return;

    const nodeKey = `${vm.sceneId}:${vm.nodeId}`;

    // Ignore stale completions
    if (nodeKey !== lastRenderedNodeKey) return;

    currentLineIndex++;

    if (currentLineIndex < vm.text.length) {
      displayedLines = [...displayedLines, vm.text[currentLineIndex]];
    } else {
      isTyping = false;
    }
  }

  function resolveTextSpeed(value: GameManifest["game"]["ui"]["text_speed"]) {
    instantMode = false;

    if (typeof value === "number") {
      resolvedTextSpeed = Math.max(0, value);
      if (resolvedTextSpeed === 0) instantMode = true;
      return;
    }

    switch (value) {
      case "slow":
        resolvedTextSpeed = 40;
        break;
      case "normal":
        resolvedTextSpeed = 20;
        break;
      case "fast":
        resolvedTextSpeed = 10;
        break;
      case "instant":
        resolvedTextSpeed = 0;
        instantMode = true;
        break;
      default:
        resolvedTextSpeed = 20;
    }
  }
</script>

{#if error}
  <div class="terminal">
    <pre class="error">{error}</pre>
  </div>

{:else if !selectedGameId}
  <div class="terminal">
    <h1>Insert Game Disc</h1>
    <div class="choices">
      {#each gameMetaList as game}
        <button on:click={() => startGame(game.id)}>
          &gt; {game.title}
        </button>
      {/each}
    </div>
  </div>

{:else if $engineStore.viewModel}
  <div class="terminal">
    <div class="header">
      <div class="title-row">
        <h1>{selectedGameTitle}</h1>
        <button class="eject" on:click={ejectDisc}>
          [ Eject Disc ]
        </button>
      </div>

      {#if DEV}
        <div class="node">
          <i>{$engineStore.viewModel.sceneId}.{$engineStore.viewModel.nodeId}</i>
        </div>
      {/if}
    </div>

    <div class="content">
      {#each displayedLines as line, i}
        <p>
          {#if instantMode}
            <span>{line}</span>
          {:else}
            <Typewriter
              text={line}
              speed={resolvedTextSpeed}
              onComplete={i === displayedLines.length - 1 ? handleLineComplete : undefined}
            />
          {/if}
        </p>
      {/each}

      {#if isTyping}
        <Cursor />
      {/if}
    </div>

    <div class="choices">
      {#each $engineStore.viewModel.choices as c}
        <button on:click={() => onChoose(c.id)} disabled={!c.enabled}>
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
              {item.name}
            </li>
          {/each}
        </ul>
      {/if}
    </div>

    <div class="controls">
      <button on:click={() => (debugVisible = !debugVisible)}>
        [ Toggle Debug ]
      </button>
    </div>
  </div>

  <DebugOverlay visible={debugVisible} />
{/if}

<style>
  .terminal {
    min-height: 100vh;
    padding: 32px;
    background: #0f1a14;
    color: #8aff8a;
    font-family: monospace;
    line-height: 1.6;
    text-shadow: 0 0 4px rgba(0, 255, 0, 0.6);
  }

  .terminal::after {
    content: "";
    pointer-events: none;
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      rgba(0, 255, 0, 0.03),
      rgba(0, 255, 0, 0.03) 1px,
      transparent 1px,
      transparent 3px
    );
  }

  .title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  .eject {
    margin-left: 24px;
    border: 1px solid #3a5f3a;
    background: transparent;
    color: #8aff8a;
    padding: 4px 8px;
    font-family: monospace;
    cursor: pointer;
  }

  .choices {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .choices button {
    background: transparent;
    border: 1px solid #3a5f3a;
    color: #8aff8a;
    padding: 6px 10px;
    font-family: monospace;
    cursor: pointer;
  }

  .choices button:hover:not(:disabled),
  .eject:hover {
    background: #1f3327;
  }

  .inventory,
  .controls {
    margin-top: 32px;
    border-top: 1px solid #2e4d2e;
    padding-top: 12px;
  }

  .muted {
    color: #4c7a4c;
  }

  .error {
    color: #ff5555;
  }
</style>