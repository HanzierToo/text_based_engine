# Game Content Guide (v0.1)

This directory contains all game content.

The engine reads only YAML files from here.  
No JavaScript is required to build a game.

All logic, structure, and content are defined declaratively.

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

Each file has a strict schema. Missing or malformed fields will cause validation failure.

The engine fails fast. There are no silent fallbacks.

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
→ Engine throws `E_SCHEMA_MISSING_FIELD`

---

# 2. rules.yaml

Enables systems (plugins).

```yaml
rules:
  systems:
    randomness: true
    inventory: true
```

If a system is disabled, its operators cannot be used.

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
* `visible`: if true, shown in ViewModel
* `requires` (optional): requires a system

### Invalid Example

```yaml
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
    name: "Rusty Key"
    description: "An old brass key."
```

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

---

# Text Fragments

Text supports:

### 1. Plain strings

```yaml
- "You stand in a room."
```

### 2. Localization

```yaml
- key: intro.room
```

### 3. Conditional fragments

```yaml
- if:
    eq:
      var: has_key
      value: true
  then: "You hold the key."
```

(v0.1: only single condition per fragment)

---

# Inline Interpolation (v0.1)

Inside strings:

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

Inside strings:

```
{{if has_item intro_key}}You unlock the door.{{/if}}
```

Supported operators:

* `eq`
* `neq`
* `gt`
* `gte`
* `lt`
* `lte`
* `has_item`

Example:

```
{{if eq has_key true}}You feel confident.{{/if}}
```

Limitations (v0.1):

* No nesting
* Single condition only
* Strict syntax required

Invalid:

```
{{if has_item}}...
```

→ `E_CONDITION_INVALID`

---

# Choice Structure

```yaml
- id: take_key
  text: "Pick up the key"
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

## add

```yaml
- add:
    var: score
    value: 1
```

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

`"1/10"` → 10% chance

Invalid:

```yaml
random: "10%"
```

→ `E_EFFECT_INVALID`

---

# Localization

In `localization/en.yaml`:

```yaml
intro:
  room: "You stand in a dark room."
```

Usage:

```yaml
- key: intro.room
```

Format must be:

```
namespace.key
```

Invalid:

```
intro.room.extra
```

→ `E_LOCALIZATION_KEY_MISSING`

---

## Common Errors

| Error                       | Meaning                                             |
| --------------------------- | --------------------------------------------------- |
| E_YAML_PARSE                | Error parsing YAML input                            |
| E_SCHEMA_MISSING_FIELD      | Required YAML field missing                         |
| E_SCHEMA_INVALID_TYPE       | Field has an invalid type                           |
| E_REF_NOT_FOUND_SCENE       | Referenced scene not found                          |
| E_REF_NOT_FOUND_NODE        | Referenced node not found                           |
| E_REF_NOT_FOUND             | Referenced scene/node/item not found                |
| E_DUPLICATE_ID              | Duplicate scene/node ID                             |
| E_STATE_VAR_UNDECLARED      | State variable referenced but not declared          |
| E_STATE_TYPE_MISMATCH       | State variable initial value has wrong type         |
| E_SYSTEM_DISABLED_USAGE     | Operator used from a disabled system                |
| E_CONDITION_INVALID         | Invalid condition syntax                            |
| E_EFFECT_INVALID            | Invalid effect syntax                               |
| E_LOCALIZATION_KEY_MISSING  | Localization key missing                            |
| E_RUNTIME_ILLEGAL_CHOICE    | Choice is not allowed at runtime (illegal choice)   |
| E_PLUGIN_REGISTRY_LOCKED    | Plugin registry is locked (no further registrations)|
| E_PLUGIN_DUPLICATE_ID       | Plugin with duplicate id registered                 |
| E_PLUGIN_DEPENDENCY_MISSING | Plugin dependency is missing                        |
| E_PLUGIN_ORDER_UNKNOWN      | Plugin order could not be determined                |
| E_PLUGIN_ORDER_CYCLE        | Plugin ordering contains a cycle                    |

---

# Engine Philosophy

* Explicit schema
* No implicit fallbacks
* Registry-backed references
* Deterministic runtime
* Content separated from engine

If something is wrong, the engine stops.

---

# Current Limitations (v0.1)

* No nested inline conditionals
* No combat system
* No statistics plugin
* No branching dialogue history system
* No UI layout customization
* No mod loading
* No multiplayer

---

# Best Practices

* Keep scene files small and modular
* Use localization for reusable strings
* Avoid large logic blocks in text strings
* Validate frequently during development
* Enable only required systems

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