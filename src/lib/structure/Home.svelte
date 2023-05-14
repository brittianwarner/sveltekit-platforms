<script>
	import { onMount } from 'svelte';
	import { appId } from '$lib/stores/app';
	let ComponentsIndex;

	onMount(async () => {
	
        try{
            ComponentsIndex = (
                await import(
                    /* @vite-ignore */ `../apps/${$appId}/components/Home.svelte`
                )
            ).default;
        }catch(error){
            ComponentsIndex = (
                await import(
                    /* @vite-ignore */ `../apps/default/components/Home.svelte`
                )
            ).default;
        }
	});
</script>

<svelte:component this={ComponentsIndex}/>
