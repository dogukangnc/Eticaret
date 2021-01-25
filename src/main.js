import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


import Product from './components/Product';

import Giris from './components/Giris';
import Women from './components/Women';

const routes=[

  {path:'/anasayfa' , component: Product}, 
  {path:'/' , component: Product},
  {path:'/giris' , component: Giris},
  {path:'/Urunsayfa' , component: Product},
  {path:'/Women' , component: Women},

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
