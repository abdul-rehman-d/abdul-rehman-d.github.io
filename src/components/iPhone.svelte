<script lang="ts">
    import frame from "../assets/frame.png";
</script>

<div class="iPhone__wrapper">
    <div class="iPhone__main">
        <img src={frame} alt="frame" class="iPhone__frame" />
        <div class="iPhone__content"></div>
    </div>
</div>

<style>
    .iPhone__wrapper {
        width: 100%;
        max-width: 300px;
        height: 100%;
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
    }
</style>
