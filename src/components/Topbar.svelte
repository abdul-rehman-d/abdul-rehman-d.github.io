<script lang="ts">
    import statusBarRightIcons from "../assets/icons/status-bar-right-icons.png";
</script>

<div class="iPhone__topbar">
    <p class="iPhone__topbar_time">9:41</p>
    <img
        src={statusBarRightIcons}
        alt="Status Bar Right Icons"
        class="iPhone__topbar_icons"
    />
</div>

<style>
    .iPhone__topbar {
        flex-basis: 40px;

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
    }
    .iPhone__topbar_icons {
        width: 77.5px;
        height: 13px;
        object-fit: contain;
    }
</style>
