<script>
    import "swiper/css";
    // import function to register Swiper custom elements
    import { register } from "swiper/element/bundle";
    // register Swiper custom elements
    register();
    import frame from "../assets/frame.png";

    function onBottomClick() {
        console.log("button click");
    }
</script>

<div class="iPhone__wrapper">
    <div class="iPhone__main">
        <img src={frame} alt="frame" class="iPhone__frame" on:load />
        <div class="iPhone__content">
            <div class="iPhone__screen">
                <swiper-container
                    slides-per-view="auto"
                    speed={500}
                    loop={true}
                >
                    <swiper-slide>
                        <div class="screen red"></div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="screen yellow"></div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="screen blue"></div>
                    </swiper-slide>
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
        background-color: #21222c;
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
    }

    .iPhone__screen {
        flex-grow: 1;
        align-self: stretch;

        /* display: grid;
        place-items: center; */
    }

    .screen {
        width: min(300px, calc(100vw - 2rem));
        aspect-ratio: 1398 / 2840;
    }
    .red {
        background-color: red;
    }
    .yellow {
        background-color: yellow;
    }
    .blue {
        background-color: blue;
    }
</style>
