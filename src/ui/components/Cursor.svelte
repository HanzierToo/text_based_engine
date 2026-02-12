<script>
    let visible = true;

    setInterval(() => {
        visible = !visible;
    }, 500);
</script>

<span class="cursor">
    {#if visible}_{/if}
</span>

<style>
    .cursor {
        display: inline-block;
        margin-left: 2px;
    }
</style>
