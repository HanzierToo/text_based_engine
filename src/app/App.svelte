<script lang="ts">
  import { loadGameFiles } from '../engine/io/loader'

  let status = 'loading...'
  let error: string | null = null

  try {
    const files = loadGameFiles()
    console.log('Loaded game files:', files)
    status = 'Game files loaded successfully'
  } catch (e) {
    error = e instanceof Error ? e.message : String(e)
    status = 'Error'
  }
</script>

<main>
  <h1>{status}</h1>
  {#if error}
    <pre>{error}</pre>
  {/if}
</main>
