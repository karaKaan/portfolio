<script>
	import Navbar from './app/components/modules/Navbar/Navbar.svelte'
	import Title from './app/components/elements/Title/Title.svelte'
	import Solar from './app/components/modules/SolarImg/Solar.svelte'
	import Button from './app/components/elements/Buttons/Button.svelte'
</script>

<main >
	<Navbar />
	<div class="container">

		<div class="content-wrapper">
			<div>
				<Title type='bigTitle' prefix='firstTitle' text="👋 Hi, "/>
				<Title type='bigTitle' prefix='secTitle' text="I'm Kaan."/>
				<Title type='bigTitle' prefix='thirdTitle' text="Full Stack Developer."/>
			</div>
			<div>
				<Button text='Contact me' primary />
			</div>
		</div>
		<div>
			<Solar src='images/profile.png'/>
		</div>
	</div>
</main>

<style>
	.content-wrapper{
		display: flex;
		flex-flow: column wrap;
		row-gap: 2.5em;
	}
</style>
