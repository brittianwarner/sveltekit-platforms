<script>
	import { appId } from '$lib/stores/app'
    import Logo from './Logo.svelte';
</script>
  
<div class="py-10">
	<header>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">App: {$appId}</h1>
	</div>
	</header>
	<main>
	<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Logo />
		<!-- Your content -->
	</div>
	</main>
</div>