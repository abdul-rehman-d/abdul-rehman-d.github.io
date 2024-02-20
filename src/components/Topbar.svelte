<script lang="ts">
    import statusBarRightIcons from "../assets/icons/status-bar-right-icons.png";
    import { store } from "../store";

    let isAnyOpenOpened: boolean = false;

    store.subscribe((apps) => {
        isAnyOpenOpened = apps.findIndex((app) => app.open) > -1;
    });
</script>

<div class="iPhone__topbar">
    <p class="iPhone__topbar_time" class:iPhone__topbar_time_light={isAnyOpenOpened}>
        9:41
    </p>
    <img
        src={statusBarRightIcons}
        alt="Status Bar Right Icons"
        class="iPhone__topbar_icons"
    />
</div>

<style>
    .iPhone__topbar {
        flex-grow: 1;
        align-self: stretch;

        display: flex;
        align-items: center;
        gap: 100px;
        padding-inline: 15px;
    }
    .iPhone__topbar > * {
        flex: 1;
    }
    .iPhone__topbar_time {
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        transition: color 300ms ease-in-out;
    }
    .iPhone__topbar_time_light {
        color: white;
    }
    .iPhone__topbar_icons {
        width: 77.5px;
        height: 13px;
        object-fit: contain;
    }
</style>
