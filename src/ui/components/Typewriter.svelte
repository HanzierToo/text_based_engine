<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  export let text: string;
  export let speed: number = 20; // ms per character
  export let onComplete: (() => void) | undefined;

  let displayed = "";
  let index = 0;
  let timer: ReturnType<typeof setInterval> | null = null;
  let cancelled = false;

  onMount(() => {
    startTyping();
  });

  onDestroy(() => {
    cancelled = true;
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  });

  function startTyping() {
    displayed = "";
    index = 0;
    cancelled = false;

    if (speed === 0) {
      displayed = text;
      onComplete?.();
      return;
    }

    timer = setInterval(() => {
      if (index < text.length) {
        displayed += text[index];
        index++;
      } else {
        if (timer) {
          clearInterval(timer);
          timer = null;
        }

        if (!cancelled) {
          onComplete?.();
        }
      }
    }, speed);
  }
</script>

<span>{displayed}</span>