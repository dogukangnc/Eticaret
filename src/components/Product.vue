<template>
  <section class="products">
    <div v-for="product in products.items" :key="product.id" class="product-card" v-on:click="getProductDetail(product.sku)">
        <router-link class="link" :to="'/' + product.sku">  
        <img
          :src="`https://store.therelated.com/media/catalog/product${product.custom_attributes[0].value}`"
          width="250"
        />

        <div class="product-title">
          <h1>{{ product.name }}</h1>
        </div>
        </router-link>
        <div class="product-info">
          <ul>
            <!--  <li>{{product.color}}</li>  -->
            <li>{{ product.price }}.00$</li>
          </ul>
        </div>
        <button v-on:click="adToCart(product)">Add to Cart</button>
      
    </div>
  </section>
</template>

<script>
import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer 66xif6wjoj74y5mpyd3rslfutnyens8e";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default {
  name: "Product",
  props: ["title"],
  data() {
    return {
      cart: [],
      products: [],
      errors: [],
      cat_id:"",
      data:""
    };
  },

  created() {
     
     window.addEventListener("foo-key-localstorage-changed", (event) => {
      this.data = event.detail.storage;
      this.cat_id = this.data;
      console.log(this.cat_id);
      
    });

  },

  watch: {
    cat_id() {
      console.log("Data Değişti");
      this.getProduct();
      // isOpen datasındaki değişliği yakaladık.
    },
  },

  mounted() {
   
  },

  methods: {
     getProduct() {
      console.log(this.data);
      axios
        .get(
          `https://store.therelated.com/rest/V1/products?fields=items[id,sku,name,price,visibility,custom_attributes,extension_attributes]&searchCriteria[pageSize]=100&searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${this.cat_id}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`
        )
        .then((response) => (this.products = response.data))
        .catch((error) => {
          this.errors.push(error);
        });
    },

    adToCart(product) {
      this.cart.push(product);
    },
    getProductDetail(product_sku){

      console.log(product_sku);
      localStorage.setItem("sku", product_sku);
       window.dispatchEvent(
        new CustomEvent("sku-localstorage-changed", {
          detail: {
            storage: localStorage.getItem("sku"),
          },
        })
      );
    }
  },
};
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 30px 300px;
  grid-gap: 30px;
}
.product-card {
  padding: 20px 20px;
 background-color: aliceblue;
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: arial;
}
.products img {
  border-radius: 12px;
}
.product-info ul li {
  display: flex;
  float: left;
  list-style-type: none;
  padding: 5px;
  font-style: inherit;
  position: relative;
  left: -30px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
}

.products button {
   border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
.products button:hover {
  background-color: #59ac5c;
  color: white;
}
.product-title h5 {
  display: flex;
  font-family: sans-serif;
  font-size: 16px;
  color: black;
}
.link{
  color: #000;
  text-decoration: none;
}
</style>