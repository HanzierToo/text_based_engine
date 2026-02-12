// src/engine/schema/validate.ts

import {
  ParsedGameData,
  SceneDefinition,
  NodeDefinition,
  Condition,
  Effect,
} from './types'
import { EngineError } from '../runtime/errors'

export function validateGameData(data: ParsedGameData): void {
  validateManifest(data)
  validateRules(data)
  validateState(data)
  validateItems(data)
  validateScenes(data)
  validateStartNode(data)
}

/* ============================================================
 * Condition Validation (Operator-Based)
 * ============================================================
 */

function validateCondition(condition: Condition, path: string): void {
  const keys = Object.keys(condition)

  if (keys.length !== 1) {
    throw new EngineError(
      'E_CONDITION_INVALID',
      `Condition must contain exactly one operator at ${path}`
    )
  }

  const operator = keys[0]

  // Logical operators
  if (operator === 'all' || operator === 'any') {
    const arr = (condition as any)[operator]

    if (!Array.isArray(arr) || arr.length === 0) {
      throw new EngineError(
        'E_CONDITION_INVALID',
        `"${operator}" must be a non-empty array at ${path}`
      )
    }

    arr.forEach((c: Condition, i: number) =>
      validateCondition(c, `${path}.${operator}[${i}]`)
    )

    return
  }

  if (operator === 'not') {
    const inner = (condition as any).not

    if (!inner) {
      throw new EngineError(
        'E_CONDITION_INVALID',
        `"not" condition missing value at ${path}`
      )
    }

    validateCondition(inner, `${path}.not`)
    return
  }

  // Primitive/operator-based condition
  const payload = (condition as any)[operator]

  if (
    typeof payload !== 'object' ||
    payload === null ||
    !payload.var ||
    !('value' in payload)
  ) {
    throw new EngineError(
      'E_CONDITION_INVALID',
      `Invalid payload for operator "${operator}" at ${path}`
    )
  }
}

function validateEffects(
  effects: Effect[] | undefined,
  path: string,
  data: ParsedGameData
): void {
  if (!effects) return

  effects.forEach((effect, i) => {
    const keys = Object.keys(effect)

    if (keys.length !== 1) {
      throw new EngineError(
        'E_EFFECT_INVALID',
        `Effect must contain exactly one operator at ${path}[${i}]`
      )
    }

    const operator = keys[0]
    const payload = (effect as any)[operator]

    // Core effects
    if (operator === 'set') {
      if (!payload.var) {
        throw new EngineError(
          'E_EFFECT_INVALID',
          `Set effect missing var at ${path}[${i}]`
        )
      }
    }

    if (operator === 'add') {
      if (!payload.var) {
        throw new EngineError(
          'E_EFFECT_INVALID',
          `Add effect missing var at ${path}[${i}]`
        )
      }

      if (
        typeof payload.value === 'object' &&
        'random' in payload.value
      ) {
        if (!/^\d+\/\d+$/.test(payload.value.random)) {
          throw new EngineError(
            'E_EFFECT_INVALID',
            `Invalid random format at ${path}[${i}]`
          )
        }
      }
    }

    // Inventory effects
    if (operator === 'add_item' || operator === 'remove_item') {
      if (!payload || typeof payload.id !== 'string') {
        throw new EngineError(
          'E_EFFECT_INVALID',
          `${operator} requires { id: string } at ${path}[${i}]`
        )
      }

      if (!data.items.items[payload.id]) {
        throw new EngineError(
          'E_REF_NOT_FOUND',
          `Unknown item "${payload.id}" at ${path}[${i}]`,
          { file: 'items.yaml', path: `items.${payload.id}` }
        )
      }
    }
  })
}

/* ============================================================
 * Manifest
 * ============================================================
 */

function validateManifest(data: ParsedGameData): void {
  const g = data.manifest.game

  if (!g.id || !g.title || !g.version) {
    throw new EngineError(
      'E_SCHEMA_MISSING_FIELD',
      'Missing required game metadata fields',
      { file: 'game.yaml' }
    )
  }
}

/* ============================================================
 * Rules
 * ============================================================
 */

function validateRules(data: ParsedGameData): void {
  const systems = data.rules.rules.systems
  if (!systems) {
    throw new EngineError(
      'E_SCHEMA_MISSING_FIELD',
      'rules.systems is required',
      { file: 'rules.yaml' }
    )
  }
}

