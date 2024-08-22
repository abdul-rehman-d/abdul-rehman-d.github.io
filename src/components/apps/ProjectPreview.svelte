<script lang="ts">
  import { onMount } from "svelte";
  import { icons } from "../../theme";
  import AnchorIconButton from "../AnchorIconButton.svelte";
  import SafeAreaView from "../SafeAreaView.svelte";
  import type { UIEventHandler } from "svelte/elements";

  import ArrowRight from 'virtual:icons/material-symbols/arrow-right-alt';
  import ArrowLeft from 'virtual:icons/material-symbols/arrow-left-alt';
  import { hexToRGB } from "../../utils/formatters";

  export let app: TApp;

  let technologiesContainer: HTMLDivElement;
  let showScrollBar: boolean = false;
  let showLeft: boolean = false;
  let showRight: boolean = false;
  
  if (!app.project_details) throw new Error("why did this happen?");
  
  function scrollTechnologiesContainer(dir: "left"|"right") {
    switch (dir) {
      case "left":
        technologiesContainer.scrollBy({
          left: -56*2,
          behavior: "smooth",
        })
        break;
      case "right":
        technologiesContainer.scrollBy({
          left: 56*2,
          behavior: "smooth",
        })
        break;
      default:
        break;
    }
  }

  const onScroll: UIEventHandler<HTMLDivElement> = (e) => {
    if (!showScrollBar) return

    if (!showLeft && technologiesContainer.scrollLeft > 0) {
      showLeft = true;
    }
    if (showLeft && technologiesContainer.scrollLeft === 0) {
      showLeft = false;
    }
    const scrolledWidth = technologiesContainer.scrollLeft + technologiesContainer.clientWidth;
    if (showRight && scrolledWidth === technologiesContainer.scrollWidth) {
      showRight = false;
    }
    if (!showRight && scrolledWidth < technologiesContainer.scrollWidth) {
      showRight = true;
    }
  }

  onMount(() => {
    if (technologiesContainer) {
      showScrollBar = technologiesContainer.scrollWidth > technologiesContainer.clientWidth;
      showRight = true;
      console.log(showScrollBar);
    }
  })
</script>

<SafeAreaView --bg-color={app.project_details?.colors.bg} --color={app.project_details?.colors.fg}>
  <div class="main-container">
    <h2>{app.name}</h2>
    <!-- hero section -->
    <div class="hero">
      <div>
        <p>{@html app.project_details?.description}</p>
      </div>
      <div class="hero-img">
        <img src={app.project_details?.image} alt="medlist" />
      </div>
    </div>

    <!-- horizontal list -->
    {#if app.project_details?.technologies.length}
      <div class="technologies-wrapper">
        <h3>Technologies</h3>
        <div
          class="technologies-container"
          bind:this={technologiesContainer}
          on:scroll={onScroll}
        >
          {#each app.project_details?.technologies as tech}
            <div class="technology">
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          {/each}
          {#if showScrollBar}
            {#if showLeft}
              <button
                class="nav-button left"
                style="background: rgba({hexToRGB(app.project_details?.colors.fg)}, 0.5)"
                on:click={() => scrollTechnologiesContainer("left")}>
                <ArrowLeft />
              </button>
              {/if}
              {#if showRight}
              <button
                class="nav-button right"
                style="background: rgba({hexToRGB(app.project_details?.colors.fg)}, 0.5)"
                on:click={() => scrollTechnologiesContainer("right")}>
                <ArrowRight />  
              </button>
            {/if}
          {/if}
        </div>
      </div>
    {/if}

    <!-- actions -->
    <div class="buttons-container">
      {#if app.project_details?.play_store_link}
        <div>
          <AnchorIconButton
            link={app.project_details.play_store_link}
            icon={icons.googlePlay}
            text="Download"
            --bg-color="#fff"
            --color="#000"
          />
        </div>
      {/if}
      {#if app.project_details?.web_preview_link}
        <div>
          <AnchorIconButton
            link={app.project_details?.web_preview_link}
            icon={icons.web}
            text="Preview"
            --bg-color="#a2cffe"
            --color="#000"
          />
        </div>
      {/if}
      {#if app.project_details?.code_link}
        <div>
          <AnchorIconButton
            link={app.project_details?.code_link}
            icon={icons.github}
            text="View Code"
            --bg-color="#000"
            --color="#fff"
            --border-color="rgb(55 65 81)"
          />
        </div>
      {/if}
    </div>
  </div>
</SafeAreaView>

<style>
  .main-container {
    flex-grow: 1;
    overflow-y: auto;

    padding-inline: 0.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .main-container > h2 {
    font-size: 2rem;
  }
  .hero {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 0.5rem;
  }
  .hero-img {
    max-width: 75%;
  }
  .hero-img img {
    max-width: 100%;
    height: auto;
    border-radius: 0.25rem;
  }
  p {
    font-size: 0.75rem;
    text-align: justify;
  }
  .technologies-wrapper {
    position: relative;
  }
  .technologies-wrapper h3 {
    margin-bottom: .5rem;
  }
  .technologies-container {
    margin-inline: -.5rem;
    padding-inline: .5rem;
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    gap: .5rem;
    scrollbar-width: none;
  }
  .technologies-container::-webkit-scrollbar {
    display: none;
  }
  .nav-button {
    position: absolute;

    top: calc(50% - .25rem - .375rem + .25rem);

    aspect-ratio: 1;

    display: flex;
    border-radius: 50%;
    background-color: var(--color);
    color: var(--bg-color);
    border: 1px solid var(--bg-color);
    padding: 0.25rem;
    font-size: .75rem;
  }
  .nav-button.left {
    left: 0;
  }
  .nav-button.right {
    right: 0;
  }
  .technologies-container > div {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 3rem;
  }
  .technology {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .25rem;
    padding: .25rem;
  }
  .technology img {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: .5rem;
  }
  .technology span {
    font-size: .6rem;
    text-align: center;
  }
  .buttons-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .buttons-container > * {
    width: calc(50% - 0.25rem);
  }
</style>
