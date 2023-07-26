<script>
    import { onMount } from "svelte";

    $: response = '';
    onMount(async () => {
		response = (await fetch('/api/example')).json();
	})
</script>

{#await response}
  Loading...
{:then value}
<div class="flex w-full">
    <p class="font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-orange-700 via-gray to-orange-300 sm:max-w-2xl mx-auto pt-24 prose text-4xl sm:text-6xl subpixel-antialiased drop-shadow-xl">
        {value.message}
    </p>
    </div>
{/await}
