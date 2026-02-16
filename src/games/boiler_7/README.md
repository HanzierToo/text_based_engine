# Game Content Guide (v0.1)

This directory contains all game content.

The engine reads only YAML files from here.
No JavaScript is required to build a game.

All logic, structure, and content are defined declaratively.

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

Each file has a strict schema. Missing or malformed fields cause validation failure.

---

# 1. game.yaml

Defines metadata and start location.

```yaml
game:
  id: demo
  title: Demo Text Adventure
  version: 0.1
  start:
    scene: intro
    node: start
```

### Required Fields

* `id`
* `title`
* `version`
* `start.scene`
* `start.node`

### Invalid Example

```yaml
game:
  id: demo
  title: Demo
```

❌ Missing `version` and `start`
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

### Systems (v0.1)

* `randomness`
* `inventory`

If a system is disabled, its operators cannot be used anywhere in scenes.

### Invalid Example

```yaml
rules:
  systems:
    inventory: false
```

And later:

```yaml
effects:
  - add_item:
      id: intro_key
```

❌ Inventory system disabled
→ `E_SYSTEM_DISABLED_USAGE`

---

# 3. state.yaml

Defines global state variables.

```yaml
state:
  variables:
    has_key:
      type: boolean
      initial: false
      visible: true
```

### Fields

* `type`: `boolean | number | string`
* `initial`: must match `type`
* `visible`: if true, exposed in ViewModel
* `requires` (optional): requires a system

### Invalid Example

```yaml
state:
  variables:
    has_key:
      type: boolean
      initial: 1
```

❌ Type mismatch
→ `E_STATE_TYPE_MISMATCH`

---

# 4. items.yaml

Defines all items in the game.

Inventory references MUST exist here.

```yaml
items:
  intro_key:
    name: boiler.item.key.name
    description: boiler.item.key.description
```

`name` and `description` should be localization keys.

### Required Fields

* `name`

### Invalid Example

```yaml
items:
  intro_key: "Rusty Key"
```

❌ Missing object wrapper and `name` field
→ `E_SCHEMA_MISSING_FIELD`

---

# 5. scenes/*.yaml

Defines scenes and nodes.

Each file contains one scene.

```yaml
scene:
  id: intro
  nodes:
    - id: start
      text:
        - "You stand in a room."
      choices:
        - id: wait
          text: "Wait"
          goto:
            scene: intro
            node: start
```

---

## Node Structure

```yaml
- id: node_id
  text:
    - string or text fragment
  choices:
    - choice definition
```

Each node must have:

* `id`
* `text`
* `choices`

---

# Text Fragments

Text supports three formats.

---

### 1. Plain Strings

```yaml
- "You stand in a room."
```

---

### 2. Localization Keys

```yaml
- key: boiler.arrival.dock
```

---

### 3. Conditional Fragments

```yaml
- if:
    eq:
      var: has_key
      value: true
  then:
    key: boiler.floor.has_key
```

(v0.1: single condition only)

---

# Conditions (Operator-Based, v0.1)

Conditions use operator syntax:

```yaml
eq:
  var: has_key
  value: true
```

Supported operators:

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

### Example

```yaml
if:
  has_item:
    id: intro_key
```

---

### Logical Example

```yaml
if:
  all:
    - eq:
        var: has_key
        value: true
    - has_item:
        id: intro_key
```

---

### Invalid Example

```yaml
if:
  var: has_key
  eq: true
```

❌ Old syntax
→ `E_CONDITION_INVALID`

---

# Inline Interpolation (v0.1)

Inside string fragments:

```
{{variable}}
{{inventory_count}}
{{inventory_list}}
{{has_item:intro_key}}
```

Example:

```yaml
- "You carry {{inventory_count}} item(s)."
```

---

# Inline Conditional Blocks (v0.1)

```
{{if eq has_key true}}You feel confident.{{/if}}
```

