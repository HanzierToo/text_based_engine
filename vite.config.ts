// vite.config.ts

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import yaml from '@rollup/plugin-yaml'

export default defineConfig({
  base: '/text_based_engine/',
  plugins: [
    svelte(),
    yaml()
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    strictPort: true,
  },
})
