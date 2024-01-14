<script>
  import IPhone from "./components/iPhone.svelte";
  import Loader from "./components/Loader.svelte";

  let loading = true;

  function onLoad() {
    loading = false;
  }
</script>

<main class="container__main">
  <div class="container__inner">
    <IPhone on:load={onLoad} --opacity={loading ? 0 : 1} />
    {#if loading}
      <Loader size={25} />
    {/if}
  </div>
</main>

<style>
  .container__main {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    background-color: #44475a;
    display: flex;
  }
  .container__inner {
    /* cover entire container, add padding and make everything center mein */
    align-self: stretch;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    padding: 1rem;

    position: relative;
  }
</style>
