import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


import Product from './components/Product';
import Mainpage from './components/Mainpage';
import Giris from './components/Giris';

const routes=[

 
  {path:'/anasayfa' , component: Mainpage}, 
  {path:'/' , component: Mainpage},
  {path:'/giris' , component: Giris},
  {path:'/Urunsayfa' , component: Product},

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
