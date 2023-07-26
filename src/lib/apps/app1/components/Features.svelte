<script>
    export let data;
</script>

<div class="flex w-full overflow-hidden">
  <ul class="divide-y divide-gray-100 sm:max-w-2xl mx-auto">
    {#each data?.load?.example as item}
    <li class="py-4">
      <div class="flex items-center gap-x-3">
        <h3 class="flex-auto truncate text-xl font-semibold leading-6 text-orange-600">{item.name}</h3>
      </div>
    </li>
   {/each}
  </ul>
</div>

