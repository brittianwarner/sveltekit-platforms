<div class="mx-auto mt-10 flex object-center box">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Name: </label>
    <input class="input" type="text" name="name"><br>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>EmailId: </label>
    <input class="input" type="email" name="email">
    <button class="button">Submit</button>
</div>

<style>

    .box{
        border: 2px solid black;
        border-radius: 3px;
    display:block;
        align-items: center;
        height:300px;
        width:500px;
        padding:10px;
    }
.input{
    display: flex;
    justify-content: center;
    align-items: center;
}
.button{
    border: 1px solid black;
    border-radius: 3px;
   margin: 20px;
}


</style>