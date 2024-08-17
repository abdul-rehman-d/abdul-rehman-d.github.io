<div class="app__wrapper">
    <div class="topbarspacer" />
    <slot />
</div>

<style>
    .app__wrapper {
        flex-grow: 1;
        max-width: 100%;

        padding-bottom: 1rem;

        display: flex;
        flex-direction: column;

        background-color: var(--bg-color, #fff);
        color: var(--color, #000);
    }

    .topbarspacer {
        flex-basis: 40px;
    }
</style>