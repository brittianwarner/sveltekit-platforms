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
            id:3,
            name:'Geometric print lehnga blouse set',
            image: "https://static3.azafashions.com/tr:w-575.0,dpr-2/uploads/product_gallery/1691834091123_1.JPG",
            price: 57500,
        },
        {
            id:4,
            name:'Embroidered chanderi kurta gharara set',
            image: "https://static3.azafashions.com/tr:w-575.0,dpr-2/uploads/product_gallery/1692014824002_1.jpg",
            price: 14990,
        },
        {
            id:5,
            name:'Assymetric embroidered kurta pant set',
            image: "https://static3.azafashions.com/tr:w-575.0,dpr-2/uploads/product_gallery/1692186452384_1.jpg",
            price: 39500,
        },
        {
            id:6,
            name:'Bandhani print anarkali sharara set',
            image: "https://static3.azafashions.com/tr:w-575.0,dpr-2/uploads/product_gallery/1690211121391_1.jpg",
            price: 22800,
        },
        {
            id:7,
            name:'Border embroidered cape lehenga set',
            image: "https://static3.azafashions.com/tr:w-575.0,dpr-2/uploads/product_gallery/1689942355625_1.jpg",
            price: 42500,
        },
        {
            id:8,
            name:'Beryl embroidered lehenga set with jacket',
            image: "https://static3.azafashions.com/tr:w-575.0,dpr-2/uploads/product_gallery/1691078770278_1.jpg",
            price: 25560,
        },
        {
            id:9,
            name:'Mohak garden print kurta with pant',
            image: "https://static3.azafashions.com/tr:w-575.0,dpr-2/uploads/product_gallery/1689949297465_1.jpg",
            price: 17000,
        },
        {
            id:10,
            name:'Baltimore printed top and pant set',
            image: "https://static3.azafashions.com/tr:w-575.0,dpr-2/uploads/product_gallery/1691498687152_1.jpg",
            price: 16500,
        },
        {
            id:11,
            name:'Bagh print cape sharara set',
            image: "https://static3.azafashions.com/tr:w-575.0,dpr-2/uploads/product_gallery/1690364845501_1.jpg",
            price: 25500,
        },
        {
            id:12,
            name:'3-D embellished long jacket',
            image: "https://static3.azafashions.com/tr:w-575.0,dpr-2/uploads/product_gallery/1691426468957_1.jpg",
            price: 19900,
        },
   
    ];
</script>

<div class="card-container">
  <div class="product-card">
    
      <ul class="product-list">
        {#each products as item}
            <li class="lists">
              <img class="product-image"
                src={item.image}
                alt="product_image" />
              <h3>{item.name}</h3>
              <p>₹ {item.price}</p>
              <button class="button">Add to Cart</button>
            </li>
            {/each}
        </ul>
        
  </div>
</div>

<style>
  .card-container{
    display:flex;
    flex-wrap:wrap;
    margin-left: 95px;
    }

.product-image{
  height:350px;
  width:250px;
  margin-left: 25px;
  margin-top: 5px;
}

.product-list{
  margin:10px;
}


  .lists{
margin:20px;

width:300px;
font-size:14px;
display:inline-block;
text-align: center;
  }

  .lists:hover{
    border: 1px solid gray;
    border-radius: 5px;
  }
  .button{
    border: 2px solid white;
    border-radius: 6px;
margin:8px;
background-color:#e65c9c;
width:40%;
align-items: center;
padding: 6px 10px;

font-size:14px;
  }
</style>