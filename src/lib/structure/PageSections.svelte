<script lang='ts'>
	import { onMount,tick } from 'svelte';
	import { appId } from '$lib/stores/app';
	import { page } from '$app/stores';

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
			await tick();
		} catch (error) {
			console.log(componentName, 'Does not Exist');
		}
	});
</script>


{#key $page.url.pathname}
<svelte:component this={component} >
	<div class="min-h-full">	
		<slot />
	</div>
</svelte:component>
{/key}