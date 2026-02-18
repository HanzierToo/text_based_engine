// src/engine/schema/types.ts

/* ============================================================
 * Root / Manifest
 * ============================================================
 */

export interface GameManifest {
  game: {
    id: string
    title: string
    version: string

    start: {
      scene: string
      node: string
    }

    ui: {
      theme: string
      text_speed: 'slow' | 'normal' | 'fast' | 'rapid' | 'instant' | number
    }

    localization?: {
      default: string
    }
  }
}

/* ============================================================
 * Rules / Systems
 * ============================================================
 */

export interface RulesConfig {
  rules: {
    systems: {
      inventory: boolean
      statistics: boolean
      combat: boolean
      randomness: boolean
    }

    state_visibility: {
      default: 'hidden' | 'visible'
    }
  }
}

/* ============================================================
 * State Definition
 * ============================================================
 */

export type StateValueType = 'boolean' | 'number' | 'string'

export interface StateVariableDefinition {
  type: StateValueType
  initial: boolean | number | string
  visible?: boolean
  requires?: keyof RulesConfig['rules']['systems']
}

export interface StateDefinition {
  state: {
    variables: Record<string, StateVariableDefinition>
  }
}

/* ============================================================
 * Scenes
 * ============================================================
 */

export interface SceneDefinition {
  scene: {
    id: string
    nodes: NodeDefinition[]
  }
}

/* ============================================================
 * Nodes
 * ============================================================
 */

export interface NodeDefinition {
  id: string
  text: TextFragment[]
  choices: ChoiceDefinition[]
}

/* ============================================================
 * Text Fragments
 * ============================================================
 */

export type TextFragment =
  | string
  | LocalizationKey
  | ConditionalTextFragment

export interface LocalizationKey {
  key: string
}

export interface ConditionalTextFragment {
  if: Condition
  then: string | LocalizationKey
}

/* ============================================================
 * Choices
 * ============================================================
 */

export interface ChoiceDefinition {
  id: string
  text: string
  if?: Condition
  effects?: Effect[]
  goto: {
    scene: string
    node: string
  }
}

/* ============================================================
 * Conditions
 * ============================================================
 */

export type Condition =
  | PrimitiveCondition
  | LogicalCondition
  | OperatorCondition

export interface PrimitiveCondition {
  var: string
  eq?: boolean | number | string
  neq?: boolean | number | string
  gt?: number
  gte?: number
  lt?: number
  lte?: number
}

export interface LogicalCondition {
  all?: Condition[]
  any?: Condition[]
  not?: Condition
}

export interface OperatorCondition {
  [operator: string]: unknown
}

/* ============================================================
 * Effects
 * ============================================================
 */

export type Effect =
  | SetEffect
  | AddEffect

export interface SetEffect {
  set: {
    var: string
    value: boolean | number | string
  }
}

export interface AddEffect {
  add: {
    var: string
    value: number | RandomValue
  }
}

/* ============================================================
 * Randomness
 * ============================================================
 */

export interface RandomValue {
  random: string
}

/* ============================================================
 * Localization
 * ============================================================
 */

export type LocalizationBundle = Record<string, any>

/* ============================================================
 * Engine-Level Aggregates (Parsed but Unvalidated)
 * ============================================================
 */

export interface ParsedGameData {
  manifest: GameManifest
  rules: RulesConfig
  state: StateDefinition
  scenes: Record<string, SceneDefinition>
  localization: LocalizationBundle
  items: ItemsFile
}

/* ============================================================
 * Inventory System
 * ============================================================
 */

export interface ItemDefinition {
  name: string
  description?: string
}

export interface ItemsFile {
  items: Record<string, ItemDefinition>
}