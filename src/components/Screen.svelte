<script lang="ts">
    let apps = Array(4 * 5)
        .fill(0)
        .map((_, i) => `App ${i + 1}`);
</script>

<div class="iPhone__page">
    <div class="iPhone__page__apps_container">
        {#each apps as app}
            <div class="app_icon">
                <div class="app_icon__icon"></div>
                <div class="app_icon__name">{app}</div>
            </div>
        {/each}
    </div>
</div>

<style>
    .iPhone__page {
        flex-grow: 1;
        align-self: stretch;

        padding: 12px 24px;

        display: flex;
    }
    .iPhone__page__apps_container {
        flex-grow: 1;
        height: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 10px;
    }
    .app_icon {
        display: flex;
        gap: 5px;
        flex-direction: column;
        align-items: center;
    }

    .app_icon__icon {
        width: 100%;
        background-color: #1c1c1e;
        border-radius: 15px;
        aspect-ratio: 1;
    }

    .app_icon__name {
        font-size: 10px;
        color: #1c1c1e;
    }

</style>
