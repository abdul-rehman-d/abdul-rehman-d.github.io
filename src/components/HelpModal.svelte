<script lang="ts">
  import { onMount } from "svelte";
  import type { SwiperContainer } from "swiper/element/bundle";
  import type { SwiperOptions } from "swiper/types";
  import CloseIcon from 'virtual:icons/carbon/close-filled';

  import { images } from "../theme";

  // props
  export let showModal: boolean;

  // states
  let activeIdx: number = -1;
  
  // refs
  let swiperEl: SwiperContainer;
  let dialog: HTMLDialogElement;

  // constants
  const swiperParams: SwiperOptions = {
    on: {
      activeIndexChange: (swiper) => {
        activeIdx = swiper.activeIndex;
      }
    },
    pagination: {
      enabled: true,
    },
  }

  const slides = [
    {
      title: "Grab and slide through the apps.",
      gif: images.gifs.gif01,
    },
    {
      title: "Click on the social apps to be redirected to my social links.",
      gif: images.gifs.gif02,
    },
    {
      title: "Click on other apps to interact with them.",
      gif: images.gifs.gif03,
    },
    {
      title: "Click on my project apps to get overview of project, its tech stack and its links.",
      gif: images.gifs.gif04,
    },
    {
      title: "Interact with folders.",
      gif: images.gifs.gif05,
    },
  ];

  function onClick() {
    dialog.classList.add("closinggg")
    const animation = dialog.animate([
      { transform: "scale(1)", opacity: 1, },
      { transform: "scale(0.75)", opacity: 0, },
    ], {
      duration: 500,
      easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    })
    animation.addEventListener("finish", () => {
      console.log("when meee")
      dialog.close()
      dialog.classList.remove("closinggg")
    }, { once: true })
  }

  // effects
  onMount(() => {
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  })

  $: {
    console.log("showModal", showModal)
    if (showModal) {
      activeIdx = 0;
      if (dialog) {
        dialog.showModal();
      }
    } else {
      activeIdx = -1;
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => {
    console.log("onclose trigger")
    showModal = false
  }}
	on:click|self={onClick}
>
<div>
  <div class="header">
    <h2>How to use</h2>
    <button on:click={onClick}><CloseIcon /></button>
  </div>
  <div class="slider-wrapper">
    <swiper-container init={false} bind:this={swiperEl}>
      {#each slides as slide, idx}
        <swiper-slide key={idx}>
          <div class="slide">
            <p class="slide-desc">{slide.title}</p>
            <div class="slide-gif-container">
              <video autoplay={idx===activeIdx} loop muted controls={false}>
                <source type="video/webm" src={slide.gif}>
              </video>
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
    border: none;
    border-radius: .25rem;
    padding: 0;
    flex-direction: column;
    overflow: hidden !important;
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }

  dialog[open] {
    width: 300px;
    height: 90%;
    display: flex;
    
		animation: zoom 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
      opacity: 0;
			transform: scale(0.75);
		}
		to {
      opacity: 1;
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.4s ease-out;
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
    height: 100%;
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .header button {
    outline: none;
    background-color: transparent;
    border: none;
    box-shadow: none;
    line-height: 1;
    cursor: pointer;
    color: rgb(255, 81, 81);
  }
  .header button:hover,
  .header button:focus,
  .header button:focus-visible {
    color: rgb(255, 0, 0);
  }

  .slider-wrapper {
    flex-grow: 1;
  }

  swiper-container {
    width: 100%;
    height: 100%;
  }

  .slide {
    padding: .5rem;
    display: flex;
    flex-direction: column;
    gap: .75rem;
  }
  .slide-desc {
    font-size: .85rem;
  }
  .slide-gif-container {
    flex-grow: 1;
  }
  .slide-gif-container > video {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: .25rem;
  }
</style>
