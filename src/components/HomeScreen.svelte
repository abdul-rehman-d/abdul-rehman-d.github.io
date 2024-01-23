<script lang="ts">
    import profile from "../assets/images/profile.jpg";
    import location from "../assets/images/location.png";
    import facebook from "../assets/icons/facebook.png";
    import appleWallet from "../assets/icons/apple-wallet.png";
    import photos from "../assets/icons/photos.png";

    import Dock from "./Dock.svelte";
    import AppIcon from "./AppIcon.svelte";

    let apps: TApp[] = [
        {
            icon: profile,
            name: "Abdul Rehman",
            size: "2x2",
        },
        {
            icon: location,
            name: "Maps",
            size: "2x2",
        },
        {
            icon: photos,
            name: "Photos",
            size: "1x1",
        },
        {
            icon: appleWallet,
            name: "Wallet",
            size: "1x1",
        },
        {
            icon: facebook,
            name: "Facebook",
            size: "1x1",
        },
    ];
</script>

<div class="iPhone__homeScreen_container">
    <div class="iPhone__homeScreen_appsContainer">
        <div class="iPhone__homeScreen__apps_container">
            {#each apps as app}
                <AppIcon {app} />
            {/each}
        </div>
    </div>
    <div class="iPhone__dock">
        <Dock />
    </div>
</div>

<style>
    .iPhone__homeScreen_container {
        flex-grow: 1;
        align-self: stretch;

        display: flex;
        flex-direction: column;
    }

    .iPhone__homeScreen_appsContainer {
        flex-grow: 1;
        align-self: stretch;
    }

    .iPhone__dock {
        flex-basis: 102px;
        flex-shrink: 0;
        align-self: stretch;

        display: flex;
    }

    .iPhone__homeScreen__apps_container {
        padding: 12px 24px;

        flex-grow: 1;
        height: fit-content;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    }
</style>
