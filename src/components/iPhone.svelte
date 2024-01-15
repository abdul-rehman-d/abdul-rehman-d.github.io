<script lang="ts">
    import { type SwiperContainer } from "swiper/element/bundle";
    import { onMount } from "svelte";

    import frame from "../assets/images/frame.png";
    import Topbar from "./Topbar.svelte";
    import Dock from "./Dock.svelte";
    import Screen from "./Screen.svelte";

    let swiperEl: SwiperContainer | undefined;
    let sliderContainer: HTMLDivElement | undefined;
    let sliderWidth: number | string | undefined;
    let sliderHeight: number | undefined;

    const screens = ["#ff3a3030", "#ffcc0030", "#007aff30"];

    onMount(() => {
        if (swiperEl !== undefined) {
            Object.assign(swiperEl, {
                slidesPerView: "auto",
                grabCursor: true,
                effect: "creative",
                creativeEffect: {
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                },
            });
            swiperEl.initialize();
        }
        if (sliderContainer !== undefined) {
            sliderHeight = sliderContainer.getBoundingClientRect().height;
            sliderWidth =
                sliderContainer.parentElement?.getBoundingClientRect().width ??
                "min(300px, calc(100vw - 2rem))";
        }
    });
</script>

<div class="iPhone__wrapper">
    <div class="iPhone__main">
        <img src={frame} alt="frame" class="iPhone__frame" on:load />
        <div class="iPhone__content">
            <div class="iPhone__topbar">
                <Topbar />
            </div>

            <div class="iPhone__screen" bind:this={sliderContainer}>
                <swiper-container init={false} bind:this={swiperEl}>
                    {#each screens as screen}
                        <swiper-slide
                            key={screen}
                            style="height: {sliderHeight}px; width: {sliderWidth}px;"
                        >
                            <div class="screen">
                                <Screen color={screen} />
                            </div>
                        </swiper-slide>
                    {/each}
                </swiper-container>
            </div>

            <div class="iPhone__dock">
                <Dock />
            </div>
        </div>
    </div>
</div>

<style>
    .iPhone__wrapper {
        width: 100%;
        max-width: 300px;
        height: 100%;

        opacity: var(--opacity);
    }
    .iPhone__main {
        aspect-ratio: 1398 / 2840;
        position: relative;
        overflow: hidden;
    }
    .iPhone__frame {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 2;

        pointer-events: none;
    }
    .iPhone__content {
        z-index: 1;
        position: absolute;
        top: 13px;
        left: 17px;
        right: 13px;
        bottom: 13px;
        border-top-left-radius: 28px;
        border-top-right-radius: 28px;
        border-bottom-left-radius: 35px;
        border-bottom-right-radius: 35px;

        overflow: hidden;

        display: flex;
        flex-direction: column;
        align-items: stretch;

        background-image: url(../assets/wallpapers/light-6.png);
        background-size: cover;
    }
    .iPhone__topbar {
        flex-basis: 40px;
        flex-shrink: 0;

        display: flex;
    }

    .iPhone__screen {
        flex-grow: 1;
        align-self: stretch;
    }

    .iPhone__dock {
        flex-basis: 102px;

        display: flex;
    }

    .screen {
        width: 100%;
        height: 100%;

        display: flex;
    }
</style>
