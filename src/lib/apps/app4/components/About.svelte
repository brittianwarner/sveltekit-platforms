<svelte:head>
	<title>Neha's Boutique</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-black text-lg about">

    <h1 class="heading">Welcome To Neha's Boutique</h1>

    <div class="section">
    <p class="para">A woman’s wardrobe is her opportunity to stand out and make a lasting first impression. Launched in 2012, Neha's boutique offers a wide range of apparel to fit any woman’s unique sense of style.
    
    Our clothing and accessories are carefully curated to provide our customers the latest fashions. To keep our customers in style we post new arrivals daily, as well as offer stylist picks to help any indecisive shoppers.
    Neha's boutique is a fashionista’s best place to create the perfect wardrobe. <br>

<br>

If you are a first-time visitor or long-standing customer, we hope you will be thrilled with every aspect of your Impressions shopping experience.</p>

    <img src="https://thumbs.dreamstime.com/b/boutique-view-interior-34493816.jpg" alt="dresses">
    </div>

<div class="section section-middle">
    <p class="para">Neha's boutique is India’s driving fashion store and home to the eponymous brand. A by-and-by curated determination of brands that are connected by a mix of tender loving care, quality, and craftsmanship. <br>
    <br>We pride ourselves on the learning and dimension of administration offered, particularly the network worked around the store.</p>

<img src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym91dGlxdWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="dresses">
</div>

<div class="section">
    <p class="para">Beyond helping you look your best, Neha's boutique strives to make every purchase a positive experience. 
Our top priorities are excellent customer service, exceptionally quick order processing, ultra fast shipping times, 
and a hassle-free return policy. <br>
<br>We value your feedback, whether positive or constructive and we are continuously working to improve your experience.</p>

<img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Holt_Renfrew_Mannequins.jpg" alt="dresses">

</div>
</div>

<style>

.about{
    background: url("https://cdn.pnghd.pics/data/823/purple-soft-5.jpg");
    background-size:cover;


}
    .heading{
        font-weight: bold;
         background: linear-gradient(to right, #360167, #6b0772, #af1281, #cf268a, #e65c9c, #fb8cab);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        text-align: center;
     padding: 20px;
        font-size: 40px;
        font-family: garamond, sans-serif;
        font-style: italic;
    }

    .para{
        padding: 10px; 
    }

    .section{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 10px;
        margin: auto;
max-width:80%;
    }

.section-middle{
    flex-direction:row-reverse;
}

img{
    border: 2px solid black;
    border-radius: 20px;
    width:300px;
    height:300px;

}

</style>