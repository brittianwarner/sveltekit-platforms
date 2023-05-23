<script>
  import "../app.postcss";
  import Layout from "$lib/structure/Layout.svelte";
  import { appId } from "$lib/stores/app";

  /** @type {import('./$types').LayoutServerData} */
  export let data;
  
  $appId = data.appId;
</script>

<Layout>
  <slot />
</Layout>
