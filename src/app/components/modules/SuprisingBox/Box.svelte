<script>
  export let prefix;
  export let id;
  export let title;
  export let src;
  export let alt;
  export let text;

  const addAnim = () => {
    const item = document.getElementById(`${prefix}-${id}`);
    item.classList.add("animated", "flip");
  };
</script>

<div
  id={`${prefix}-${id}`}
  class="card"
  data-aos="zoom-in"
  on:click={() => addAnim()}
>
  <div class="card-inner">
    <div class="card-front">
      <h1 class="question">?</h1>
      <div class="dot-tr" />
      <div class="dot-tl" />
      <div class="dot-br" />
      <div class="dot-bl" />
    </div>
    <div class="card-back">
      <img src={`/images/${src}`} width={250} height={250} {alt} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </div>
</div>

<style>
  .card {
    position: relative;
    display: inline-block;
    width: 250px;
    height: 250px;
    margin-top: 2em;
    user-select: none;
    perspective: 1000px;
  }
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  /* 
    .wrapper:hover .card-inner{
      transform: rotateY(180deg);
  } */

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .card-back h2{
      margin-top: 1em;
  }
  .card-front {
    background: var(--accent-500);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
  .card-back {
    background-color: var(--neutral-white);
    transform: rotateY(180deg);
    text-align: center;
  }

  .card-front:active {
    box-shadow: -1px -2px 4px rgba(0, 0, 0, 0.4);
  }
  .dot-tr,
  .dot-tl,
  .dot-br,
  .dot-bl {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 300px;
    background: var(--neutral-white);
    box-shadow: 0px -2px 4px black;
  }
  .dot-tr {
    top: 20px;
    left: 20px;
  }
  .dot-tl {
    top: 20px;
    right: 20px;
  }
  .dot-br {
    bottom: 20px;
    left: 20px;
  }
  .dot-bl {
    bottom: 20px;
    right: 20px;
  }
  .question {
    position: absolute;
    top: 18%;
    left: 40%;
    font-size: 10rem;
  }
</style>
