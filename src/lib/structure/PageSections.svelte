<script lang='ts'>
	import { onMount } from 'svelte';
	import { appId } from '$lib/stores/app';
	import { page } from '$app/stores';
	import { redirect } from '@sveltejs/kit';

	type Config = {
		page: string
	}

	let config: Config;

	let componentName: string;

	let component: ConstructorOfATypedSvelteComponent;

	onMount(async () => {
		try {
			config = (
				await import(
					/* @vite-ignore */ `../apps/${$appId}/config.js`
				)
			).default;

			componentName = config[$page.url.pathname as keyof typeof config]

			component = (
				await import(
					/* @vite-ignore */ `../apps/${$appId}/components/${componentName}.svelte`
				)
			).default;
			
		} catch (error) {
			//console.log(componentName, 'Does not Exist');
			//Redirect to Home
			throw redirect(301,'/')

		}
	});
</script>

<svelte:component this={component} >
	<div class="min-h-full">	
		<slot />
	</div>
</svelte:component>
