<script lang="ts">
    export let app: TApp | undefined;
    export let showLabel: boolean = true;
</script>

{#if app}
    <div class="app_icon app_icon__size_{app.size}">
        <div class="app_icon__icon">
            {#if app.icon}
                <img src={app.icon} alt={app.name} />
            {/if}
        </div>
        {#if showLabel}
            <div class="app_icon__name">{app.name}</div>
        {/if}
    </div>
{/if}

<style>
    .app_icon {
        display: flex;
        gap: 5px;
        flex-direction: column;
        align-items: center;
    }

    .app_icon__size_2x2 {
        grid-column: span 2;
        grid-row: span 2;
    }

    .app_icon__icon {
        width: 100%;
        border-radius: var(--roundness, 15px);
        aspect-ratio: 1;
        overflow: hidden;
    }

    .app_icon__icon > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .app_icon__name {
        font-size: 10px;
        font-weight: 500;
        color: #1c1c1e;
    }
</style>
