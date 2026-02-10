// src/engine/schema/validate.ts

import {
  ParsedGameData,
  SceneDefinition,
  NodeDefinition,
} from './types'
import { EngineError } from '../runtime/errors'

export function validateGameData(data: ParsedGameData): void {
  validateManifest(data)
  validateRules(data)
  validateState(data)
  validateScenes(data)
  validateStartNode(data)
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

    validateNodes(sceneDef, filename)
  }
}

function validateNodes(sceneDef: SceneDefinition, filename: string): void {
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

    validateChoices(node, sceneDef.scene.id, filename)
  }
}

function validateChoices(
  node: NodeDefinition,
  sceneId: string,
  filename: string
): void {
  for (const choice of node.choices) {
    if (!choice.goto) {
      throw new EngineError(
        'E_SCHEMA_MISSING_FIELD',
        `Choice "${choice.id}" is missing goto`,
        { file: `scenes/${filename}`, path: `node.${node.id}.choices.${choice.id}` }
      )
    }
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
