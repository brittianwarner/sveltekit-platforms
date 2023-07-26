<script lang="ts">
	import PageSections from '$lib/structure/PageSections.svelte';
	import { page } from '$app/stores';

	/** @type {import('./$types').PageServerData} */
	export let data;
</script>

{#key $page.url.pathname }
	<PageSections {data}  />
{/key}