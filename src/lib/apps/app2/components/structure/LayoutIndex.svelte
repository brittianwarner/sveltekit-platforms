<script>
	import Header from './Header.svelte';
	import Body from './Body.svelte';
	import Footer from './Footer.svelte';
	
</script>

<div class="min-h-full">
	<Header />
	<Body>
		<slot />
	</Body>
	<Footer />
</div>


