<script lang="ts">
    let apps = Array(4)
        .fill(0)
        .map((_, i) => `App ${i + 1}`);
</script>

<div class="iPhone__dock">
    <div class="iPhone__dock__floating_dock">
        {#each apps as app}
            <div class="app_icon"></div>
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
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 10px;

        padding: 16px;
    }

    .app_icon {
        background-color: #1c1c1e;
        border-radius: 15px;
        aspect-ratio: 1;
    }
</style>
