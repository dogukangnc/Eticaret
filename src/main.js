import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


import Product from './components/Product';
import Giris from './components/Giris';
import Mainpage from './components/Mainpage';
import ProductDetails from './components/ProductDetails';


const routes=[

 
  {path:'/giris' , component: Giris},
  {path:'/:title/:id' , component: Product},
  {path:'/' , component: Mainpage},
  {path:'/anasayfa' , component: Mainpage},
  {path:'/:sku' , component: ProductDetails},

]
  
const router = new VueRouter({
        routes,
        mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
  
}).$mount('#app')
