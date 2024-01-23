<script lang="ts">
    import phone from "../assets/icons/phone.png";
    import messages from "../assets/icons/messages.png";

    import AppIcon from "./AppIcon.svelte";

    let apps: TApp[] = [
        {
            icon: phone,
            name: "Phone",
            size: "1x1",
        },
        {
            icon: messages,
            name: "Messages",
            size: "1x1",
        },
    ];
</script>

<div class="iPhone__dock">
    <div class="iPhone__dock__floating_dock">
        {#each apps as app}
            <AppIcon showLabel={false} {app} />
        {/each}
    </div>
</div>

<style>
    .iPhone__dock {
        flex-grow: 1;
        align-self: stretch;

        padding: 12px;
    }

    .iPhone__dock__floating_dock {
        background-color: #f5f5f532;
        border-radius: 30px;

        display: grid;
        grid-template-columns: repeat(auto-fit, 46px);
        gap: 10px;
        justify-content: center;

        padding: 16px;
    }
</style>
