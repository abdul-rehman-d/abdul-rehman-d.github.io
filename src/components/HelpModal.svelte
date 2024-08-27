<script lang="ts">
  import AppLibrary from "./AppLibrary.svelte";

  export let showModal: boolean;

  let dialog: HTMLDialogElement;

  const slides = [
    {
      title: "",
      gif: "",
    },
  ];

  $: {
    console.log("showModal", showModal)
    if (dialog && showModal) dialog.showModal();
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
<div>
  <h2>How to use</h2>
  <div class="slider-wrapper">
    <swiper-container pagination="enabled">
      {#each slides as slide, idx}
        <swiper-slide key={idx}>
          <div class="slide">
            <p class="slide-desc">{slide.title}</p>
            <div class="slide-gif-container">
              <img src={slide.gif} alt={slide.title}>
            </div>
          </div>
        </swiper-slide>
      {/each}
    </swiper-container>
  </div>
</div>
</dialog>

<style>
  dialog {
    width: 300px;
    height: 90%;
    border: none;
    border-radius: .25rem;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }

  dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

  dialog > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: antiquewhite;
    height: 100%;
  }

  .slider-wrapper {
    flex-grow: 1;
    background-color: #eee;  
  }

  swiper-container {
    background-color: #fff;
    width: 100%;
    height: 100%;
  }
</style>
