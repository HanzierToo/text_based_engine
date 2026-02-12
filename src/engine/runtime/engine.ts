// src/engine/runtime/engine.ts

import type { NormalizedGameModel } from '../schema/normalize'
import { EngineError } from './errors'
import { GameSession, type NodeRef, type SaveDataV0 } from './session'
import { evaluateCondition } from './evaluator'
import { applyEffects } from './effects'
import { resolveText } from './resolver'
import { PluginRegistry } from '../plugins/registry'
import type { Condition } from '../schema/types'
import { CorePlugin } from '../plugins/builtins/core'
import { RandomnessPlugin } from '../plugins/builtins/randomness'

export type ViewChoice = {
  id: string
  text: string
  enabled: boolean
}

export type ViewModel = {
  gameTitle: string
  sceneId: string
  nodeId: string
  text: string[]
  choices: ViewChoice[]
  visibleState: Record<string, boolean | number | string>
}

export class Engine {
  private readonly model: NormalizedGameModel
  private readonly session: GameSession
  private readonly plugins = new PluginRegistry()

  constructor(model: NormalizedGameModel) {
    this.model = model
    this.session = new GameSession(model)
    this.assertNodeExists(this.session.at)
    this.plugins.register(CorePlugin)

    const systems = this.model.rules.systems

    if (systems.randomness) {
        this.plugins.register(RandomnessPlugin)
    }

    this.plugins.finalize()
  }

  start(): ViewModel {
    this.plugins.runHook('onStart', this.session, this.model)
    this.assertNodeExists(this.session.at)
    return this.getViewModel()
  }

  getViewModel(): ViewModel {
    const at = this.session.at
    const node = this.getNode(at)

    return {
      gameTitle: this.model.manifest.title,
      sceneId: at.scene,
      nodeId: at.node,
      text: resolveText(node.text, this.session, this.model, this.plugins),
      choices: node.choices
        .filter(c => !c.if || evaluateCondition(c.if, this.session, this.model, this.plugins))
        .map(c => ({
          id: c.id,
          text: c.text,
          enabled: true,
        })),
      visibleState: this.session.getVisibleState(),
    }
  }

  choose(choiceId: string): ViewModel {
    const from = this.session.at
    const node = this.getNode(from)

    const choice = node.choices.find(c => c.id === choiceId)
    if (!choice) {
      throw new EngineError(
        'E_RUNTIME_ILLEGAL_CHOICE',
        `Choice "${choiceId}" not found in node "${from.scene}.${from.node}"`
      )
    }

    this.plugins.runHook('beforeChoice', this.session, this.model)

    if (choice.if && !evaluateCondition(choice.if, this.session, this.model, this.plugins)) {
      throw new EngineError(
        'E_RUNTIME_ILLEGAL_CHOICE',
        `Choice "${choiceId}" is not currently available`
      )
    }

    const to: NodeRef = {
      scene: choice.goto.scene,
      node: choice.goto.node,
    }

    this.assertNodeExists(to)

    this.plugins.runHook('beforeTransition', this.session, this.model)
    applyEffects(choice.effects, this.session, this.model, this.plugins)
    this.session.move(to, choiceId, from)
    this.plugins.runHook('afterTransition', this.session, this.model)
    this.plugins.runHook('afterChoice', this.session, this.model)
    return this.getViewModel()
  }

  save(): SaveDataV0 {
    return this.session.save()
  }

  load(save: SaveDataV0): ViewModel {
    this.session.load(save)
    this.assertNodeExists(this.session.at)
    return this.getViewModel()
  }

  private getNode(ref: NodeRef) {
    const scene = this.model.scenes.get(ref.scene)
    if (!scene) {
      throw new EngineError(
        'E_REF_NOT_FOUND_SCENE',
        `Scene "${ref.scene}" not found`
      )
    }

    const node = scene.nodes.get(ref.node)
    if (!node) {
      throw new EngineError(
        'E_REF_NOT_FOUND_NODE',
        `Node "${ref.node}" not found in scene "${ref.scene}"`
      )
    }

    return node
  }

  private assertNodeExists(ref: NodeRef): void {
    this.getNode(ref)
  }

  getCurrentNodeRef(): NodeRef {
    return this.session.at
  }

  getFullState(): Record<string, boolean | number | string> {
    const save = this.session.save()
    return save.state
  }

  getHistory() {
    return this.session.history
  }

  getAllScenes() {
    return this.model.scenes
  }
}
