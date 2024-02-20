<script lang="ts">
    // ****** IMPORTS ******
    import type { SwiperContainer } from "swiper/element/bundle";
    import type { SwiperOptions } from "swiper/types";
    import type { TouchEventHandler } from "svelte/elements";
    import type { TransitionConfig } from "svelte/transition";

    import { SvelteComponent, onMount } from "svelte";
    import { cubicIn } from "svelte/easing";

    import Topbar from "./Topbar.svelte";
    import WidgetsCenter from "./WidgetsCenter.svelte";
    import HomeScreen from "./HomeScreen.svelte";
    import AppLibrary from "./AppLibrary.svelte";

    import { getTranslateString } from "../utils/formatters";
    import { images } from "../theme";
    import { store } from "../store";

    // ****** LOGIC ******
    let OpenedApp: typeof SvelteComponent | undefined | null;

    let swiperEl: SwiperContainer | undefined;
    let sliderContainer: HTMLDivElement | undefined;
    let sliderWidth: string | undefined;
    let sliderHeight: string | undefined;

    let touchStart: Touch | null = null;
    let touchEnd: Touch | null = null;

    store.subscribe((apps) => {
        OpenedApp = apps.find((app) => app.open)?.Component;
    });

    type TransitionParams = { duration: number; } | undefined;

    function scale(_: Element, params: TransitionParams): TransitionConfig {
        const duration = params?.duration;
        return {
            duration,
            css: (t) => {
                const eased = cubicIn(t);
                return `
transform: scale(${eased});
border-radius: ${100 - (eased * 100)}px;`;
            },
        };
    }

    const onTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
        if (
            e.touches.length === e.targetTouches.length &&
            e.touches.length === 1
        ) {
            touchStart = e.touches.item(0);
        } else {
            console.log("why is touches length not 1?????");
        }
    };

    const onTouchEnd: TouchEventHandler<HTMLDivElement> = () => {
        if (touchStart === null || touchEnd === null) {
            console.log("why is touchstart null????");
            return;
        }

        if (!OpenedApp) {
            return;
        }

        console.log("x", touchStart.clientX, touchEnd?.clientX);
        console.log("y", touchStart.clientY, touchEnd?.clientY);

        if (touchEnd?.clientY - touchStart.clientY < -100) {
            console.log("putting all in bg");
            store.putAllAppsInBG();
        }
    };

    const onTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
        if (
            e.touches.length !== e.targetTouches.length ||
            e.touches.length !== 1
        ) {
            console.log("why is touches length not 1?????");
            return;
        }

        if (touchStart === null) {
            console.log("why is touchstart null????");
            return;
        }

        touchEnd = e.touches.item(e.touches.length - 1);
    };

    $: style = `height: ${sliderHeight}; width: ${sliderWidth}; transition-property: filter, transform, opacity, height, translate;`;

    const screens = [
        { Component: WidgetsCenter, key: "widgets" },
        { Component: HomeScreen, key: "home" },
        { Component: AppLibrary, key: "app-lib" },
    ];

    const opts: SwiperOptions = {
        slidesPerView: "auto",
        grabCursor: true,
        speed: 300,
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

            <div
                class="iPhone__screen"
                bind:this={sliderContainer}
                on:touchstart={onTouchStart}
                on:touchmove={onTouchMove}
                on:touchend={onTouchEnd}
            >
                <swiper-container init={false} bind:this={swiperEl}>
                    {#each screens as { Component, key }}
                        <swiper-slide {key} {style}>
                            <div class="screen">
                                <Component />
                            </div>
                        </swiper-slide>
                    {/each}
                </swiper-container>
                {#if OpenedApp}
                    <div
                        class="app-container"
                        transition:scale={{ duration: 300 }}
                    >
                        <svelte:component this={OpenedApp} />
                    </div>
                {/if}
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

        z-index: 11;
    }

    .iPhone__screen {
        flex-grow: 1;
        align-self: stretch;
        /* position: relative; */
    }

    .screen {
        width: 100%;
        height: 100%;

        display: flex;
    }
    .app-container {
        position: absolute;
        inset: 0;
        display: flex;
        z-index: 10;
        overflow: hidden;
    }
</style>
