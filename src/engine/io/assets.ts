// src/engine/io/assets.ts

import { parseYaml } from "./parser";
import type { GameManifest } from "../schema/types";

export type RawGameAssets = {
  id: string;            // folder id
  title: string;         // from game.yaml
  raw: {
    game: string;
    rules: string;
    state: string;
    items: string;
    scenes: Record<string, string>;
    localization: Record<string, string>;
  };
};

export type RawGameCollection = Record<string, RawGameAssets>;

export function collectAllRawGameAssets(): RawGameCollection {
  const files = import.meta.glob<string>("/src/games/**/*.yaml", {
    query: "?raw",
    import: "default",
    eager: true,
  });

  const games: RawGameCollection = {};

  for (const [path, content] of Object.entries(files)) {
    const parts = path.split("/src/games/")[1].split("/");
    const gameId = parts[0];
    const relativePath = parts.slice(1).join("/");

    if (!games[gameId]) {
      games[gameId] = {
        id: gameId,
        title: gameId, // temporary fallback
        raw: {
          game: "",
          rules: "",
          state: "",
          items: "",
          scenes: {},
          localization: {},
        },
      };
    }

    const game = games[gameId];

    if (relativePath === "game.yaml") {
      game.raw.game = content;

      try {
        const manifest =
          parseYaml(content, "game.yaml").value as GameManifest;
        game.title = manifest.game.title;
      } catch {
        // If invalid YAML, leave folder name as fallback title
      }
    }
    else if (relativePath === "rules.yaml") game.raw.rules = content;
    else if (relativePath === "state.yaml") game.raw.state = content;
    else if (relativePath === "items.yaml") game.raw.items = content;
    else if (relativePath.startsWith("scenes/")) {
      const name = relativePath.replace("scenes/", "");
      game.raw.scenes[name] = content;
    }
    else if (relativePath.startsWith("localization/")) {
      const name = relativePath.replace("localization/", "");
      game.raw.localization[name] = content;
    }
  }

  return games;
}