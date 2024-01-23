<script lang="ts">
    import searchIcon from "../assets/icons/magnifyingglass.png";
    import { APP_LIBRARY_FOLDERS } from "../data/apps";
    import AppIcon from "./AppIcon.svelte";
</script>

<div class="container">
    <div class="appLibrary__searchBox">
        <img src={searchIcon} alt="search" />
        <p>App Library</p>
    </div>

    <div class="appLibrary__folders_container">
        {#each APP_LIBRARY_FOLDERS as folder, i}
            <div class="appLibrary__folder">
                <div class="appLibrary__folder_iconish">
                    <div class="appLibrary__folder_apps_container">
                        {#each folder.apps as app, i}
                            <AppIcon
                                {app}
                                showLabel={false}
                                --roundness="10px"
                            />
                        {/each}
                    </div>
                </div>
                <div class="appLibrary__folder_label">{folder.name}</div>
            </div>
        {/each}
    </div>
</div>

<style>
    .container {
        flex-grow: 1;
        align-self: stretch;

        padding: 0px 18px 12px;

        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .appLibrary__searchBox {
        background-color: #00000047;
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        padding: 8px 16px;
    }
    .appLibrary__searchBox img {
        width: 16px;
        height: 16px;

        /* change color: black */
        filter: invert(1);
    }
    .appLibrary__searchBox p {
        font-size: 14px;
        font-weight: 300;
        color: #000000;
    }

    .appLibrary__folders_container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }

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

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 8px;
    }

    .appLibrary__folder_label {
        font-size: 10px;
        font-weight: 300;
        color: #000000;
    }
</style>
