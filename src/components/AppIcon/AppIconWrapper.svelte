<script lang="ts">
    import { store } from "../../store";
    export let app: TApp;
</script>

{#if app.external_link}
    <a href={app.external_link} target="_blank" rel="noopener noreferrer">
        <slot />
    </a>
{:else if app.Component}
    <button on:click={() => store.openApp(app)}>
        <slot />
    </button>
{:else}
    <slot />
{/if}

<style>
    button {
        border: none;
        outline: none;
        background-color: transparent;
        padding: 0;
        margin: 0;
    }
    button:focus,
    button:focus-within,
    button:focus-visible {
        border: none;
        outline: none;
        background-color: transparent;
        padding: 0;
        margin: 0;
    }
</style>
