<script lang="ts">
    import AppIcon from "./AppIcon.svelte";

    let apps = Array(4)
        .fill(0)
        .map((_, i) => `App ${i + 1}`);
</script>

<div class="iPhone__dock">
    <div class="iPhone__dock__floating_dock">
        {#each apps as app}
            <AppIcon app={undefined} showLabel={false} />
        {/each}
    </div>
</div>

<style>
    .iPhone__dock {
        flex-grow: 1;
        align-self: stretch;

        padding: 12px;
    }

    .iPhone__dock__floating_dock {
        background-color: #f5f5f532;
        border-radius: 30px;

        display: grid;
        grid-template-columns: repeat(auto-fit, 46px);
        gap: 10px;
        justify-content: center;

        padding: 16px;
    }
</style>
