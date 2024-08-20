<script lang="ts">
    import AppIcon from "./AppIcon/AppIcon.svelte";

    import { createEventDispatcher } from "svelte";

    import { flip } from "svelte/animate";

    export let folder: TFolder;

    export let send;
    export let receive;

    export let showModalApps: boolean = false;

    const dispatch = createEventDispatcher();

    $: isFolderExpandable = folder.apps.length > 4;

    $: bigIcons = isFolderExpandable ? folder.apps.slice(0, 3) : folder.apps;
    $: smallIcons = isFolderExpandable ? folder.apps.slice(3, 7) : [];
    $: restOfApps = folder.apps.length > 7 ? folder.apps.slice(7) : [];

    function toggleFolderExpansion() {
        if (!isFolderExpandable) {
            console.log("no expand");
            return;
        }

        dispatch("folderOpen", {
            folder,
        })
    }
</script>

<div class="appLibrary__folder">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="appLibrary__folder_iconish" on:click={toggleFolderExpansion}>
        <div class="appLibrary__folder_apps_container grid_4x4">
            {#each showModalApps ? [] : bigIcons as app (app.name)}
                <div
                    in:receive={{ key: app.name }}
                    out:send={{ key: app.name }}
                    animate:flip
                >
                    <AppIcon {app} showLabel={false} --roundness="10px" />
                </div>
            {/each}
            {#if isFolderExpandable}
                <div class="grid_4x4" style="--gap: 4px;">
                    {#each showModalApps ? [] : smallIcons as app (app.name)}
                        <div
                            in:receive={{ key: app.name }}
                            out:send={{ key: app.name }}
                            animate:flip
                        >
                            <AppIcon
                                {app}
                                showLabel={false}
                                --roundness="4px"
                                --textcolor="#fff"
                            />
                        </div>
                    {/each}
                </div>
                <div class="novisible">
                    {#each showModalApps ? [] : restOfApps as app (app.name)}
                        <div
                            in:receive={{ key: app.name }}
                            out:send={{ key: app.name }}
                            animate:flip
                        >
                            <AppIcon
                                {app}
                                showLabel={false}
                                --roundness="4px"
                            />
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
    <p class="appLibrary__folder_label">
        {folder.name}
    </p>
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
        text-align: center;
        font-size: 10px;
        font-weight: 500;
        color: #1c1c1e;
    }
    .novisible {
        width: 0;
        height: 0;
        overflow: hidden;
    }
</style>
