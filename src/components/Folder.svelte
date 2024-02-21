<script lang="ts">
    import AppIcon from "./AppIcon/AppIcon.svelte";

    import { quintOut } from "svelte/easing";
    import { crossfade, fade } from "svelte/transition";
    import { flip } from "svelte/animate";

    export let folder: TFolder;

    let showModalContainer: boolean = false;
    let showModalApps: boolean = false;

    $: isFolderExpandable = folder.apps.length > 4;

    $: bigIcons = isFolderExpandable ? folder.apps.slice(0, 3) : folder.apps;
    $: smallIcons = isFolderExpandable ? folder.apps.slice(3, 7) : [];
    $: restOfApps = folder.apps.length > 7 ? folder.apps.slice(7) : [];

    const [send, receive] = crossfade({
        fallback(node, params) {
            const style = getComputedStyle(node);
            const transform = style.transform === "none" ? "" : style.transform;

            return {
                duration: 500,
                easing: quintOut,
                css: (t) => `
transform: ${transform} scale(${t});
opacity: ${t}`,
            };
        },
    });

    function toggleFolderExpansion() {
        if (!isFolderExpandable) {
            console.log("no expand");
            return;
        }
        console.log("yes expand");
        showModalContainer = !showModalContainer;
    }

    function toggleAppAnimation() {
        if (showModalApps) {
            setTimeout(() => {
                showModalContainer = false;
            }, 100);
        }
        showModalApps = !showModalApps;
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

{#if showModalContainer}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="appLibrary__folder_expanded"
        transition:fade={{ duration: 100 }}
        on:click={toggleAppAnimation}
        on:introend={toggleAppAnimation}
    >
        <div class="appLibrary__folder_expanded__grid">
            {#each showModalApps ? folder.apps : [] as app (app.name)}
                <div
                    in:receive={{ key: app.name }}
                    out:send={{ key: app.name }}
                    animate:flip
                >
                    <AppIcon {app} --roundness="10px" />
                </div>
            {/each}
        </div>
        <div class="blurrr"></div>
    </div>
{/if}

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
        font-weight: 300;
        color: #000000;
    }
    .novisible {
        width: 0;
        height: 0;
        overflow: hidden;
    }
    .appLibrary__folder_expanded {
        position: absolute;

        bottom: 0;
        left: 0;
        right: 0;
        top: 0;

        display: flex;
        align-items: center;

        padding: 24px;
    }
    .appLibrary__folder_expanded__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        z-index: 1;
    }
    .appLibrary__folder_expanded__grid > * {
        overflow: hidden;
    }
</style>
