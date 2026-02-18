<script lang="ts">
  import { onMount } from "svelte";

  export let text: string | undefined;

  let wrapper: HTMLDivElement;
  let tooltip: HTMLDivElement;

  function adjustPosition() {
    if (!wrapper || !tooltip) return;

    const rect = tooltip.getBoundingClientRect();
    const overflowLeft = rect.left < 8;
    const overflowRight = rect.right > window.innerWidth - 8;

    if (overflowLeft) {
      tooltip.style.left = "0";
      tooltip.style.transform = "translateX(0)";
    }

    if (overflowRight) {
      tooltip.style.left = "100%";
      tooltip.style.transform = "translateX(-100%)";
    }
  }

  onMount(() => {
    adjustPosition();
    window.addEventListener("resize", adjustPosition);
    return () => window.removeEventListener("resize", adjustPosition);
  });
</script>

<div class="tooltip-wrapper" bind:this={wrapper}>
  <slot />
    {#if text}
    <div class="tooltip" bind:this={tooltip}>
        {text}
    </div>
    {/if}
</div>

<style>
.tooltip-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.tooltip {
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 10px;
  font-size: 12px;
  white-space: nowrap;
  border: 1px solid currentColor;
  background: var(--tooltip-bg);
  color: var(--tooltip-text);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 100;
}

.tooltip-wrapper:hover .tooltip {
  opacity: 1;
}
</style>