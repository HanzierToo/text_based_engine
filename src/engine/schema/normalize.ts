// src/engine/schema/normalize.ts

import type {
  ParsedGameData,
  SceneDefinition,
  NodeDefinition,
  ItemDefinition,
  StateVariableDefinition,
} from './types'

/* ============================================================
 * Normalized Runtime Types
 * ============================================================
 */

export interface NormalizedGameModel {
  manifest: ParsedGameData['manifest']['game']
  rules: ParsedGameData['rules']['rules']
  state: NormalizedState
  items: Map<string, ItemDefinition>
  scenes: Map<string, NormalizedScene>
  localization: ParsedGameData['localization']
  language: string
}

export interface NormalizedState {
  variables: Map<string, NormalizedStateVariable>
}

export interface NormalizedStateVariable {
  type: StateVariableDefinition['type']
  value: boolean | number | string
  visible: boolean
}

export interface NormalizedScene {
  id: string
  nodes: Map<string, NormalizedNode>
}

export interface NormalizedNode {
  id: string
  text: NodeDefinition['text']
  choices: NodeDefinition['choices']
}

/* ============================================================
 * Normalization Entry Point
 * ============================================================
 */

export function normalizeGameData(
  data: ParsedGameData
): NormalizedGameModel {
  return {
    manifest: data.manifest.game,
    rules: data.rules.rules,
    state: normalizeState(data),
    items: normalizeItems(data),
    scenes: normalizeScenes(data),
    localization: data.localization,
    language: "en",
  }
}

/* ============================================================
 * State
 * ============================================================
 */

function normalizeState(data: ParsedGameData): NormalizedState {
  const defaultVisibility =
    data.rules.rules.state_visibility.default === 'visible'

  const variables = new Map<string, NormalizedStateVariable>()

  for (const [name, def] of Object.entries(
    data.state.state.variables
  )) {
    variables.set(name, {
      type: def.type,
      value: def.initial,
      visible:
        def.visible !== undefined ? def.visible : defaultVisibility,
    })
  }

  return { variables }
}

/* ============================================================
 * Inventory
 * ============================================================
 */

function normalizeItems(
  data: ParsedGameData
): Map<string, ItemDefinition> {
  const items = new Map<string, ItemDefinition>()

  for (const [id, def] of Object.entries(data.items.items)) {
    items.set(id, def)
  }

  return items
}

/* ============================================================
 * Scenes
 * ============================================================
 */

function normalizeScenes(
  data: ParsedGameData
): Map<string, NormalizedScene> {
  const scenes = new Map<string, NormalizedScene>()

  for (const sceneDef of Object.values(data.scenes)) {
    const sceneId = sceneDef.scene.id

    scenes.set(sceneId, {
      id: sceneId,
      nodes: normalizeNodes(sceneDef),
    })
  }

  return scenes
}

function normalizeNodes(
  sceneDef: SceneDefinition
): Map<string, NormalizedNode> {
  const nodes = new Map<string, NormalizedNode>()

  for (const node of sceneDef.scene.nodes) {
    nodes.set(node.id, {
      id: node.id,
      text: node.text,
      choices: node.choices,
    })
  }

  return nodes
}
