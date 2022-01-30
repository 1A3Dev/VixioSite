<style>
	:global(body) {
		background-color: #0d1117;
	}
	.title {
		color: white !important;
	}
	.search-input {
		background-color: transparent;
		color: white;
	}
	.search-input::placeholder {
		color: grey;
	}
</style>

<script>

	import { onMount } from 'svelte';
	import syntaxes from './Syntaxes.js';

	import Navbar from './components/Navbar.svelte';
	import Sidebar from './components/Sidebar.svelte';
	import Card from './components/Card.svelte';
	import TopArrow from './components/TopArrow.svelte';
	import Footer from './components/Footer.svelte';

	let effects = [];
	let conditions = [];
	let expressions = [];
	let events = [];

	async function search() {
		const cards = document.getElementsByClassName('syntaxes')[0].getElementsByClassName('card')
		const search_value = document.getElementsByClassName('search-input')[0].value.toLowerCase();
		for (let i = 0; i < cards.length; i++) {
			const title = cards[i].getElementsByClassName('card-header-title')[0].textContent;
			const pattern = cards[i].getElementsByClassName('card-pattern')[0];
			if (title.toLowerCase().indexOf(search_value) > -1) {
				cards[i].style.display = '';
			} else {
				cards[i].style.display = 'none';
			}
		}
	}

	onMount(async () => {
		const match = window.location.href.match(/(\#.+)$/gm);
		if (match) {
			let element = document.getElementById( match[0].replace(/^\#/gm, '') );
			await element.scrollIntoView();
		}
	})

</script>

<Navbar />

<TopArrow />

<div class="container top">
	<div class="columns">
		<div class="column is-2 is-hidden-mobile">
			<Sidebar />
		</div>
		<div class="column is-10">
			<div class="has-text-centered">
				<input class="input has-text-centered search-input" on:keypress={search} type="text" placeholder="Find a syntax">
				<br><br>
			</div>
			<div class="syntaxes top">

				{#each Object.keys(syntaxes) as syntaxType}
					<div id="{syntaxType.toLowerCase()}"><a href="#{syntaxType.toLowerCase()}" class="title">{syntaxType}</a></div><br>
					{#each syntaxes[syntaxType] as syntax}
						<Card type={syntaxType} {syntax} />
					{/each}
					<br>
				{/each}

			</div>
		</div>
	</div>

</div>

<Footer />