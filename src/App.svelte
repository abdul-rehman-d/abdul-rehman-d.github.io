<script lang="ts">
  import "swiper/css";
  import { register } from "swiper/element/bundle";
  register();

  import IPhone from "./components/iPhone.svelte";
  import Loader from "./components/Loader.svelte";
  import HelpModal from "./components/HelpModal.svelte";

  let loading = true;
  let showHelpModal: boolean = false;

  function openModal() {
    console.log("opening modal")
    showHelpModal = true;
  }

  function onLoad() {
    loading = false;
  }
</script>

<main class="container__main">
  <div class="container__inner">
    <IPhone on:load={onLoad} --opacity={loading ? 0 : 1} />
    {#if loading}
      <Loader />
    {/if}
  </div>
</main>
<button on:click={openModal}>How to use</button>
<HelpModal bind:showModal={showHelpModal} />

<style>
  .container__main {
    width: 100vw;
    height: 100svh;
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

  @media (max-width: 540px) {
    .container__main {
      padding-top: 2rem;
    }
  }

  button {
    position: absolute;
    top: .5rem;
    right: .5rem;
    font-size: 1rem;
    border-radius: .25rem;
    background-color: #000;
    color: #fff;
    padding: .25rem 1rem;
    outline: none;
    border: none;
    box-shadow: none;

    cursor: pointer;
  }
</style>

