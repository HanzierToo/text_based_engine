# Text Based Engine

A modular, YAML-driven text adventure engine built with Svelte and TypeScript.

This project separates **engine runtime**, **game data**, and **UI**.  
Games are defined entirely through `.yaml` files. No JavaScript required to create content.

> **NOTICE:** This README does **NOT** contain information on how to make a game or game-specific information.
>
> That information is inside another `README.md` file within the `game/` sub-directory inside the `src/` repository.
>
> If you're not familiar with GitHub, press the `src` folder, then the `game` folder. Otherwise, [open this url](https://github.com/HanzierToo/text_based_engine/tree/main/src/games).

---

## Features

- YAML-based game definition
- Scene + node graph structure
- Operator-based condition system
- Effect system (state mutation)
- Plugin architecture
- Inventory system (registry-backed)
- Deterministic randomness (seeded)
- Inline interpolation:
  - `{{variable}}`
  - `{{inventory_count}}`
  - `{{inventory_list}}`
  - `{{has_item:item_id}}`
- Inline conditional blocks:
  - `{{if has_item intro_key}}You unlock the door.{{/if}}`
- CRT-style terminal UI
- Debug overlay with full state inspection

---

## Tech Stack

- Svelte
- TypeScript
- Vite
- YAML for game content

---

## Project Structure

```bash
src/
┣ engine/ # Core engine (runtime, schema, plugins)
┣ ui/ # UI components
┣ game/ # Game content (YAML files)
┗ app/ # App entry and store wiring
```

### Engine

- `runtime/` — session, engine loop, effects, resolver
- `schema/` — validation and normalization
- `plugins/` — modular feature extensions
- `io/` — YAML loading

### Game Content

```bash
game/
┣ game.yaml
┣ rules.yaml
┣ state.yaml
┣ items.yaml
┣ scenes/
┗ localization/
```

---

## Running the Project

Requires Node 18+ (Node 20 recommended).

```bash
npm install
npm run dev
```

Open the local server in your browser.

---

## Architecture Overview

The engine follows a strict pipeline:

1. Load YAML files
2. Validate schema
3. Normalize into intermal model
4. Initialize runtime session
5. Render ViewModel to UI

Plugins extend behaviour without modifying core runtime.

---

## Systems

Systems are enabled in `rules.yaml`:

```yaml
rules:
    systems:
        randomness: true
        inventory: true
```

If disabled, related operators fail validation.

---

## Debug Mode

The debug overlay allows:

- Viewing full state
- Viewing inventory
- Inspecting history
- Jumping to any scene/node

---

## Project Status

Early-stage — v0.1

```
- Core runtime stable
- Plugin system active
- UI aesthetic/styling in progress
```