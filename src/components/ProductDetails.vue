<template>
  <div class="container">
    <div class="product-detail">
      <img
        :src="`https://store.therelated.com/media/catalog/product${product_detail.media_gallery_entries[0].file}`"
        width="500"
      />
      <div class="üründetay">
        <div class="title">{{ product_detail.name }}</div>
        <h4>Size</h4>
        <span>
          <a href="#">S</a>
          <a href="#">M</a>
          <a href="#">L</a>
          <a href="#">XL</a>
        </span>
        <h4>Color</h4>
        <div class="color">
          <button
            style="
              background: #ff0000 no-repeat center;
              background-size: initial;
            "
          ></button>
          <button
            style="
              background: #000000 no-repeat center;
              background-size: initial;
            "
          ></button>
          <button
            style="
              background: #ffffff no-repeat center;
              background-size: initial;
            "
          ></button>
        </div>

        <div class="price">{{ product_detail.price }}.00$</div>
        <button class="Sepet" v-on:click="adToCart(product_detail.sku)">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductDetail",
  data() {
    return {
      sku: "",
      product_detail: [],
      errors: [],
      data: "",
      cart: [],
    };
  },
  created() {},

  watch: {
    sku() {
      console.log("Data Değişti" + this.sku);
      this.getProductDetail();
      // isOpen datasındaki değişliği yakaladık.
    },
  },
  mounted() {
    window.addEventListener("sku-localstorage-changed", (event) => {
      this.data = event.detail.storage;
      this.sku = this.data;
      console.log(this.sku);
    });
  },

  methods: {
    getProductDetail() {
      console.log(this.sku);
      axios
        .get(`https://store.therelated.com/rest/V1/products/${this.sku}`)
        .then((response) => (this.product_detail = response.data))
        .catch((error) => {
          this.errors.push(error);
        });
    },
    adToCart(basket) {
      this.cart.push(basket);
      console.log(this.cart);
    },
  },
};
</script>
<style>
.product-detail {
  width: 1000px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin: auto;
  background-color: rgb(251 217 217);
}

.product-detail img {
  padding: 20px;
  height: 600px;
  margin-top: 100px;
}
.üründetay {
  padding-top: 120px;
}
.title {
  font-size: 28px;
  padding-top: 20px;
  font-family: cursive;
}
.price {
  padding-top: 20px;
  margin: 15px 0;
  font-size: 24px;
  color: #ff2877;
  font-weight: bold;
  margin: 66px 0;
}
.description {
  padding: 20px;
}
.Sepet {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  margin:0;
}
.Sepet:hover {
  background-color: #59ac5c;
  color: white;
}
.üründetay span {
  display: block;
  overflow: hidden;
  margin: 15px 0;
}
.üründetay span a {
  display: block;
  float: left;
  padding: 2px 4px;
  margin-right: 6px;
  border: 2px solid darkred;
  color: darkred;
  font-size: 20px;
  border-radius: 8px;
  text-decoration: none;
}
.color {
  margin: 15px 0;
}
.color button {
  display: block;
  width: 25px;
  height: 25px;
  float: left;
  margin-right: 10px;
  border-radius: 8px;
}
</style>