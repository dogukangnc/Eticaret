<template>

<section class="products">
 
  <div v-for="product in products"
        :key="product.id">    
         <div class= "product-card">
        <!-- <img :src="product.image" >  -->
         <div class="product-title"> 
           <h5>{{product.title}}</h5><!--  <li>{{product.name}}</li>  olacak..  -->
         </div>
         <div class="product-info">
           <ul>           
            <!--  <li>{{product.color}}</li>  -->
            <!--  <li>{{product.price}}</li>  -->
            
           </ul>
         </div>
        <button v-on:click="adToCart(product)">Add to Cart</button>
  </div>
 </div>
   </section>

</template>

<script>
import axios from "axios";

export default {
  name: 'Product',

   created() {
      this.getProduct();
    },

  data () {
    return {
      cart: [],
      products: [],
      errors:[]     
      };
 
},

methods:{
  getProduct() {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then(response => (this.products = response.data))
          .catch(error => {
            this.errors.push(error);
          });
      },

  adToCart(product){

    this.cart.push(product);
    console.log(this.cart);
  }
}

};
</script>

<style scoped>
.products{
  display: grid;
  grid-template-columns:1fr 1fr 1fr ;
  padding: 30px 300px;
  position: relative;
}
.products img{
  border-radius: 12px;
}
 .product-info ul li{
    float: left;
    list-style-type: none;
    padding: 5px;
    font-style: inherit;
    position: relative;
    left:-30px;
    font-family: sans-serif;
    font-size: 16px;
    font-weight:bold;
    
  
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
  color:black;
}


</style>