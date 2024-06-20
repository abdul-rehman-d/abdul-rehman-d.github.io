<script lang="ts">
    export let size = 50;
</script>

<div class="loader" style="--size: {size}px">
    <div class="segment"></div>
    <div class="segment"></div>
    <div class="segment"></div>
    <div class="segment"></div>
    <div class="segment"></div>
    <div class="segment"></div>
    <div class="segment"></div>
    <div class="segment"></div>
    <div class="segment"></div>
    <div class="segment"></div>
    <div class="segment"></div>
    <div class="segment"></div>
</div>

<style>
    .loader {
        position: absolute;

        top: calc(50% - (var(--size) / 2));
        left: calc(50% - (var(--size) / 2));

        width: var(--size);
        height: var(--size);
    }

    .segment {
        position: absolute;
        left: 22px;
        left: calc(var(--size) / 2.2);
        height: calc(var(--size) * 0.3);
        width: calc(var(--size) / 9);
        background-color: rgba(234, 234, 234, 0.3);
        border-radius: calc(var(--size) / 6);
        -webkit-transform-origin-y: 170%;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-name: throbber;
    }

    .segment:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: 0ms;
    }
    .segment:nth-child(2) {
        transform: rotate(30deg);
        animation-delay: 125ms;
    }
    .segment:nth-child(3) {
        transform: rotate(60deg);
        animation-delay: 250ms;
    }
    .segment:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: 375ms;
    }
    .segment:nth-child(5) {
        transform: rotate(120deg);
        animation-delay: 500ms;
    }
    .segment:nth-child(6) {
        transform: rotate(150deg);
        animation-delay: 625ms;
    }
    .segment:nth-child(7) {
        transform: rotate(180deg);
        animation-delay: 750ms;
    }
    .segment:nth-child(8) {
        transform: rotate(210deg);
        animation-delay: 875ms;
    }
    .segment:nth-child(9) {
        transform: rotate(240deg);
        animation-delay: 1000ms;
    }
    .segment:nth-child(10) {
        transform: rotate(270deg);
        animation-delay: 1125ms;
    }
    .segment:nth-child(11) {
        transform: rotate(300deg);
        animation-delay: 1250ms;
    }
    .segment:nth-child(12) {
        transform: rotate(330deg);
        animation-delay: 1375ms;
    }

    @keyframes throbber {
        0% {
            background-color: #808080;
        }
        100% {
            background-color: white;
        }
    }
</style>
