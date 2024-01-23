<script lang="ts">
    export let app: TApp;
</script>

{#if app.external_link}
    <a href={app.external_link} target="_blank" rel="noopener noreferrer">
        <slot />
    </a>
{:else}
    <slot />
{/if}
