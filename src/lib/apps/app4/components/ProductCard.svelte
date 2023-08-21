<script>
    const products=[
        {
            id:1,
            name:'Gota embroidered kaftan',
            image: "https://static3.azafashions.com/tr:w-575.0,dpr-2/uploads/product_gallery/1691505184913_1.jpg",
            price: 24900,
        },
        {
            id:2,
            name:'Pre-draped sharara saree with floral print blouse',
            image: "https://static3.azafashions.com/tr:w-575.0,dpr-2/uploads/product_gallery/1691130973243_1.jpg",
            price: 28000,
        },
    ];
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

