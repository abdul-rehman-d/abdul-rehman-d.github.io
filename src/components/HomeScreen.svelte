<script lang="ts">
    import Dock from "./Dock.svelte";
    import Screen from "./Screen.svelte";
</script>

<div class="iPhone__homeScreen_container">
    <div class="iPhone__homeScreen_appsContainer">
        <Screen />
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
</style>
