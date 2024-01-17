<script lang="ts">
    import { type SwiperContainer } from "swiper/element/bundle";
    import { onMount } from "svelte";

    import frame from "../assets/images/frame.png";
    import Topbar from "./Topbar.svelte";

    import WidgetsCenter from "./WidgetsCenter.svelte";
    import HomeScreen from "./HomeScreen.svelte";
    import AppLibrary from "./AppLibrary.svelte";

    let swiperEl: SwiperContainer | undefined;
    let sliderContainer: HTMLDivElement | undefined;
    let sliderWidth: number | string | undefined;
    let sliderHeight: number | undefined;

    const screens = [WidgetsCenter, HomeScreen, AppLibrary];

    onMount(() => {
        if (sliderContainer !== undefined) {
            sliderHeight = sliderContainer.getBoundingClientRect().height;
            sliderWidth =
                sliderContainer.parentElement?.getBoundingClientRect().width ??
                "min(300px, calc(100vw - 2rem))";
        }

        if (swiperEl !== undefined) {
            Object.assign(swiperEl, {
                slidesPerView: "auto",
                grabCursor: true,
                speed: 700,
                effect: "creative",
                initialSlide: 1,
                parallax: true,
                creativeEffect: {
                    prespective: true,
                    prev: {
                        shadow: true,
                        translate: ["-100%", 0, 400],
                        scale: 0.5,
                    },
                    next: {
                        shadow: true,
                        translate: ["100%", 0, 400],
                        scale: 0.5,
                    },
                    shadowPerProgress: true,
                },
            });
            swiperEl.initialize();
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
                    {#each screens as Screen}
                        <swiper-slide
                            key={Screen}
                            style="height: {sliderHeight}px; width: {sliderWidth}px;"
                        >
                            <div class="screen">
                                <Screen />
                            </div>
                        </swiper-slide>
                    {/each}
                </swiper-container>
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

    .screen {
        width: 100%;
        height: 100%;

        display: flex;
    }
</style>
