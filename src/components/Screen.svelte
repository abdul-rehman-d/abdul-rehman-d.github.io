<script lang="ts">
    export let color: string | undefined = "#ff3a3030";

    let apps = Array(4 * 6)
        .fill(0)
        .map((_, i) => `App ${i + 1}`);
</script>

<div class="iPhone__page" style="background-color: {color};">
    <div class="iPhone__page__apps_container">
        {#each apps as app}
            <div class="app_icon"></div>
        {/each}
    </div>
</div>

<style>
    .iPhone__page {
        flex-grow: 1;
        align-self: stretch;

        padding: 24px;

        display: flex;
    }
    .iPhone__page__apps_container {
        flex-grow: 1;
        align-self: stretch;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 10px;
    }

    .app_icon {
        background-color: #1c1c1e;
        border-radius: 15px;
        aspect-ratio: 1;
    }
</style>
