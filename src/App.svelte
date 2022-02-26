<script>
	import Navbar from './app/components/modules/Navbar/Navbar.svelte'
	import Title from './app/components/elements/Title/Title.svelte'
	import Solar from './app/components/modules/SolarImg/Solar.svelte'
</script>

<main >
	<Navbar />
	<div class="wrapper">

		<div>
			<Title type='bigTitle' prefix='firstTitle' text="👋 Hi, "/>
			<Title type='bigTitle' prefix='secTitle' text="I'm Kaan."/>
			<Title type='bigTitle' prefix='thirdTitle' text="Full Stack Developer."/>
			<Title type='title' prefix='meTitle' text="Me, Myself & I"/>
		</div>
		<div style="position: relative;">
			<Solar src='images/profile.png'/>
		</div>
	</div>
</main>

<style>
	.wrapper {
		/* display: flex; */
		margin: auto;
	}
</style>
