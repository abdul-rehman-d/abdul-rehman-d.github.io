<script lang="ts">
  import { onMount } from "svelte";
  import type { UIEventHandler } from "svelte/elements";

  import ArrowRight from "virtual:icons/material-symbols/arrow-right-alt";
  import ArrowLeft from "virtual:icons/material-symbols/arrow-left-alt";

  let listContainer: HTMLDivElement;
  let showScrollBar: boolean = false;
  let showLeft: boolean = false;
  let showRight: boolean = false;

  function scrollListContainer(dir: "left" | "right") {
    switch (dir) {
      case "left":
        listContainer.scrollBy({
          left: -56 * 2,
          behavior: "smooth",
        });
        break;
      case "right":
        listContainer.scrollBy({
          left: 56 * 2,
          behavior: "smooth",
        });
        break;
      default:
        break;
    }
  }

  const onScroll: UIEventHandler<HTMLDivElement> = (e) => {
    if (!showScrollBar) return;

    if (!showLeft && listContainer.scrollLeft > 0) {
      showLeft = true;
    }
    if (showLeft && listContainer.scrollLeft === 0) {
      showLeft = false;
    }
    const scrolledWidth =
      listContainer.scrollLeft + listContainer.clientWidth;
    if (showRight && scrolledWidth === listContainer.scrollWidth) {
      showRight = false;
    }
    if (!showRight && scrolledWidth < listContainer.scrollWidth) {
      showRight = true;
    }
  };

  onMount(() => {
    if (listContainer) {
      showScrollBar =
        listContainer.scrollWidth > listContainer.clientWidth;
      showRight = true;
      console.log(showScrollBar);
    }
  });

  const clients = [
    {
      name: "California Pizza",
      icon: "https://console.indolj.io/upload/1658409985-Logo-california.png",
      link: "https://californiapizza.com.pk/",
    },
    {
      name: "Rehmat e Shereen",
      icon: 'https://console.indolj.io/upload/1689762712-Asset-1%402x-8.png',
      link: 'https://order.rehmateshereen.com/',
    },
    {
      name: 'United King',
      icon: 'https://console.indolj.io/upload/1652698752-uk-1.jpg',
      link: 'https://www.unitedkingonline.com/'
    },
    {
      name: 'Pie in the Sky',
      icon: 'https://console.indolj.io/upload/1658775499-Logo.png',
      link: 'https://order.pieinthesky.com.pk/'
    },
  ];
</script>

<div class="main-wrapper">
  <h3>Clients I have worked on</h3>
  <div class="list-wrapper">
    <div
      class="list-container"
      bind:this={listContainer}
      on:scroll={onScroll}
    >
      {#each clients as client}
        <div class="item">
          <img src={client.icon} alt={client.name} />
          <span>{client.name}</span>
        </div>
      {/each}
      {#if showScrollBar}
        {#if showLeft}
          <button
            class="nav-button left"
            style="background: rgba(0, 0, 0, 0.5)"
            on:click={() => scrollListContainer("left")}
          >
            <ArrowLeft />
          </button>
        {/if}
        {#if showRight}
          <button
            class="nav-button right"
            style="background: rgba(0, 0, 0, 0.5)"
            on:click={() => scrollListContainer("right")}
          >
            <ArrowRight />
          </button>
        {/if}
      {/if}
    </div>
  </div>
</div>

<style>
  .main-wrapper h3 {
    margin-bottom: .5rem;
  }

  .list-wrapper {
    margin-inline: -.5rem;
    padding-inline: .5rem;
    position: relative;
  }

  .list-container {
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    gap: .5rem;
    scrollbar-width: none;
  }

  .list-container::-webkit-scrollbar {
    display: none;
  }

  .nav-button {
    position: absolute;

    top: calc(50% - .25rem);

    aspect-ratio: 1;

    display: flex;
    border-radius: 50%;
    color: #000000;
    border: 1px solid #000000;
    padding: 0.25rem;
    font-size: .75rem;
  }
  .nav-button.left {
    left: 0;
  }
  .nav-button.right {
    right: 0;
  }

  .list-container > div {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 3rem;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .25rem;
    padding: .25rem;
  }
  .item img {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: contain;
    border-radius: .5rem;
    background-color: #fff;
  }
  .item span {
    font-size: .6rem;
    text-align: center;
  }
</style>
