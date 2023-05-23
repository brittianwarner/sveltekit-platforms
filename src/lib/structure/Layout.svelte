<script lang='ts'>
	import { onMount } from 'svelte';
	import { appId } from '$lib/stores/app';
	import GithubLogo from '$lib/components/GithubLogo.svelte'
	
	let LayoutIndex: ConstructorOfATypedSvelteComponent;

	onMount(async () => {
		try{
			LayoutIndex = (
			await import(
				/* @vite-ignore */ `../apps/${$appId}/components/structure/LayoutIndex.svelte`
			)
		).default;
		} catch(error){
			LayoutIndex = (
			await import(
				/* @vite-ignore */ `../apps/default/components/structure/LayoutIndex.svelte`
			)
		).default;
		}
		
	});
</script>

<svelte:component this={LayoutIndex}  >
	<div class="min-h-full">	
		<slot />
	</div>
</svelte:component>


<GithubLogo />