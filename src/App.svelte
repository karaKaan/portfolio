<script>
  import Icon from '@iconify/svelte'

  import Navbar from "./app/components/modules/Navbar/Navbar.svelte";
  import Title from "./app/components/elements/Title/Title.svelte";
  import Solar from "./app/components/modules/SolarImg/Solar.svelte";
  import Button from "./app/components/elements/Buttons/Button.svelte";
  import Content from "./app/components/elements/Content/Content.svelte";
  import FadeRight from "./app/components/layout/Fade/FadeRight.svelte";
  import FadeLeft from './app/components/layout/Fade/FadeLeft.svelte'
  import CoffeeAnim from './app/components/modules/CoffeeAnim/CoffeeAnim.svelte'
  import Box from './app/components/modules/SuprisingBox/Box.svelte'
  import {Softskill, Hardskill} from './app/utils/stores/SkillsStore'
  

  window.addEventListener('scroll', () => {
	  document.body.style.setProperty('--coffee-scroll', window.pageYOffset  / ((document.body.offsetHeight ) - window.innerHeight))
  })

</script>

<main>
  <Navbar />
  <div class="container section hero">
    <div class="content-wrapper">
      <div>
        <Title type="bigTitle" prefix="firstTitle" text="👋 Hi, " />
        <Title type="bigTitle" prefix="secTitle" text="I'm Kaan." />
        <Title
          type="bigTitle"
          prefix="thirdTitle"
          text="Full Stack Dev."
        />
      </div>
    </div>
    <div>
      <Solar src="images/profile.png" />
    </div>
  </div>
  <div id="about" class="container section">
    <FadeRight>
      <Title type="title" text="Me, Myself & I" prefix='me'/>
      <Content>
        My passionate for Coding developed in the University. Not because what
        they have taught me, nor the courses that I chose. To explain that, I
        need to jump further into the past. In my High School years I chose an
        economic School. and in the University, I chose business administration.
        So my path for coding did not even start yet. I was dedicated to work as
        a tax consultant or a controller. Something that has nothing to do with
        Coding. But Things Changed. I wanted earn a bit of money and started
        with Affiliate, and Keyword Research was one thing that was important
        and yet a pain in the a**. My Brother told me to scrape those Keywords
        and the key figures. After looking around and researching, I developed a
        script in Python with the Library Selenium. That script scraped the
        keyword and the key figures and it pasted it into Google
        Spreadsheet.This little script took a loooooooot of work off me and
        saved a lot of time. The Affiliate Site wasn't successful, but I was
        happy about the new lesson that I've learned. That coding can simplify
        your life. I changed my study course to business informatics. The
        courses or rather the programming languages were versatile. So there was
        no real focus. At first I wanted to become a Data Scientist, but then I
        reevaluate my decision and chose to become a Full Stack Web
        Developer.Reasons for me to become a Web developer was: <br />🔥
        Providing a Solution. <br />🔥 Reaching a lot of People. <br />🔥 Fun
        Factor and Visual Approvment.
      </Content>
    </FadeRight>
	<FadeLeft>
		<CoffeeAnim />
	</FadeLeft>
</div>
<div id="skills" class="container section softskills">
    <Title type='title' text='Softskills' prefix='softskills' />
  <div class="row">
    {#each $Softskill as skill (skill.id) }
    <Box id={skill.id} prefix='softskill' title={skill.title} src={skill.imgSrc} alt={skill.alt} text={skill.text}/>
    {/each}
  </div>
</div>
<div class="container section hardskills">
    <Title type='title' text='Hardskill' prefix='hardskills' />
  <div class="skill">
    {#each $Hardskill as skill (skill.id)}
    <div data-aos='fade-in' data-aos-delay="{skill.delay}">
      <Icon icon={skill.icon} width={60} />
    </div>
    {/each}
  </div>
</div>

</main>

<style>
.hero{
  margin-bottom: 30%;
}
.content-wrapper {
    display: flex;
    flex-flow: column wrap;
    row-gap: 2.5em;
  }
  .softskills {
    flex-direction: column;
  }

  .hardskills {
    flex-direction: column;
  }
  .skill{
    margin-top: 2em;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    column-gap: 5em;
    row-gap: 2.5em;
  }

  @media (min-width: 300px){
    .row{
      display: flex;
      justify-content: center;
      column-gap: 1em;
      row-gap: 1em;
    }

    .skill{
      justify-content: center;
    }
  }

</style>
