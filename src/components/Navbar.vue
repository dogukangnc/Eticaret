<template>
  <nav>
    <div class="menu-item">
      <router-link to="/anasayfa">Home Page</router-link>
    </div>

    <div
      v-for="categori in categories.children_data"
      :key="categori.id"
      v-on:click="getCategoriesid(gelenCatid)"
    >
      <Dropdown
        @data="gelenCatid = $event"
        :title="categori.name"
        :items="categori.children_data"
      />
    </div>
    <div class="basket">
      <router-link
        to="/basket"
        class="fa fa-shopping-cart"
        aria-hidden="true"
      ></router-link>
    </div>

    <div class="menu-search">
      <input type="text" placeholder="Search.." />
      <i class="fa fa-search" aria-hidden="true"></i>
    </div>
    <div class="login">
      <router-link to="/giris">Giriş Yap..</router-link>
    </div>
  </nav>
</template>

<script>
import Dropdown from "./Dropdown";
import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer 66xif6wjoj74y5mpyd3rslfutnyens8e";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default {
  name: "navbar",
  components: {
    Dropdown,
  },

  created() {
    this.getCategories();
  },

  data() {
    return {
      categories: [],
      errors: [],
      gelenCatid: "",
    };
  },
  methods: {
    getCategories() {
      axios
        .get("https://store.therelated.com/rest/V1/categories/")
        .then((response) => (this.categories = response.data))
        .catch((error) => {
          this.errors.push(error);
        });
    },
    getCategoriesid(cat_id) {
      this.$emit("data", cat_id);
    },
  },
};
</script>
<style>
nav {
  display: flex;
  justify-content: center;
  padding: 20px;
  column-gap: 10px;
}

nav .menu-item {
  color: #fff;
  padding: 10px;
  transition: 0.4s;
  border-radius: 8px;
  display: block;
  float: left;
}
nav .login {
  color: #fff;
  border-bottom: 3px solid transparent;
  transition: 0.4s;
  display: inline-table;
}
nav .menu-item.active,
nav .menu-item:hover {
  color: #632424;
}
nav .login.active,
nav .login:hover {
  color: #632424;
}
nav .menu-item a {
  color: inherit;
  font-weight: 600;
  text-decoration: none;
}
nav .login a {
  color: inherit;
  text-decoration: none;
}
nav .menu-search {
  width: 240px;
  display: inline-table;
  padding: 8px 20px;
}
nav .menu-search i {
  color: #fff;
}

.menu-search i {
  margin-left: 3px;
}
.basket {
  display: inline-table;
}
.basket a {
  color: rgb(38, 206, 206);
  font-size: 28px;
  padding-top: 7px;
  text-decoration: none;
}
</style>