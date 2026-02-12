import type { EnginePlugin, ConditionHandler, EffectHandler } from './plugin'
import { EngineError } from '../runtime/errors'

export class PluginRegistry {
  private plugins: EnginePlugin[] = []
  private finalized = false

  register(plugin: EnginePlugin) {
    if (this.finalized) {
      throw new EngineError(
        'E_PLUGIN_REGISTRY_LOCKED',
        'Cannot register plugins after registry is finalized'
      )
    }
    this.plugins.push(plugin)
  }

  finalize(): void {
    // 1) Unique IDs
    const seen = new Set<string>()
    for (const p of this.plugins) {
      if (seen.has(p.id)) {
        throw new EngineError(
          'E_PLUGIN_DUPLICATE_ID',
          `Duplicate plugin id "${p.id}"`
        )
      }
      seen.add(p.id)
    }

    // 2) Hard dependencies
    for (const p of this.plugins) {
      for (const dep of p.dependsOn ?? []) {
        if (!seen.has(dep)) {
          throw new EngineError(
            'E_PLUGIN_DEPENDENCY_MISSING',
            `Plugin "${p.id}" depends on missing plugin "${dep}"`
          )
        }
      }
    }

    // 3) Order constraints (before/after) topo sort
    this.plugins = topoSort(this.plugins)

    this.finalized = true
  }

  getAll(): readonly EnginePlugin[] {
    return this.plugins
  }

  runHook(
    hookName: keyof NonNullable<EnginePlugin['hooks']>,
    session: any,
    model: any
  ) {
    for (const plugin of this.plugins) {
      const hook = plugin.hooks?.[hookName]
      if (hook) hook(session, model)
    }
  }

  findConditionHandler(key: string): ConditionHandler | undefined {
    for (const plugin of this.plugins) {
      const h = plugin.conditions?.[key]
      if (h) return h
    }
    return undefined
  }

  findEffectHandler(key: string): EffectHandler | undefined {
    for (const plugin of this.plugins) {
      const h = plugin.effects?.[key]
      if (h) return h
    }
    return undefined
  }
}

/* ============================================================
 * Topological Sort (stable)
 * ============================================================
 */

function topoSort(plugins: EnginePlugin[]): EnginePlugin[] {
  const byId = new Map<string, EnginePlugin>()
  for (const p of plugins) byId.set(p.id, p)

  // edges: A -> B means A must run before B
  const edges = new Map<string, Set<string>>()
  const indeg = new Map<string, number>()

  for (const p of plugins) {
    edges.set(p.id, new Set())
    indeg.set(p.id, 0)
  }

  function addEdge(from: string, to: string) {
    if (!edges.get(from)!.has(to)) {
      edges.get(from)!.add(to)
      indeg.set(to, (indeg.get(to) ?? 0) + 1)
    }
  }

  // Hard deps imply ordering: dep before plugin
  for (const p of plugins) {
    for (const dep of p.dependsOn ?? []) {
      addEdge(dep, p.id)
    }
  }

  // Soft ordering constraints
  for (const p of plugins) {
    for (const after of p.order?.after ?? []) {
      if (!byId.has(after)) {
        throw new EngineError(
          'E_PLUGIN_ORDER_UNKNOWN',
          `Plugin "${p.id}" orders after unknown plugin "${after}"`
        )
      }
      addEdge(after, p.id)
    }
    for (const before of p.order?.before ?? []) {
      if (!byId.has(before)) {
        throw new EngineError(
          'E_PLUGIN_ORDER_UNKNOWN',
          `Plugin "${p.id}" orders before unknown plugin "${before}"`
        )
      }
      addEdge(p.id, before)
    }
  }

  // Kahn's algorithm with stable ordering (original registration order)
  const queue: string[] = []
  for (const p of plugins) {
    if ((indeg.get(p.id) ?? 0) === 0) queue.push(p.id)
  }

  const out: EnginePlugin[] = []
  while (queue.length > 0) {
    const id = queue.shift()!
    out.push(byId.get(id)!)

    for (const to of edges.get(id)!) {
      indeg.set(to, (indeg.get(to) ?? 0) - 1)
      if ((indeg.get(to) ?? 0) === 0) {
        queue.push(to)
      }
    }
  }

  if (out.length !== plugins.length) {
    throw new EngineError(
      'E_PLUGIN_ORDER_CYCLE',
      'Plugin ordering contains a cycle'
    )
  }

  return out
}