/* ============================================================
 * State
 * ============================================================
 */

function validateState(data: ParsedGameData): void {
  const vars = data.state.state.variables
  const systems = data.rules.rules.systems

  for (const [name, def] of Object.entries(vars)) {
    if (def.requires && !systems[def.requires]) {
      throw new EngineError(
        'E_SYSTEM_DISABLED_USAGE',
        `State variable "${name}" requires disabled system "${def.requires}"`,
        { file: 'state.yaml', path: `state.variables.${name}` }
      )
    }

    if (typeof def.initial !== def.type) {
      throw new EngineError(
        'E_STATE_TYPE_MISMATCH',
        `Initial value of "${name}" does not match declared type "${def.type}"`,
        { file: 'state.yaml', path: `state.variables.${name}.initial` }
      )
    }
  }
}

/* ============================================================
 * Inventory
 * ============================================================
 */

function validateItems(data: ParsedGameData): void {
  const items = data.items.items

  for (const [id, def] of Object.entries(items)) {
    if (!def.name) {
      throw new EngineError(
        'E_SCHEMA_MISSING_FIELD',
        `Item "${id}" missing name`,
        { file: 'items.yaml', path: `items.${id}.name` }
      )
    }
  }
}


/* ============================================================
 * Scenes and Nodes
 * ============================================================
 */

function validateScenes(data: ParsedGameData): void {
  const sceneIds = new Set<string>()

  for (const [filename, sceneDef] of Object.entries(data.scenes)) {
    const scene = sceneDef.scene

    if (sceneIds.has(scene.id)) {
      throw new EngineError(
        'E_DUPLICATE_ID',
        `Duplicate scene id "${scene.id}"`,
        { file: `scenes/${filename}`, path: 'scene.id' }
      )
    }
    sceneIds.add(scene.id)

    validateNodes(sceneDef, filename, data)
  }
}

function validateNodes(sceneDef: SceneDefinition, filename: string, data: ParsedGameData): void {
  const nodeIds = new Set<string>()

  for (const node of sceneDef.scene.nodes) {
    if (nodeIds.has(node.id)) {
      throw new EngineError(
        'E_DUPLICATE_ID',
        `Duplicate node id "${node.id}" in scene "${sceneDef.scene.id}"`,
        { file: `scenes/${filename}`, path: 'scene.nodes[].id' }
      )
    }
    nodeIds.add(node.id)

    node.text.forEach((frag, index) => {
      if (typeof frag !== 'string' && 'if' in frag) {
        validateCondition(
          frag.if,
          `scene.${sceneDef.scene.id}.node.${node.id}.text[${index}].if`
        )
      }
    })

    validateChoices(node, sceneDef.scene.id, filename, data)
  }
}

function validateChoices(
  node: NodeDefinition,
  sceneId: string,
  filename: string,
  data: ParsedGameData,
): void {
  for (const choice of node.choices) {
    if (!choice.goto) {
      throw new EngineError(
        'E_SCHEMA_MISSING_FIELD',
        `Choice "${choice.id}" is missing goto`,
        { file: `scenes/${filename}`, path: `node.${node.id}.choices.${choice.id}` }
      )
    }
    if (choice.if) {
      validateCondition(
        choice.if,
        `scene.${sceneId}.node.${node.id}.choice.${choice.id}.if`
      )
    }
      validateEffects(
        choice.effects,
        `scene.${sceneId}.node.${node.id}.choice.${choice.id}.effects`,
        data
      )
  }
}

/* ============================================================
 * Start Node
 * ============================================================
 */

function validateStartNode(data: ParsedGameData): void {
  const { scene, node } = data.manifest.game.start

  const targetScene = Object.values(data.scenes).find(
    s => s.scene.id === scene
  )

  if (!targetScene) {
    throw new EngineError(
      'E_REF_NOT_FOUND_SCENE',
      `Start scene "${scene}" not found`,
      { file: 'game.yaml', path: 'game.start.scene' }
    )
  }

  const targetNode = targetScene.scene.nodes.find(n => n.id === node)
  if (!targetNode) {
    throw new EngineError(
      'E_REF_NOT_FOUND_NODE',
      `Start node "${node}" not found in scene "${scene}"`,
      { file: 'game.yaml', path: 'game.start.node' }
    )
  }

}
