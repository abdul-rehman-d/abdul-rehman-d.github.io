<script lang="ts">
  export let link: string;
  export let icon: string;
  export let text: string;
</script>

<a href={link} target="_blank" rel="noopener noreferrer" role="button">
  <img src={icon} alt="logo" />
  <span>{text}</span>
</a>

<style>
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .5rem;
    padding: 0.25rem 1rem;

    transition: 'box-shadow' 100ms ease-in-out;

    background-color: var(--bg-color, #fff);
    border-radius: .25rem;
    text-decoration: none;
    color: var(--color, #000);
    border: 1px solid var(--border-color, --bg-color, #fff);
  }
  a:hover, a:focus, a:focus-within {
  }
  a img {
    width: 1rem;
    height: 1rem;
    object-fit: cover;
    border-radius: 50%;
  }
  a span {
    font-size: .7rem;
  }
</style>