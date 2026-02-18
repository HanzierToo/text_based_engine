<script lang="ts">
  import { collectAllRawGameAssets } from "../engine/io/assets";
  import { parseYaml } from "../engine/io/parser";
  import { validateGameData } from "../engine/schema/validate";
  import { normalizeGameData } from "../engine/schema/normalize";
  import { Engine } from "../engine/runtime/engine";
  import { engineStore } from "./engineStore";
  import { get } from "svelte/store";
  import "../ui/theme.css";

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
  let renderRevision = 0;
  let lastResolvedText: string[] = [];

  const speedModes: Array<GameManifest["game"]["ui"]["text_speed"]> = [
    "slow",
    "normal",
    "fast",
    "instant",
  ];
  let currentSpeedIndex = 1; // default to "normal"
  let gameDefaultSpeedIndex = 1; // will be set when game starts

  const DEV = true;

  let theme: "dark" | "light" = "dark";
  let highContrast = false;

  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
  }

  function toggleHighContrast() {
    highContrast = !highContrast;
  }

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

      // Set game default speed index for cycling
      const gameSpeed = parsedGame.game.ui.text_speed;
      gameDefaultSpeedIndex = speedModes.indexOf(gameSpeed as typeof speedModes[number]);
      if (gameDefaultSpeedIndex === -1) {
        gameDefaultSpeedIndex = 1; // fallback to normal
      }
      currentSpeedIndex = gameDefaultSpeedIndex;

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

      console.log("NEW VM TEXT:", newVm.text);

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
    const newLines = vm.text;

    const isFirstRender = !lastRenderedNodeKey;
    const sameNode = nodeKey === lastRenderedNodeKey;

    if (isFirstRender) {
      lastRenderedNodeKey = nodeKey;
      lastResolvedText = [...newLines];
      renderRevision++;
      initializeRender(newLines);

    } else if (!sameNode) {
      lastRenderedNodeKey = nodeKey;
      lastResolvedText = [...newLines];
      renderRevision++;
      initializeRender(newLines);

    } else {
      // Compare against last resolved text, not displayedLines
      const grew =
        newLines.length > lastResolvedText.length &&
        newLines
          .slice(0, lastResolvedText.length)
          .every((line, i) => line === lastResolvedText[i]);

      if (grew) {
        lastResolvedText = [...newLines];

        const additional = newLines.slice(displayedLines.length);

        if (additional.length > 0) {
          if (instantMode) {
            displayedLines = [...displayedLines, ...additional];
            isTyping = false;
          } else {
            displayedLines = [...displayedLines, additional[0]];
            currentLineIndex = displayedLines.length - 1;
            isTyping = true;
          }
        }

      } else if (
        newLines.length !== lastResolvedText.length ||
        !newLines.every((line, i) => line === lastResolvedText[i])
      ) {
        // Structural rewrite
        lastResolvedText = [...newLines];
        renderRevision++;
        initializeRender(newLines);
      }
    }
  }

  function initializeRender(lines: string[]) {
    currentLineIndex = 0;

    if (instantMode) {
      displayedLines = [...lines];
      isTyping = false;
    } else {
      displayedLines = lines.length > 0 ? [lines[0]] : [];
      isTyping = lines.length > 0;
    }
  }

  function handleLineComplete() {
    const vm = get(engineStore).viewModel;
    if (!vm) return;

    const nodeKey = `${vm.sceneId}:${vm.nodeId}`;
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

  function toggleTextSpeed() {
    currentSpeedIndex = (currentSpeedIndex + 1) % speedModes.length;
    const newSpeed = speedModes[currentSpeedIndex];
    resolveTextSpeed(newSpeed);

    const vm = get(engineStore).viewModel;
    if (!vm) return;

    renderRevision++;

    currentLineIndex = 0;

    if (instantMode) {
      displayedLines = [...vm.text];
      isTyping = false;
    } else {
      displayedLines = vm.text.length > 0 ? [vm.text[0]] : [];
      isTyping = vm.text.length > 0;
    }
  }
</script>

{#if error}
  <div class="terminal-wrapper {`theme-${theme}`} {highContrast ? "high-contrast" : ""}">
    <div class="terminal">
      <pre class="error">{error}</pre>
    </div>
  </div>

{:else if !selectedGameId}
  <div class="terminal-wrapper {`theme-${theme}`} {highContrast ? "high-contrast" : ""}">
    <div class="terminal">
      <h1>Insert Game Disc</h1>
      <div class="choices">
        {#each gameMetaList as game}
          <button on:click={() => startGame(game.id)}>
            &gt; {game.title}
          </button>
        {/each}
      </div>
      <div class="controls">
        <h3>Controls</h3>

        <button on:click={() => (debugVisible = !debugVisible)}>
          [ Toggle Debug ]
        </button>
        <button on:click={() => toggleTextSpeed()}>
          [ Toggle Text Speed - {speedModes[currentSpeedIndex]}{currentSpeedIndex === gameDefaultSpeedIndex ? " - default value" : ""} ]
        </button>
        <button on:click={toggleTheme}>
          [ Theme: {theme} ]
        </button>
        <button on:click={toggleHighContrast}>
          [ High Contrast: {highContrast ? "ON" : "OFF"} ]
        </button>
      </div>
    </div>
  </div>

{:else if $engineStore.viewModel}
  <div class="terminal-wrapper {`theme-${theme}`} {highContrast ? "high-contrast" : ""}">
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
        {#each displayedLines as line, i (`${lastRenderedNodeKey}-${renderRevision}-${i}`)}
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
        <h3>Controls</h3>

        <button on:click={() => (debugVisible = !debugVisible)}>
          [ Toggle Debug ]
        </button>
        <button on:click={() => toggleTextSpeed()}>
          [ Toggle Text Speed - {speedModes[currentSpeedIndex]}{currentSpeedIndex === gameDefaultSpeedIndex ? " - default value" : ""} ]
        </button>
        <button on:click={toggleTheme}>
          [ Theme: {theme} ]
        </button>
        <button on:click={toggleHighContrast}>
          [ High Contrast: {highContrast ? "ON" : "OFF"} ]
        </button>
      </div>
    </div>
  </div>

  <DebugOverlay visible={debugVisible} />
{/if}