<script>
    import IPhone from "./components/iPhone.svelte";
</script>


<main class="container__main">
  <div class="container__inner">
    <IPhone />
  </div>
</main>

<style>
  .container__main {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    background-color: #44475A;
    display: flex;
  }
  .container__inner {
    /* cover entire container, add padding and make everything center mein */
    align-self: stretch;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
</style>
