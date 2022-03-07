<script>
  import NavLink from "../../elements/Links/NavLink.svelte";
  import IconLink from "../../elements/Links/IconLink.svelte";
  import Hamburger from "svelte-hamburgers";
  import {fly, fade} from 'svelte/transition'

  let open
</script>

<nav class="wrapper">
  <div class="nav-wrapper container">
    <div>
      <h1>Kaan</h1>
    </div>
    <div class="nav-items">
      <NavLink text={"About"} href='#about' />
      <NavLink text={"Skills"} href='#skills'/>
      <NavLink text={"Contact"} href='#contact'/>
      <div class="icon-wrapper">
        <IconLink
          icon="akar-icons:github-fill"
          href="https://github.com/karaKaan"
          size={35}
        />
        <IconLink
          icon="akar-icons:linkedin-box-fill"
          href="https://www.linkedin.com/in/kaan-kara/"
          size={35}
        />
      </div>
    </div>
    <div class="burger">
      <Hamburger bind:open type="elastic" />
    </div>
      {#if open}
        <div  class="burger-menu" in:fade={{duration:250}} out:fade={{delay:450}}>
          <div class="burger-items" >
            <div class="item" in:fly={{x: 100, delay:200}} out:fly={{x: -100, delay:400}}>
              <NavLink text={"About"} href={'#about'} />
            </div>
            <div class="item" in:fly={{x: 100, delay:250}} out:fly={{x: -100, delay:350}}>
              <NavLink text={"Skills"} href='#skills'/>
            </div>
            <div class="item" in:fly={{x: 100, delay:300}} out:fly={{x: -100, delay:300}}>
              <NavLink text={"Contact"} />
            </div>
            <div class="item" in:fly={{x: 100, delay:350}} out:fly={{x: -100, delay:250}}>
              <IconLink
              icon="akar-icons:github-fill"
              href="https://github.com/karaKaan"
              size={40}
              />
            </div>
            <div class="item" in:fly={{x: 100, delay:400}} out:fly={{x: -100, delay:200}}>
              <IconLink
              icon="akar-icons:linkedin-box-fill"
              href="https://www.linkedin.com/in/kaan-kara/"
                size={40}
              />
            </div>
          </div>
        </div>
      {/if}

  </div>
</nav>

<style>
  .burger{
    display: block;
  }
  .burger-menu {
    position: absolute;
    background-color: var(--primary-500);
    color: var(--neutral-white);
    width: 100%;
    height: 300vh;
    z-index: 999;
    top: 82px;
    font-size: 2rem;
  }
  .burger-items {
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 1.5em;
    margin-top: 1em;
  }

  .wrapper {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);
    margin-bottom: 15%;
  }
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    padding-block: 0.5em;
  }
  .nav-items {
    display: none;
  }
  .icon-wrapper {
    display: flex;
    column-gap: 1em;
  }

  @media (min-width: 600px) {
    .wrapper {
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);
      margin-bottom: 15%;
    }
    .nav-wrapper {
      display: flex;
      justify-content: space-between;
      padding-block: 0.5em;
    }
    .nav-items {
      display: flex;
      column-gap: 2em;
      align-items: center;
    }
    .icon-wrapper {
      display: flex;
      column-gap: 1em;
    }

    .burger {
      display: none;
    }
    .burger-menu{
      display: none;
    }
  }
</style>
