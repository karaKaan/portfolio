<script>
  import Navbar from "./app/components/modules/Navbar/Navbar.svelte";
  import Title from "./app/components/elements/Title/Title.svelte";
  import Solar from "./app/components/modules/SolarImg/Solar.svelte";
  import Button from "./app/components/elements/Buttons/Button.svelte";
  import Content from "./app/components/elements/Content/Content.svelte"
</script>

<main>
  <Navbar />
  <div class="container section">
    <div class="content-wrapper">
      <div>
        <Title type="bigTitle" prefix="firstTitle" text="👋 Hi, " />
        <Title type="bigTitle" prefix="secTitle" text="I'm Kaan." />
        <Title
          type="bigTitle"
          prefix="thirdTitle"
          text="Full Stack Developer."
        />
      </div>
      <div>
        <Button text="Contact me" primary />
      </div>
    </div>
    <div>
      <Solar src="images/profile.png" />
    </div>
  </div>
  <div class="container">
    <Title type="title" text="Me, Myself & I" />
    <Content>
      My passionate for Coding developed in the University. Not because what
      they have taught me, nor the courses that I chose. To explain that, I need
      to jump further into the past. In my High School years I chose an economic
      School. and in the University, I chose business administration. So my path
      for coding did not even start yet. I was dedicated to work as a tax
      consultant or a controller. Something that has nothing to do with Coding.
      But Things Changed. I wanted earn a bit of money and started with
      Affiliate, and Keyword Research was one thing that was important and yet a
      pain in the a**. My Brother told me to scrape those Keywords and the key
      figures. After looking around and researching, I developed a script in
      Python with the Library Selenium. That script scraped the keyword and the
      key figures and it pasted it into Google Spreadsheet.This little script
      took a loooooooot of work off me and saved a lot of time. The Affiliate
      Site wasn't successful, but I was happy about the new lesson that I've
      learned. That coding can simplify your life. I changed my study course to
      business informatics. The courses or rather the programming languages were
      versatile. So there was no real focus. At first I wanted to become a Data
      Scientist, but then I reevaluate my decision and chose to become a Full
      Stack Web Developer.Reasons for me to become a Web developer was: <br/>🔥
      Providing a Solution. <br/>🔥 Reaching a lot of People. <br/>🔥 Fun Factor and
      Visual Approvment.
    </Content>
  </div>
</main>

<style>
  .content-wrapper {
    display: flex;
    flex-flow: column wrap;
    row-gap: 2.5em;
  }
</style>
