<script>
  import products from './Products.svelte'
</script>

<div id="product-card">
    <ul class="pt-6">
        {#each products as item}
          <li>
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
            <button>Add to Cart</button>
          </li>
        {/each}
      </ul>
</div>

