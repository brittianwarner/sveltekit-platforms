<script lang='ts'>
	import { onMount,tick } from 'svelte';
	import { appId } from '$lib/stores/app';
	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';


	let component: ConstructorOfATypedSvelteComponent;

	export let data;

	onMount(async () => {
		try {

			component = (
				await import(
					/* @vite-ignore */ `../apps/${$appId}/components/${data.component}.svelte`
				)
			).default;
			await tick();
		} catch (error) {
			console.log(data.component, 'Does not Exist');
		}
	});

	beforeNavigate(()=>{
		component.$destroy();
	})
	
</script>


{#key $page.url.pathname}
<svelte:component this={component} {data} >
	<div class="min-h-full">	
		<slot />
	</div>
</svelte:component>
{/key}