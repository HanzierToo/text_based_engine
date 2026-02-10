// src/engine/runtime/engine.ts

import type { NormalizedGameModel } from '../schema/normalize'
import { EngineError } from './errors'
import { GameSession, type NodeRef, type SaveDataV0 } from './session'
import { evaluateCondition } from './evaluator'
import { applyEffects } from './effects'
import type { Condition } from '../schema/types'

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

  constructor(model: NormalizedGameModel) {
    this.model = model
    this.session = new GameSession(model)
    this.assertNodeExists(this.session.at)
  }

  start(): ViewModel {
    return this.getViewModel()
  }

  getViewModel(): ViewModel {
    const at = this.session.at
    const node = this.getNode(at)

    return {
      gameTitle: this.model.manifest.title,
      sceneId: at.scene,
      nodeId: at.node,
      text: resolveTextV0(node.text, this.session),
      choices: node.choices
        .filter(c => !c.if || evaluateCondition(c.if, this.session))
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

    if (choice.if && !evaluateCondition(choice.if, this.session)) {
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

    applyEffects(choice.effects, this.session, this.model)
    this.session.move(to, choiceId, from)
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
}

/* ============================================================
 * Text resolution (v0)
 * ============================================================
 */

function resolveTextV0(
  text: Array<string | { if: Condition; then: string }>,
  session: GameSession
): string[] {
  const out: string[] = []

  for (const frag of text) {
    if (typeof frag === 'string') {
      out.push(frag)
    } else if (evaluateCondition(frag.if, session)) {
      out.push(frag.then)
    }
  }

  return out
}
