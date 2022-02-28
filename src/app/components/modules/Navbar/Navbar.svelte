<script>
  import NavLink from "../../elements/Links/NavLink.svelte";
  import IconLink from "../../elements/Links/IconLink.svelte";
</script>

<nav class="wrapper">
  <div class="nav-wrapper container">
    <div>
      <h1>Kaan</h1>
    </div>
    <div class="nav-items">
      <NavLink text={"About"} />
      <NavLink text={"Skills"} />
      <NavLink text={"Contact"} />
      <div class="icon-wrapper">
        <IconLink
          icon="akar-icons:github-fill"
          href="https://github.com/karaKaan"
          size={35}
        />
        <IconLink icon="akar-icons:linkedin-box-fill" href="https://www.linkedin.com/in/kaan-kara/" size={35} />
      </div>
    </div>
  </div>
</nav>

<style>
  .wrapper {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);
    margin-bottom: 15%;
  }
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    padding-block: .5em;
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
</style>
