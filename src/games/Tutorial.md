# Game Creation Tutorial

Welcome! This tutorial walks you through creating a text-based adventure game using this engine.

Unlike the technical reference in [README.md](./README.md), this guide takes a **narrative approach** — showing you how to build a game from concept to completion.

---

## Table of Contents

1. [Before You Start](#before-you-start)
2. [Game Structure Overview](#game-structure-overview)
3. [Step 1: Define Your Game](#step-1-define-your-game)
4. [Step 2: Set Up Global State](#step-2-set-up-global-state)
5. [Step 3: Gather Your Items](#step-3-gather-your-items)
6. [Step 4: Design Your Scenes](#step-4-design-your-scenes)
7. [Step 5: Write Your Content](#step-5-write-your-content)
8. [Step 6: Enable Features](#step-6-enable-features)
9. [Concepts Explained](#concepts-explained)
10. [Real Example: Midnight Switchboard](#real-example-midnight-switchboard)

---

## Before You Start

This engine requires **zero JavaScript**. Your entire game lives in YAML files.

You'll create a directory for your game with this structure:

```
your_game/
├── game.yaml              # Metadata and settings
├── rules.yaml             # Which systems are enabled
├── state.yaml             # Global variables
├── items.yaml             # Inventory items
├── scenes/                # Your story
│   ├── prologue.yaml
│   ├── main_chapter.yaml
│   └── ending.yaml
└── localization/          # Text and dialogue
    └── en.yaml
```

Each file is **optional** but recommended. Missing required fields cause validation errors.

---

## Game Structure Overview

Think of a game as:

- **Game** → A single story with settings
- **Scenes** → Locations or chapter-like divisions
- **Nodes** → Moments within a scene (screen updates)
- **Choices** → Player decisions that lead to new nodes
- **State** → Variables that track what happened
- **Effects** → What changes when a choice is made
- **Text** → What the player reads (in multiple languages)

When a player makes a choice:
1. **Effects** execute (state changes, items added, etc.)
2. **The game moves** to a new node or scene
3. **Text renders** based on current state

---

## Step 1: Define Your Game

Create `game.yaml`:

```yaml
game:
  id: my_adventure
  title: My First Adventure
  version: "0.1"

  start:
    scene: prologue
    node: beginning

  ui:
    theme: default
    text_speed: normal
```

This tells the engine:
- **id**: A unique identifier (no spaces)
- **title**: What players see
- **version**: Useful for tracking changes
- **start**: Where the game begins
- **text_speed**: How fast text appears (`slow`, `normal`, `fast`, `instant`, or milliseconds like `12`)

---

## Step 2: Set Up Global State

Create `state.yaml` to define variables your game will track:

```yaml
state:
  variables:

    # Story progression
    has_key:
      type: boolean
      initial: false
      visible: true

    # Emotional state
    fear_level:
      type: number
      initial: 0
      visible: true

    # Player knowledge
    knows_secret:
      type: boolean
      initial: false
      visible: false
```

Each variable needs:
- **type**: `boolean`, `number`, or `string`
- **initial**: Starting value (must match the type)
- **visible**: Should players see this in debug mode? (optional)

These variables are the "memory" of your game. Changes to them **persist** across scenes and nodes.

---

## Step 3: Gather Your Items

If your game has an inventory, create `items.yaml`:

```yaml
items:

  rusty_key:
    name: item.rusty_key.name
    description: item.rusty_key.description

  old_letter:
    name: item.old_letter.name
    description: item.old_letter.description
```

Each item has:
- **name**: Localization key for the item's title
- **description**: Localization key for flavor text

Items are **picked up** and **checked** during gameplay.

---

## Step 4: Design Your Scenes

Create a folder `scenes/` and add files like `prologue.yaml`:

```yaml
scene:
  id: prologue

  nodes:

    - id: beginning
      text:
        - "You wake up in a strange room."
        - "There's a door to your left."
      choices:
        - id: approach_door
          text: "Approach the door"
          goto:
            scene: prologue
            node: at_door

    - id: at_door
      text:
        - "The door is locked."
      choices:
        - id: go_back
          text: "Go back"
          goto:
            scene: prologue
            node: beginning
```

A scene contains **nodes**. Each node has:
- **id**: Unique within the scene
- **text**: What the player reads (array of fragments)
- **choices**: Buttons the player can click

---

## Step 5: Write Your Content

Create `localization/en.yaml` for all text:

```yaml
item:
  rusty_key:
    name: "Rusty Key"
    description: "A key, heavy with age."

choice:
  open_door: "Try to open the door"
  search_room: "Search the room"
```

Text is **separate from structure**. This makes:
- **Reusable fragments** (the same text in multiple places)
- **Easy translation** (just create another language file)
- **Cleaner YAML** (less clutter)

In scenes, reference text via **localization keys**:

```yaml
text:
  - key: item.rusty_key.description
```

Or use **literal strings** for quick prototyping:

```yaml
text:
  - "This is inline text."
```

---

## Step 6: Enable Features

Create `rules.yaml` to enable systems:

```yaml
rules:
  systems:
    randomness: true      # For dice rolls, random outcomes
    inventory: true       # For item management
    statistics: false     # Not needed yet
    combat: false         # Not needed yet
```

If a system is disabled, you **cannot use** its operators in your scenes.

---

## Concepts Explained

### Text Fragments

Each text entry is a "fragment." Fragments can be:

**1. Plain strings:**
```yaml
text:
  - "The door creaks open."
```

**2. Localization keys:**
```yaml
text:
  - key: prologue.intro
```

**3. Conditional fragments:**
```yaml
text:
  - if:
      eq:
        var: knows_secret
        value: true
    then:
      key: prologue.secret_path
```

If the condition is true, **only that fragment** displays. Order matters — fragments render top-to-bottom.

### Interpolation

Inside text, use `{{ }}` to insert values:

```yaml
text:
  - "Your fear level: {{fear_level}}"
  - "Items carried: {{inventory_count}}"
  - "{{if has_item rusty_key}}You have the key!{{/if}}"
```

Supported interpolations:
- `{{variable_name}}` — Value of a state variable
- `{{inventory_count}}` — Number of items carried
- `{{inventory_list}}` — Comma-separated item names
- `{{has_item:item_id}}` — True/false for ownership
- `{{if condition}}...{{/if}}` — Inline conditionals

### Conditions

Conditions decide **what happens** and **what shows**.

```yaml
if:
  eq:
    var: has_key
    value: true
```

Operators:
- `eq` — Equal to
- `neq` — Not equal
- `gt`, `gte` — Greater than (or equal)
- `lt`, `lte` — Less than (or equal)
- `has_item` — Player has an item
- `all` — All conditions true
- `any` — Any condition true
- `not` — Inverse of a condition

### Effects

Effects are **actions** that happen when a choice is made.

**Set a variable:**
```yaml
effects:
  - set:
      var: knows_secret
      value: true
```

**Add to a variable:**
```yaml
effects:
  - add:
      var: fear_level
      value: 1
```

**Add an item:**
```yaml
effects:
  - add_item:
      id: rusty_key
```

**Random outcome:**
```yaml
effects:
  - add:
      var: sanity
      value:
        random: "1/2"  # Randomly 1 or 2
```

### Choices

A choice is a button the player clicks:

```yaml
- id: take_key
  text: "Take the rusty key"
  if:                           # Optional: show only if condition true
    not:
      has_item:
        id: rusty_key
  effects:                      # Optional: run before moving
    - add_item:
        id: rusty_key
  goto:                         # Required: where to go next
    scene: prologue
    node: after_taking_key
```

The **order** of choices matters — they render top-to-bottom.

---

## Real Example: Midnight Switchboard

Let's walk through a piece of the included `midnight_switchboard` game.

### The Setup

The game starts with a phone ringing on a desk. The player must decide: answer or ignore?

**Game metadata** (`game.yaml`):
```yaml
game:
  id: midnight_switchboard
  title: Midnight Switchboard
  version: "0.1"
  start:
    scene: prologue      # Start here
    node: desk           # At this node
  ui:
    theme: default
    text_speed: normal
```

### State Variables

The game tracks psychological pressure:

```yaml
state:
  variables:
    anxiety:
      type: number
      initial: 0
      visible: true

    corruption:
      type: number
      initial: 0
      visible: true

    call_answered:
      type: boolean
      initial: false
      visible: true
```

**Why?** These variables determine:
- What text appears (different messages at high anxiety)
- What choices are available
- What ending the player reaches

### The First Node

In `prologue.yaml`:

```yaml
- id: desk
  text:
    - key: midnight.prologue.desk_intro          # "The switchboard office is dimly lit..."
    - key: midnight.prologue.clock               # "The clock reads 00:17."
    - key: midnight.prologue.anxiety_status      # "Your anxiety level is {{anxiety}}."
    - if:
        eq:
          var: call_answered
          value: true
      then:
        key: midnight.prologue.line_open         # Only if call was answered
```

The text **adapts** based on state. If the player hasn't answered yet, they see the ringing phone. If they did, they see that the line is open.

### Two Paths

The player sees two choices (because `call_answered` is false):

```yaml
choices:
  - id: answer_call
    text: midnight.choice.answer_call
    if:
      eq:
        var: call_answered
        value: false
    effects:
      - set:
          var: call_answered
          value: true
      - add:
          var: anxiety
          value:
            random: "1/2"        # Randomly add 1 or 2 to anxiety
    goto:
      scene: prologue
      node: lift_receiver

  - id: ignore_call
    text: midnight.choice.ignore_call
    if:
      eq:
        var: call_answered
        value: false
    effects:
      - add:
          var: anxiety
          value: 1
    goto:
      scene: prologue
      node: call_rings_again
```

**What happens:**
- **Answer:** Anxiety increases (with randomness), move to the "lift receiver" node
- **Ignore:** Anxiety increases, hear the phone ring again

### Escalation

If the player ignores the call, they reach `call_rings_again`:

```yaml
- id: call_rings_again
  text:
    - key: midnight.prologue.call_rings_again
    - key: midnight.prologue.ringing_louder
    - key: midnight.prologue.anxiety_display
    - if:
        gte:
          var: anxiety
          value: 2
      then:
        key: midnight.prologue.ringing_drill      # "The sound drills into your skull."
```

Notice: The drill message **only appears** if anxiety reaches 2+. This creates **tension scaling**.

The player can answer now, but with a consequence:

```yaml
- id: answer_after_delay
  text: midnight.choice.answer_after_delay
  effects:
    - set:
        var: call_answered
        value: true
    - add:
        var: corruption
        value: 1         # Corruption increases for ignoring
  goto:
    scene: prologue
    node: lift_receiver
```

### Branching Effects

Much later, accessing the basement **requires an item**:

```yaml
- id: go_basement
  text: midnight.choice.descend_basement
  if:
    has_item:
      id: basement_key
  goto:
    scene: basement_stairs
    node: stairs
```

If the player doesn't have the key, **the button doesn't show**.

### The Ritual

At the climax, the player can perform a ritual:

```yaml
- id: prepare_ritual
  text: midnight.choice.prepare_ritual
  if:
    all:
      - has_item:
          id: ritual_diagram
      - has_item:
          id: black_candle
  goto:
    scene: basement_chamber
    node: ritual_ready
```

Multiple items are **required**. The choice only appears if both are collected.

### Endings

Different outcomes based on final state:

```yaml
- id: ritual_good
  text: midnight.choice.continue
  if:
    lt:
      var: corruption
      value: 4
  goto:
    scene: ending
    node: sealed

- id: ritual_bad
  text: midnight.choice.continue
  if:
    gte:
      var: corruption
      value: 4
  goto:
    scene: ending
    node: consumed
```

**Low corruption** → Sealed ending  
**High corruption** → Consumed ending

The entire narrative **branches on state**.

---

## Best Practices

### 1. Start Small

Begin with one scene and 2-3 nodes. Test the flow. Expand.

### 2. Use Localization Keys

Even for a single-language game, extract text into `localization/en.yaml`. You'll thank yourself later.

### 3. Name Meaningfully

```yaml
id: talk_to_guard      # Clear
id: node1              # Avoid this
```

### 4. Plan Your Variables

List all variables before writing YAML. Know:
- What tracks story progress?
- What tracks emotions?
- What tracks knowledge?

### 5. Test Paths

Play through both "good" and "bad" paths. Verify endings work.

### 6. Use Conditions Strategically

Conditions let you:
- **Hide choices** until prerequisites are met
- **Vary text** based on history
- **Gate content** (e.g., "need 3+ items")
- **Create branching** without duplicating scenes

### 7. Effects Are Cheap

Use effects liberally. Add small increments to variables. Let them compound.

### 8. Comments Help

YAML supports `# comments`. Use them:

```yaml
# The player feels watched if corruption > 0
if:
  gt:
    var: corruption
    value: 0
```

---

## Next Steps

1. **Copy the structure** of an existing game (like `boiler_7` or `midnight_switchboard`)
2. **Start with `game.yaml`** — define your title and starting point
3. **Add state variables** in `state.yaml` — what does your game track?
4. **Create one scene** with 3-4 nodes and test it
5. **Expand from there** — add more scenes, items, complexity
6. **Reference [README.md](./README.md)** when you need exact syntax

---

## Troubleshooting

**"Schema validation failed"**
→ Check your YAML syntax. Missing colons, indentation errors, or required fields.

**"System disabled"**
→ You used an operator (like `add_item:`) but didn't enable it in `rules.yaml`.

**"State variable not found"**
→ You referenced a variable that doesn't exist in `state.yaml`. Check spelling.

**"Choice doesn't appear"**
→ The `if:` condition is false. Check your logic.

**Text doesn't interpolate**
→ Use `{{variable}}` inside strings, not as YAML keys. Check the syntax.

---

## Resources

- **Technical Reference:** [README.md](./README.md)
- **Example Games:** `boiler_7/`, `midnight_switchboard/`
- **Schema Details:** See the reference guide for exact field specifications

Happy creating!
