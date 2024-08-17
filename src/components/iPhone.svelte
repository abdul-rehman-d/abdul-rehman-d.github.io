<script lang="ts">
    // ****** IMPORTS ******
    import type { SwiperContainer } from "swiper/element/bundle";
    import type { SwiperOptions } from "swiper/types";
    import type { DragEventHandler, MouseEventHandler, TouchEventHandler } from "svelte/elements";
    import type { TransitionConfig } from "svelte/transition";

    import { onMount } from "svelte";
    import { cubicIn } from "svelte/easing";

    import Topbar from "./Topbar.svelte";
    import WidgetsCenter from "./WidgetsCenter.svelte";
    import HomeScreen from "./HomeScreen.svelte";
    import AppLibrary from "./AppLibrary.svelte";

    import { getTranslateString } from "../utils/formatters";
    import { images } from "../theme";
    import { store } from "../store";

    // ****** LOGIC ******
    let openedApps: TApp[] = [];
    let activeAppIdx: number = -1;

    let isTouchScreenDevice: boolean = false;

    let swiperEl: SwiperContainer | undefined;
    let recentsSlider: SwiperContainer | HTMLDivElement | undefined;
    let sliderContainer: HTMLDivElement | undefined;
    let sliderWidth: string | undefined;
    let sliderHeight: string | undefined;

    let appContainers: HTMLDivElement[] = [];
    type TouchCustom = { clientX: number, clientY: number };
    let touchStart: TouchCustom | null = null;
    let touchEnd: TouchCustom | null = null;
    let isSwipingUp: boolean = false;
    let showRecents: boolean = false;

    const THRESHOLD_FOR_DISMISSING_APP = 125;

    store.subscribe((apps) => {
        openedApps = apps;
        activeAppIdx = apps.findIndex((app) => app.open);
        if (activeAppIdx >= 0 && appContainers[activeAppIdx]) {
            appContainers[activeAppIdx].style.transform = "scale(1)";
        }
        console.log("openedApps", openedApps);
        console.log("activeAppIdx", activeAppIdx);
    });

    type TransitionParams = { duration: number } | undefined;

    function scaleIn(_: Element, params: TransitionParams): TransitionConfig {
        const duration = params?.duration;
        return {
            duration,
            css: (t) => {
                const eased = cubicIn(t);
                return `
transform: scale(${eased});
border-radius: ${100 - eased * 100}px;`;
            },
        };
    }
    function scaleOut(
        node: Element,
        params: TransitionParams,
    ): TransitionConfig {
        const duration = params?.duration;
        // @ts-ignore
        const initialTransform: CSSTransformValue = node
            .computedStyleMap()
            .get("transform");
        let initialScaleValue: number = 1;
        if (initialTransform.length) {
            const initialScale = initialTransform[0].toString();
            if (initialScale.startsWith("scale(")) {
                initialScaleValue =
                    parseFloat(initialScale.substring(6).split(", ")[0]) ?? 1;
            }
        }
        return {
            duration,
            css: (t) => {
                const eased = cubicIn(t);
                return `
transform: scale(${initialScaleValue * eased});
border-radius: ${100 - eased * 100}px;`;
            },
        };
    }

    const handleDragStart = (touch: TouchCustom) => {
        const bottom =
            appContainers[activeAppIdx]?.getBoundingClientRect()?.bottom ??
            0;
        console.log(bottom - (touch.clientY ?? 0));
        if (bottom - (touch.clientY ?? 0) < 24) {
            touchStart = {
                clientX: touch.clientX,
                clientY: touch.clientY,
            };
        }
    }

    const handleDragEnd = () => {
        if (touchStart === null || touchEnd === null) {
            console.log("why is touchstart null????");
            return;
        }

        console.log("x", touchStart.clientX, touchEnd?.clientX);
        console.log("y", touchStart.clientY, touchEnd?.clientY);

        console.log(
            "1",
            touchEnd?.clientY - touchStart.clientY <
                -1 * THRESHOLD_FOR_DISMISSING_APP,
        );
        console.log("2", isSwipingUp);

        const hasCrossedThreshold =
            touchEnd?.clientY - touchStart.clientY <
            -1 * THRESHOLD_FOR_DISMISSING_APP;

        if (hasCrossedThreshold && isSwipingUp) {
            if (appContainers[activeAppIdx]) {
                console.log("putting all in bg");
                appContainers[activeAppIdx].style.transform = "scale(0)";
                store.putAllAppsInBG();
            }
        } else {
            if (hasCrossedThreshold && !isSwipingUp) {
                console.log("show recents");
                appContainers.forEach((appContainer, index) => {
                    appContainer.style.transform = "";
                    // if (!sliderWidth) return
                    // appContainer.style.transform = `scale(0.75) translateX(
                    //     calc(${sliderWidth} * 0.75 * ${-index})
                    // )`
                });
                // showRecents = true;
            } else if (appContainers[activeAppIdx]) {
                appContainers[activeAppIdx].style.transform = "scale(1)";
            }
        }
        touchStart = null;
        touchEnd = null;
    }

    const handleDragMove = (touch: TouchCustom) => {
        if (touchStart === null) {
            console.log("why is touchstart null????");
            return;
        }

        const lastTouch = touchEnd || touchStart;

        if (!isSwipingUp) {
            if (touch?.clientY - lastTouch?.clientY < -1) {
                isSwipingUp = true;
            }
        } else {
            if (touch?.clientY - lastTouch?.clientY > -1) {
                isSwipingUp = false;
            }
        }
        if (appContainers[activeAppIdx]) {
            appContainers[activeAppIdx].style.transform = `scale(${
                touch?.clientY / touchStart?.clientY
            })`;
        }

        touchEnd = {
            clientX: touch.clientX,
            clientY: touch.clientY,
        };
    }

    const onTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
        if (
            e.touches.length === e.targetTouches.length &&
            e.touches.length === 1
        ) {
            handleDragStart({
                clientX: e.touches.item(0)?.clientX!,
                clientY: e.touches.item(0)?.clientY!,
            });
        } else {
            console.log("why is touches length not 1?????");
        }
    };

    const onTouchEnd: TouchEventHandler<HTMLDivElement> = () => {
        handleDragEnd();
    };

    const onTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
        if (
            e.touches.length !== e.targetTouches.length ||
            e.touches.length !== 1
        ) {
            console.log("why is touches length not 1?????");
            return;
        }

        handleDragMove({
            clientX: e.touches.item(0)?.clientX!,
            clientY: e.touches.item(0)?.clientY!,
        });
    };

    const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
        handleDragStart({
            clientX: e.clientX,
            clientY: e.clientY,
        });
    };

    const onMouseUp: MouseEventHandler<HTMLDivElement> = () => {
        handleDragEnd()
    };

    const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
        handleDragMove({
            clientX: e.clientX,
            clientY: e.clientY,
        });
    };

    $: style = `height: ${sliderHeight}; width: ${sliderWidth}; transition-property: filter, transform, opacity, height, translate;`;
    $: {
        console.log("activeAppIdx", activeAppIdx);
    }
    $: isAnyAppActive = activeAppIdx !== -1;

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
                // const blurOnSides = `blur(${Math.abs(progress - 0.5) * 5}px)`;

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

                // swiper.slides[2].style.backdropFilter = blurOnSides;
                // swiper.slides[0].style.backdropFilter = blurOnSides;
            },
        },
    };

    const opts2: SwiperOptions = {
        slidesPerView: 1,
        grabCursor: true,
        speed: 300,
        initialSlide: 1,
        touchReleaseOnEdges: true,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0,
        },
        on: {
            progress(swiper, progress) {
                swiper.slides.forEach((slide, index) => {
                    const transformX = `calc(${sliderWidth} * 0.75 * ${index})`;
                    slide.style.transform = `translateX(${transformX})`;
                });
            },
        },
    };

    onMount(() => {
        if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0)) {
            isTouchScreenDevice = true;
        }
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

    $: {
        if (recentsSlider !== undefined) {
            Object.assign(recentsSlider, opts2);
            if ("initialize" in recentsSlider) {
                recentsSlider.initialize();
            }
        }
    }
