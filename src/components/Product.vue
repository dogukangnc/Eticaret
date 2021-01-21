<template>

<section class="products">
 
  <div v-for="product in products"
        :key="product.id">    
        <img :src="product.image" >
         <div class="product-title">
           <h5>{{product.title}}</h5>
         </div>
         <div class="product-info">
           <ul>
             <li>{{product.color}}</li>
             <li>{{product.cost}}</li>
           </ul>
         </div>
        <button v-on:click="adToCart(product)">Add to Cart</button>
  </div>
  
   </section>

</template>

<script>


export default {
  name: 'Product',
  data () {
    return {
      cart: [],
      products: [
        {
          id: 1,
          title: 'Nike Air Max',
          color: 'green',
          bgtext: 'NIKE',
          cost: '20$',
          image:'https://media.finishline.com/s/finishline/CK7173_100?$default$&w=245&bg=rgb(237,237,237)'
          
        },
        {
           id: 2,
          title: 'Nike flex',
          color: 'blue',
          bgtext: 'AIR',
          cost: '24$',
          image:'https://media.finishline.com/s/finishline/CK7173_100?$default$&w=245&bg=rgb(237,237,237)'
          
         
        },
        {
           id: 3,
          title: 'Nike Roche Runs',
          color: 'pink',
          bgtext: 'MAX',
          cost: '30$',
          image:'https://media.finishline.com/s/finishline/CK7173_100?$default$&w=245&bg=rgb(237,237,237)'
          
          
        }
      ]
      }
 
},
methods:{
  adToCart(product){

    this.cart.push(product);
    console.log(this.cart);
  }
}

}
</script>
<style scoped>
.products{
  display: grid;
  grid-template-columns:1fr 1fr 1fr ;
  padding: 30px 300px;
  
}
.products img{
  border-radius: 12px;
}
 .product-info ul li{
    float: left;
    margin: auto;
    list-style-type: none;
    padding: 5px;
    font-style: inherit;
  
}
.products button{

  background-color: rgb(148, 20, 20);
  font-size:15px;
  border: 2px solid black;
  color: aliceblue;
  padding: 5px 15px;
  transition-duration: 0.4s

}
.products button:hover{
   background-color: #59ac5c; 
  color: white;
}
.product-title h5{
  font-family: sans-serif;
  font-size: 16px;
  color: aqua;
}

</style>