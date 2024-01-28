<script lang="ts">
    import AppIcon from "./AppIcon/AppIcon.svelte";

    export let folder: TFolder;
</script>

<div class="appLibrary__folder">
    <div class="appLibrary__folder_iconish">
        <div class="appLibrary__folder_apps_container grid_4x4">
            {#each folder.apps.length <= 4 ? folder.apps : folder.apps.slice(0, 3) as app, i}
                <AppIcon {app} showLabel={false} --roundness="10px" />
            {/each}
            {#if folder.apps.length > 4}
                <div class="grid_4x4" style="--gap: 4px;">
                    {#each folder.apps.slice(3, 7) as app}
                        <AppIcon {app} showLabel={false} --roundness="4px" />
                    {/each}
                </div>
            {/if}
        </div>
    </div>
    <div class="appLibrary__folder_label">{folder.name}</div>
</div>

<style>
    .appLibrary__folder {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    .appLibrary__folder_iconish {
        width: 100%;
        aspect-ratio: 1;
        border-radius: 12px;
        background-color: #00000047;

        overflow: hidden;
        display: flex;
    }

    .appLibrary__folder_apps_container {
        flex-grow: 1;
        align-self: stretch;

        margin: 8px;

        --gap: 8px;
    }

    .grid_4x4 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: var(--gap, 1px);
    }

    .appLibrary__folder_label {
        font-size: 10px;
        font-weight: 300;
        color: #000000;
    }
</style>
