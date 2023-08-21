<svelte:head>
	<title>Neha's Boutique</title>
	<meta name="description" content="products of this app" />
</svelte:head>

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
        }
    ];
</script>

<div class="pt-10">
  <div class="mx-auto">
      <ul class="flex mx-auto shadow-md">
          {#each products as item}
            <li class="rounded-lg justify-center item-center flex-wrap w-auto mx-50 pb-20 h-auto">
              <img
                src={item.image}
                alt="product_image" />
              <h3 class="inline">{item.name}</h3>
              <p>₹ {item.price}</p>
              <button class="bg-[#e65c9c] text-black mb-10 shadow-md border-white rounded-lg px-4 border-2">Add to Cart</button>
            </li>
          {/each}
        </ul>
  </div>
</div>
