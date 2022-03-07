<script>
  export let text;
  export let href;
</script>

<li class="link-wrapper">
  <a href={href}>{text}</a>
</li>

<style>
  @media (max-width: 600px) {
    .link-wrapper {
      padding: 1em;
    }
    .link-wrapper:active {
      background: var(--primary-500);
    }
  }
  @media (min-width: 600px) {
    .link-wrapper {
      padding: 0;
      transition: ease-in-out 150ms;
      cursor: pointer;
    }
    .link-wrapper:hover {
      color: var(--primary-500);
      transition: ease-in-out 150ms;
    }
  }
</style>
