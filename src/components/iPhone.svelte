<script lang="ts">
    // ****** IMPORTS ******
    import type { SwiperContainer } from "swiper/element/bundle";
    import type { SwiperOptions } from "swiper/types";

    import { onMount } from "svelte";

    import Topbar from "./Topbar.svelte";
    import WidgetsCenter from "./WidgetsCenter.svelte";
    import HomeScreen from "./HomeScreen.svelte";
    import AppLibrary from "./AppLibrary.svelte";

    import { getTranslateString } from "../utils/formatters";
    import { images } from "../theme";

    // ****** LOGIC ******
    let swiperEl: SwiperContainer | undefined;
    let sliderContainer: HTMLDivElement | undefined;
    let sliderWidth: string | undefined;
    let sliderHeight: string | undefined;

    $: style = `height: ${sliderHeight}; width: ${sliderWidth}; transition-property: filter, transform, opacity, height, translate;`;

    const screens = [
        { Component: WidgetsCenter, key: "widgets" },
        { Component: HomeScreen, key: "home" },
        { Component: AppLibrary, key: "app-lib" },
    ];

    const opts: SwiperOptions = {
        slidesPerView: "auto",
        grabCursor: true,
        speed: 700,
        initialSlide: 1,
        touchReleaseOnEdges: true,
        effect: "creative",
        on: {
            progress(swiper, progress) {
                const blurOnHome = `blur(${Math.abs(progress - 0.5) * 30}px)`;
                const blurOnSides = `blur(${Math.abs(progress - 0.5) * 5}px)`;

                swiper.slides[1].style.filter = blurOnHome;

                let homeScreenTranslate = {
                    x: "0px",
                    y: "0px",
                    z: `-${Math.abs(progress - 0.5) * 200}px`,
                };
                let widgetCenterTranslate = {
                    x: `-${(progress / 0.5) * 100}%`,
                    y: "0px",
                    z: "0px",
                };
                let appLibraryTranslate = {
                    x: `${((1 - progress) / 0.5) * 100}%`,
                    y: "0px",
                    z: "0px",
                };

                swiper.slides[0].style.translate = getTranslateString(
                    widgetCenterTranslate,
                );
                swiper.slides[1].style.translate =
                    getTranslateString(homeScreenTranslate);
                swiper.slides[2].style.translate =
                    getTranslateString(appLibraryTranslate);

                swiper.slides[2].style.backdropFilter = blurOnSides;
                swiper.slides[0].style.backdropFilter = blurOnSides;
            },
        },
    };

    onMount(() => {
        if (sliderContainer !== undefined) {
            const height = sliderContainer.getBoundingClientRect().height;
            const width =
                sliderContainer.parentElement?.getBoundingClientRect()?.width;
            sliderHeight = `${height}px`;
            sliderWidth = width
                ? `${width}px`
                : "min(300px, calc(100vw - 2rem))";
        }

        if (swiperEl !== undefined) {
            Object.assign(swiperEl, opts);
            swiperEl.initialize();
        }
    });
</script>

<div class="iPhone__wrapper">
    <div class="iPhone__main">
        <img src={images.frame} alt="frame" class="iPhone__frame" on:load />
        <div class="iPhone__content">
            <div class="iPhone__topbar">
                <Topbar />
            </div>

            <div class="iPhone__screen" bind:this={sliderContainer}>
                <swiper-container init={false} bind:this={swiperEl}>
                    {#each screens as { Component, key }, i}
                        <swiper-slide {key} {style}>
                            <div class="screen">
                                <Component />
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

        user-select: none;
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

        background-image: url(../assets/wallpapers/light-12.png);
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
