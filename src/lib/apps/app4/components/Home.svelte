<svelte:head>
	<title>Neha's Boutique</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	
	const carouselPhotos = [
		'https://static3.azafashions.com/uploads/banner_templates/festive-shop_1-1-min-0661165001691734315.gif',
		'https://static3.azafashions.com/uploads/banner_templates/1-6_most-popular-styles-0699311001691668962.jpg',
		'https://static3.azafashions.com/uploads/banner_templates/1-7_sureena-chowdhri-0188154001691669074.jpg'
	]
	
	let index = 0
	
	const next = () => {
		index = (index + 1) % carouselPhotos.length;
		  console.log("Next button clicked");
	}

const previous = () => {
 index = (index - 1 + carouselPhotos.length) % carouselPhotos.length;
  }

</script>


<div class="container">

	<img src= {carouselPhotos[index]}  alt="carousel" />	

<button class="button" on:click={next}>></button>
<button class="button-previous" on:click={previous}>&lt;</button>

</div>


<style>	
.container{
	max-width:100%;
	height:715px;
}

img{
	height:82%;
	width:100%
}

.button{
cursor:pointer;
color:white;
font-size:50px;
margin-left:1550px;
margin-top:300px;
}

.button-previous{
cursor:pointer;
color:white;
font-size:50px;
margin-left:30px;
margin-top:300px;
}

img, button {
		position: absolute;
	}
</style>