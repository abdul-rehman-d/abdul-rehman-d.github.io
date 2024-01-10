<script lang="ts">
  import frame from './assets/frame2.png';
</script>

<main>
  <div>
    <img src={frame} alt="frame" />
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #44475A;
  }
  main > div {
    padding: 1rem;
  }
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
</style>
