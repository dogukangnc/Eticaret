<template>

<section class="products">
 
  <div v-for="product in products.items"
        :key="product.id">    
         <div class= "product-card">
        <img src="https://store.therelated.com/media/catalog/product/cache/84c53f0847035d2675c1d71de00956c9/m/j/mj04-black_main_1.jpg" > 
         <div class="product-title"> 
           <h1>{{product.name}}</h1>
         </div>
         <div class="product-info">
           <ul>           
            <!--  <li>{{product.color}}</li>  -->
             <li>{{product.price}}.00$</li> 
            
           </ul>
         </div>
        <button v-on:click="adToCart(product)">Add to Cart</button>
  </div>
 </div>
   </section>

</template>

<script>
import axios from "axios";

axios.defaults.headers.common['Authorization'] = 'Bearer 66xif6wjoj74y5mpyd3rslfutnyens8e';
axios.defaults.headers.post['Content-Type'] = 'application/json';



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
          .get("https://store.therelated.com/rest/V1/products?fields=items[id,sku,name,price,visibility,custom_attributes,extension_attributes]&searchCriteria[pageSize]=100&searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=3&searchCriteria[filter_groups][0][filters][0][condition_type]=eq")
          .then(response => (this.products =response.data))
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
.product-card{
  padding: 20px 20px;
    background-color: crimson;
    display: inline-block;
}
.products img{
  border-radius: 12px;
}
 .product-info ul li{
    display: flex;
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
  display: flex;
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
  display: flex;
  font-family: sans-serif;
  font-size: 16px;
  color:black;
}


</style>