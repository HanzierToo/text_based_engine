# Game Content Guide (v0.1)

> **NOTICE:** If you're new to game creation, start with [Tutorial.md](./Tutorial.md) for a holistic, step-by-step guide. This document is the technical reference — it covers detailed syntax and requirements.

This directory contains all declarative game content.

The engine reads **only YAML files** from this directory.
No JavaScript is required to build a game.

All logic, structure, and behavior are defined through schema-driven YAML.

The engine validates strictly and fails fast. There are no silent fallbacks.

---

# Directory Structure

```
game/
┣ game.yaml
┣ rules.yaml
┣ state.yaml
┣ items.yaml
┣ scenes/
┃ ┗ *.yaml
┗ localization/
  ┗ *.yaml
```

Each file has a strict schema.
Missing or malformed fields cause validation failure.

---

# 1. game.yaml

Defines metadata, start location, and UI configuration.

```yaml
game:
  id: midnight_operator
  title: The Midnight Operator
  version: 0.1

  start:
    scene: prologue
    node: desk

  ui:
    theme: default
    text_speed: normal
```

---

## Required Fields

* `id`
* `title`
* `version`
* `start.scene`
* `start.node`
* `ui.theme`
* `ui.text_speed`

---

## UI Options

### `text_speed`

Supported values:

```yaml
text_speed: slow
text_speed: normal
text_speed: fast
text_speed: instant
text_speed: 12
```

| Value   | Behavior                |
|---------|-------------------------|
| slow    | Preset slow speed       |
| normal  | Preset default speed    |
| fast    | Preset fast speed       |
| instant | No typewriter animation |
| number  | Custom ms per character |

---

## Invalid Example

```yaml
game:
  id: demo
  title: Demo
```

❌ Missing `version`, `start`, and `ui`
→ `E_SCHEMA_MISSING_FIELD`

---

# 2. rules.yaml

Enables engine systems (plugins).

```yaml
rules:
  systems:
    randomness: true
    inventory: true

  state_visibility:
    default: visible
```

---

## Systems (v0.1)

* `randomness`
* `inventory`

If a system is disabled, its operators cannot be used anywhere in scenes.

---

## Invalid Example

```yaml
rules:
  systems:
    inventory: false
```

Later in a scene:

```yaml
effects:
  - add_item:
      id: intro_key
```

❌ Inventory disabled
→ `E_SYSTEM_DISABLED_USAGE`

---

# 3. state.yaml

Defines global state variables.

```yaml
state:
  variables:
    anxiety:
      type: number
      initial: 0
      visible: true

    call_answered:
      type: boolean
      initial: false
```

---

## Fields

* `type`: `boolean | number | string`
* `initial`: must match `type`
* `visible`: optional
* `requires`: optional system dependency

---

## Invalid Example

```yaml
initial: 1
type: boolean
```

❌ Type mismatch
→ `E_STATE_TYPE_MISMATCH`

---

# 4. items.yaml

Defines inventory items.

```yaml
items:
  black_candle:
    name: midnight.item.black_candle.name
    description: midnight.item.black_candle.desc
```

`name` and `description` must be localization keys.

---

## Required Fields

* `name`

---

## Invalid Example

```yaml
items:
  candle: "Black Candle"
```

❌ Missing object wrapper
→ `E_SCHEMA_MISSING_FIELD`

---

# 5. scenes/*.yaml

Each file defines exactly one scene.

```yaml
scene:
  id: prologue
  nodes:
    - id: desk
      text:
        - key: midnight.prologue.desk_intro
      choices: []
```

---

## Node Structure

```yaml
- id: node_id
  text:
    - fragment
  choices:
    - choice
```

Each node must contain:

* `id`
* `text`
* `choices`

---

# Text Fragments

Text supports:

---

## 1. Plain Strings

```yaml
- "The clock reads 00:17."
```

---

## 2. Localization Keys

```yaml
- key: midnight.prologue.desk_intro
```

---

## 3. Conditional Fragments

```yaml
- if:
    eq:
      var: call_answered
      value: true
  then:
    key: midnight.prologue.line_open
```

v0.1 limitation: only one condition per fragment.

---

## Invalid Conditional Syntax

```yaml
- if:
    var: call_answered
    eq: true
```

❌ Old syntax
→ `E_CONDITION_INVALID`

---

# Inline Interpolation (v0.1)

Inside string fragments:

```
{{anxiety}}
{{inventory_count}}
{{inventory_list}}
{{has_item:black_candle}}
```

Example:

```yaml
- "Your anxiety level is {{anxiety}}."
```

---

## Inline Conditionals

