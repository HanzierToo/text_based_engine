<script lang="ts">
  export let text: string | undefined;

  let tooltip: HTMLDivElement;
  let overflowClass: "" | "overflow-left" | "overflow-right" = "";

  function adjustPosition() {
    if (!tooltip) return;

    // Reset first to measure the "natural" centered position
    overflowClass = "";

    requestAnimationFrame(() => {
      const rect = tooltip.getBoundingClientRect();
      const padding = 12;

      if (rect.left < padding) {
        overflowClass = "overflow-left";
      } else if (rect.right > window.innerWidth - padding) {
        overflowClass = "overflow-right";
      }
    });
  }
</script>

<div 
  class="tooltip-wrapper" 
  on:mouseenter={adjustPosition}
  role="none"
>
  <slot />
  
  {#if text}
    <div 
      bind:this={tooltip}
      class="tooltip {overflowClass}" 
      role="tooltip"
      aria-hidden="true"
    >
      {text}
    </div>
  {/if}
</div>

<style>
  .tooltip-wrapper {
    position: relative;
    display: inline-flex;
    width: fit-content;
  }

  .tooltip {
    position: absolute;
    bottom: 130%;
    left: 50%;
    transform: translateX(-50%);
    
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1.4;
    
    white-space: normal; 
    width: clamp(200px, 40vw, 400px);

    border: 1px solid currentColor;
    background: var(--tooltip-bg);
    color: var(--tooltip-text);
    
    /* Animation */
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s ease-out;
    z-index: 100;
    
    box-shadow: 0 0 5px var(--tooltip-text), inset 0 0 5px var(--tooltip-text);
  }

  /* Override Classes applied by JS */
  .tooltip.overflow-left {
    left: 0;
    transform: translateX(0);
  }

  .tooltip.overflow-right {
    left: 100%;
    transform: translateX(-100%);
  }

  .tooltip-wrapper:hover .tooltip {
    opacity: 1;
  }
</style>