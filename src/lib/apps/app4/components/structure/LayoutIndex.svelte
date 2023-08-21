<script>
	import Header from './Header.svelte';
	import Body from './Body.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="app">
	<Header />
	<Body>
		<slot />
	</Body>
	<Footer />
</div>