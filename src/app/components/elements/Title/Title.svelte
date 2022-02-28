<script>
  export let text;
  export let prefix;
  export let type;

  text = text.replaceAll(' ', '\u00A0')
  text = Array.from(text);
  let obj = [];

  text.map((letter, index) => {
    obj = [...obj, { id: `${prefix}-${index}`, value: letter }];
  });

  const addClass = (id) => {
    const span = document.getElementById(id);
    span.classList.add("animated", "rubberBand");
  };

  const removeClass = (id) => {
    const span = document.getElementById(id);
    span.addEventListener("animationend", () =>
      span.classList.remove("animated", "rubberBand")
    );
  };

</script>

{#if type === "bigTitle"}
  <h1 class="wrapper">
    {#each obj as letter (letter.id)}
      <span
        id={letter.id}
        class="rubber-span"
        on:mouseenter={addClass(letter.id)}
        on:mouseleave={removeClass(letter.id)}
      >
        {letter.value}</span
      >
    {/each}
  </h1>
{:else if type === "title"}
  <h1 >
    {#each obj as letter (letter.id)}
      <span
        id={letter.id}
        class="rubber-span"
        on:mouseenter={addClass(letter.id)}
        on:mouseleave={removeClass(letter.id)}
      >
        {letter.value}</span
      >
    {/each}
  </h1>
{/if}

<style>
  .wrapper {
    font-size: 4rem;
  }

</style>
