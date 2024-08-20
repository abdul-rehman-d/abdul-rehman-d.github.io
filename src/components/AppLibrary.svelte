<script lang="ts">
    import searchIcon from "../assets/icons/magnifyingglass.png";
    import SearchIcon from 'virtual:icons/tabler/search';
    import { APP_LIBRARY_FOLDERS } from "../data/apps";
    import Folder from "./Folder.svelte";
    import AppIcon from "./AppIcon/AppIcon.svelte";

    import { quintOut } from "svelte/easing";
    import { crossfade, fade } from "svelte/transition";
    import { flip } from "svelte/animate";

    let showModalContainer: boolean = false;
    let showModalApps: boolean = false;
    let modalFolder: TFolder | null = null;

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

    function onFolderOpen(e: CustomEvent<{ folder: TFolder }>) {
        console.log("isfolder", e.detail.folder)
        modalFolder = e.detail.folder;
        showModalContainer = true;
    }

    function toggleAppAnimation() {
        if (showModalApps) {
            setTimeout(() => {
                showModalContainer = false;
                modalFolder = null;
            }, 100);
        }
        showModalApps = !showModalApps;
    }
</script>

<div class="container" class:blur={showModalContainer}>
    <div class="appLibrary__searchBox">
        <SearchIcon />
        <p>App Library</p>
    </div>

    <div class="appLibrary__folders_container">
        {#each APP_LIBRARY_FOLDERS as folder, i}
            <Folder
                {folder}
                on:folderOpen={onFolderOpen}
                showModalApps={showModalApps && folder.name === modalFolder?.name}
                {receive}
                {send}
            />
        {/each}
    </div>
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
        {#if showModalApps && modalFolder}
            <h2>{modalFolder.name}</h2>
        {/if}
        <div class="appLibrary__folder_expanded__grid">
            {#each (showModalApps && modalFolder) ? modalFolder?.apps : [] as app (app.name)}
                <div
                    in:receive={{ key: app.name }}
                    out:send={{ key: app.name }}
                    animate:flip
                    class="appLibrary__folder_expanded__grid_folder"
                >
                    <AppIcon {app} --roundness="10px" />
                </div>
            {/each}
        </div>
    </div>
{/if}

<style>
    .container {
        flex-grow: 1;
        align-self: stretch;

        padding: 0px 18px 12px;

        display: flex;
        flex-direction: column;
        gap: 12px;

        transition: all 500ms ease-in-out;
    }
    .container.blur {
        filter: blur(8px);
    }
    .appLibrary__searchBox {
        background-color: #00000047;
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        padding: 8px 16px;
        color: #333;
    }
    .appLibrary__searchBox p {
        font-size: 14px;
        font-weight: 400;
    }

    .appLibrary__folders_container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }


    .appLibrary__folder_expanded {
        position: absolute;

        bottom: 0;
        left: 0;
        right: 0;
        top: 0;

        display: flex;
        flex-direction: column;
        gap: 1rem;
        /* align-items: center; */
        justify-content: center;

        padding: 24px;
        background: rgba(255, 255, 255, .1);

        z-index: 0;
    }
    .appLibrary__folder_expanded h2 {
        transition: all 500ms ease-in-out;
        font-size: 1.5rem;
    }
    .appLibrary__folder_expanded__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        z-index: 2;
    }
    .appLibrary__folder_expanded__grid_folder {
        /* box-shadow: 0 4px px rgba(0, 0, 0, 0.1); */
        /* background-color: rgba(255, 255, 255, .25); */
    }
    .appLibrary__folder_expanded__grid > * {
        overflow: hidden;
    }
</style>
