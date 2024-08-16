<script lang="ts">
    import { store } from "../store";
    import BatteryIcon from 'virtual:icons/heroicons/battery-100-solid';
    import WifiIcon from 'virtual:icons/material-symbols/wifi-sharp';
    import BarsIcon from 'virtual:icons/ant-design/signal-filled';

    let isLightTheme: boolean = false;

    store.subscribe((apps) => {
        isLightTheme = apps.find((app) => app.open)?.topbarTheme === 'light';
    });
</script>

<div class="iPhone__topbar" class:iPhone__topbar_light={isLightTheme}>
    <p class="iPhone__topbar_time">
        9:41
    </p>
    <div class="iPhone__topbar_icons">
        <BarsIcon width="1em" height="1em" />
        <WifiIcon width="1.1em" height="1.1em" />
        <BatteryIcon width="1.3em" height="1.3em" />
    </div>
</div>

<style>
    .iPhone__topbar {
        flex-grow: 1;
        align-self: stretch;

        display: flex;
        align-items: center;
        gap: 100px;
        padding-inline: 15px;

        color: black;
    }
    .iPhone__topbar > * {
        flex: 1;
        transition: color 300ms ease-in-out;
    }
    .iPhone__topbar_light > * {
        color: white;
    }
    .iPhone__topbar_time {
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        /* transition: color 300ms ease-in-out; */
    }
    .iPhone__topbar_icons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(1.2em + 1em + 1.2em + .5em);
    }
</style>
