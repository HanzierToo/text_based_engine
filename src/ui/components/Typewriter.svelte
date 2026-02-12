<script lang="ts">
    import { onMount } from "svelte";

    export let text: string;
    export let speed: number = 20; // ms per character
    export let onComplete: (() => void) | undefined;

    let displayed = "";
    let index = 0;

    let timer: any;

    onMount(() => {
        startTyping();
    });

    function startTyping() {
        timer = setInterval(() => {
            if (index < text.length) {
                displayed += text[index];
                index++;
            } else {
                clearInterval(timer);
                onComplete?.();
            }
        }, speed);
    }
</script>

<span>{displayed}</span>
