<script>
	import { onMount } from 'svelte';
	import { appId } from '$lib/stores/app';
	import { page } from '$app/stores';
	let config;
	let component;
	let componentName = 'Unknown'

	onMount(async () => {
		try {
			config = (
				await import(
					/* @vite-ignore */ `../apps/${$appId}/config.js`
				)
			).default;

			componentName = config[$page.url.pathname]

			component = (
				await import(
					/* @vite-ignore */ `../apps/${$appId}/components/${componentName}.svelte`
				)
			).default;
			
		} catch (error) {
			console.log(componentName, 'Does not Exist');
		}
	});
</script>

<svelte:component this={component} >
	<div class="min-h-full">	
		<slot />
	</div>
	</svelte:component>