```
{{if eq anxiety 2}}You feel watched.{{/if}}
{{if has_item black_candle}}The flame flickers.{{/if}}
```

---

### Important Limitation

No nested inline blocks:

```
{{if eq anxiety 2}}{{if has_item key}}...{{/if}}{{/if}}
```

❌ Not supported in v0.1

---

### Invalid Inline Usage

```
{{key: midnight.prologue.receiver_warm}}
```

❌ Interpreted as interpolation
→ `E_STATE_VAR_UNDECLARED`

Correct usage:

```yaml
- key: midnight.prologue.receiver_warm
```

or inside condition:

```
{{if gte anxiety 1}}You feel watched.{{/if}}
```

---

# Conditions (Operator-Based)

Conditions use operator syntax.

---

## Primitive

```yaml
if:
  eq:
    var: call_answered
    value: false
```

---

## Inventory

```yaml
if:
  has_item:
    id: ritual_diagram
```

---

## Logical

```yaml
if:
  all:
    - eq:
        var: call_answered
        value: true
    - has_item:
        id: black_candle
```

---

## Supported Operators

* `eq`
* `neq`
* `gt`
* `gte`
* `lt`
* `lte`
* `has_item`
* `all`
* `any`
* `not`

---

# Choices

```yaml
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
          random: "1/2"
  goto:
    scene: prologue
    node: lift_receiver
```

---

# Effects

## set

```yaml
- set:
    var: corruption
    value: 1
```

---

## add

```yaml
- add:
    var: anxiety
    value: 1
```

---

## Random Add

Requires randomness enabled.

```yaml
- add:
    var: anxiety
    value:
      random: "1/3"
```

Format:

```
"numerator/denominator"
```

Returns 1 or 0.

Invalid:

```yaml
random: "10%"
```

→ `E_EFFECT_INVALID`

---

## Inventory Effects

```yaml
- add_item:
    id: black_candle

- remove_item:
    id: ritual_diagram
```

Item must exist in `items.yaml`.

---

# Localization

Location:

```
game/localization/*.yaml
```

Example:

```yaml
midnight:
  prologue:
    desk_intro: "The phone begins to ring."
```

Usage:

```yaml
- key: midnight.prologue.desk_intro
```

Do not prefix language.

Incorrect:

```
en.midnight.prologue.desk_intro
```

→ `E_LOCALIZATION_KEY_MISSING`

---

# Common Errors

| Error                           | Meaning                     |
|---------------------------------|-----------------------------|
| **E_YAML_PARSE**                | YAML parsing error          |
| **E_SCHEMA_MISSING_FIELD**      | Required field missing      |
| **E_SCHEMA_INVALID_TYPE**       | Invalid field type          |
| **E_STATE_TYPE_MISMATCH**       | Type mismatch               |
| **E_STATE_VAR_UNDECLARED**      | Unknown state variable      |
| **E_SYSTEM_DISABLED_USAGE**     | Disabled system used        |
| **E_CONDITION_INVALID**         | Invalid condition syntax    |
| **E_EFFECT_INVALID**            | Invalid effect syntax       |
| **E_REF_NOT_FOUND**             | Referenced item missing     |
| **E_REF_NOT_FOUND_SCENE**       | Referenced scene not found  |
| **E_REF_NOT_FOUND_NODE**        | Referenced node not found   |
| **E_DUPLICATE_ID**              | Duplicate scene/node ID     |
| **E_LOCALIZATION_KEY_MISSING**  | Missing localization        |
| **E_RUNTIME_ILLEGAL_CHOICE**    | Choice invalid at runtime   |
| **E_PLUGIN_REGISTRY_LOCKED**    | Plugin registry locked      |
| **E_PLUGIN_DUPLICATE_ID**       | Duplicate plugin ID         |
| **E_PLUGIN_DEPENDENCY_MISSING** | Plugin dependency missing   |
| **E_PLUGIN_ORDER_UNKNOWN**      | Plugin order undetermined   |
| **E_PLUGIN_ORDER_CYCLE**        | Plugin order cycle detected |

---

# Engine Philosophy

* Declarative content
* Plugin-driven operators
* Deterministic randomness
* Strict validation
* No silent fallback behavior
* UI controlled by manifest

If something is wrong, the engine stops.

---

# Current Limitations (v0.1)

* No nested inline conditionals
* No statistics plugin
* No combat system
* No dialogue memory
* No UI layout customization
* No save/load
* No mod loading
* No multiplayer

---

# Minimal Valid Game

You must include:

* `game.yaml`
* `rules.yaml`
* `state.yaml`
* `items.yaml`
* At least one scene
* At least one node
* Valid start reference

---

End of v0.1 game content specification.