</script>

<div class="iPhone__wrapper">
    <div class="iPhone__main">
        <img src={images.frame} alt="frame" class="iPhone__frame" on:load />
        <div class="iPhone__content">
            <div class="iPhone__topbar">
                <Topbar />
            </div>

            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="iPhone__screen"
                bind:this={sliderContainer}
                on:touchstart={onTouchStart}
                on:touchmove={touchStart ? onTouchMove : undefined}
                on:touchend={touchStart ? onTouchEnd : undefined}
                on:mousedown={isTouchScreenDevice ? ()=>{} : onMouseDown}
                on:mousemove={isTouchScreenDevice || !touchStart  ? ()=>{} : onMouseMove}
                on:mouseup={isTouchScreenDevice || !touchStart ? ()=>{} : onMouseUp}
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
                <div
                    class="app-container"
                    class:active={isAnyAppActive}
                    class:recents={showRecents}
                >
                    <svelte:element
                        this={showRecents ? "swiper-container" : "div"}
                        init={false}
                        bind:this={recentsSlider}
                        class:recents-apps-slider={showRecents}
                    >
                        {#each openedApps as app, appIdx (`opened-app-${appIdx}`)}
                            <svelte:element
                                this={showRecents ? "swiper-slide" : "div"}
                                {style}
                                class:app-inner-wrapper={showRecents}
                            >
                                <div
                                    class="app-inner-container"
                                    class:active={activeAppIdx === appIdx}
                                    class:recents={showRecents}
                                    in:scaleIn={{ duration: 300 }}
                                    out:scaleOut={{ duration: 300 }}
                                    bind:this={appContainers[appIdx]}
                                >
                                    <svelte:component
                                        this={app.Component}
                                    />
                                </div>
                                {#if activeAppIdx === appIdx}
                                    <div class="app-after-container">
                                        <div class="app-after" class:light={app.topbarTheme==="light"}></div>
                                    </div>
                                {/if}
                            </svelte:element>
                        {/each}
                    </svelte:element>
                </div>
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
        pointer-events: none;
    }
    .app-container.recents {
        backdrop-filter: blur(5px);
        pointer-events: auto;
    }
    .app-container.active {
        pointer-events: auto;
    }
    .app-container swiper-container {
        width: 100%;
        height: 100%;
    }
    .app-inner-wrapper {
        transform: scale(0.7);
        scale: 0.7;
    }
    .recents-apps-slider {
    }
    .app-inner-container {
        position: absolute;
        inset: 0;
        display: flex;
        width: 100%;
        border-radius: 28px;
        background-color: black;
        transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
        transform: scale(0);
    }
    .app-inner-container.active {
        transform: scale(1);
    }
    .app-inner-container.recents {
        position: relative;
        transform: scale(1);
        padding-bottom: 0;
        pointer-events: none;
        aspect-ratio: 270 / 540;
    }
    .app-after-container {
        position: absolute;
        height: 1rem;
        width: 100%;
        bottom: 0;
        cursor: grab;
    }
    .app-after {
        position: absolute;
        height: 0.25rem;
        width: 50%;
        bottom: 0.5rem;
        left: 25%;
        background-color: #000;
        border-radius: 5px;
    }
    .app-after.light {
        background-color: #fff;
    }
    .app-inner-container.recents::after {
        display: none;
    }
</style>