```
{{if has_item intro_key}}You unlock the door.{{/if}}
```

Limitations:

* No nesting
* Single condition only
* Strict syntax

Invalid:

```
{{if has_item}}...
```

→ `E_CONDITION_INVALID`

---

# Choice Structure

```yaml
- id: take_key
  text: boiler.choice.take_key
  if:
    eq:
      var: has_key
      value: false
  effects:
    - set:
        var: has_key
        value: true
    - add_item:
        id: intro_key
  goto:
    scene: intro
    node: start
```

---

# Effects

## set

```yaml
- set:
    var: has_key
    value: true
```

---

## add

```yaml
- add:
    var: score
    value: 1
```

---

## add_item

```yaml
- add_item:
    id: intro_key
```

Item must exist in `items.yaml`.

---

# Randomness (v0.1)

Requires:

```yaml
rules:
  systems:
    randomness: true
```

Usage:

```yaml
- add:
    var: score
    value:
      random: "1/10"
```

Format: `"numerator/denominator"`

Example:

* `"1/10"` → 10% chance

Invalid:

```yaml
random: "10%"
```

→ `E_EFFECT_INVALID`

---

# Localization

Files are located in:

```
game/localization/*.yaml
```

Example `en.yaml`:

```yaml
boiler:
  arrival:
    dock: "The river fog hangs low over Dock 17."
```

Usage:

```yaml
- key: boiler.arrival.dock
```

Localization keys:

```
namespace.subkey.subkey
```

There is no need to prefix language (e.g., `en.`).
Language is handled internally by the engine.

Invalid:

```
boiler.arrival
```

If it does not resolve to a string
→ `E_LOCALIZATION_KEY_MISSING`

---

# Common Errors

| Error                       | Meaning                     |
| --------------------------- | --------------------------- |
| E_YAML_PARSE                | Error parsing YAML          |
| E_SCHEMA_MISSING_FIELD      | Required field missing      |
| E_SCHEMA_INVALID_TYPE       | Invalid field type          |
| E_REF_NOT_FOUND_SCENE       | Referenced scene not found  |
| E_REF_NOT_FOUND_NODE        | Referenced node not found   |
| E_REF_NOT_FOUND             | Referenced item not found   |
| E_DUPLICATE_ID              | Duplicate scene/node ID     |
| E_STATE_VAR_UNDECLARED      | Undeclared state variable   |
| E_STATE_TYPE_MISMATCH       | Initial value type mismatch |
| E_SYSTEM_DISABLED_USAGE     | Disabled system used        |
| E_CONDITION_INVALID         | Invalid condition syntax    |
| E_EFFECT_INVALID            | Invalid effect syntax       |
| E_LOCALIZATION_KEY_MISSING  | Localization key missing    |
| E_RUNTIME_ILLEGAL_CHOICE    | Illegal choice at runtime   |
| E_PLUGIN_REGISTRY_LOCKED    | Plugin registry locked      |
| E_PLUGIN_DUPLICATE_ID       | Duplicate plugin ID         |
| E_PLUGIN_DEPENDENCY_MISSING | Plugin dependency missing   |
| E_PLUGIN_ORDER_UNKNOWN      | Plugin order undetermined   |
| E_PLUGIN_ORDER_CYCLE        | Plugin order cycle detected |

---

# Engine Philosophy

* Explicit schema
* No implicit fallbacks
* Registry-backed references
* Deterministic runtime
* Declarative content
* Strict validation

If something is wrong, the engine stops.

---

# Current Limitations (v0.1)

* No nested inline conditionals
* No combat system
* No statistics plugin
* No dialogue history system
* No UI customization
* No mod loading
* No multiplayer

---

# Minimal Valid Game

To function, you need:

* `game.yaml`
* `rules.yaml`
* `state.yaml`
* `items.yaml`
* At least one scene file
* At least one node
* Valid start reference

Nothing more.

---

End of v0.1 game content specification.
