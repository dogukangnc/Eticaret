<template>
  <div id="app">
  <header> <Navbar @data="cat_id=$event" v-on:click="getCategoriesid(cat_id)"/>  </header>
  
   <main>
    <p>catid: {{cat_id}}</p>

    <router-view :catid="cat_id"></router-view>

  </main> 
  </div>
</template>

<script>
import Navbar from './components/Navbar';


export default {
  name: 'App',
  components: {
        Navbar,
       
      
  },
   data () {
    return {
      cat_id:"3"
    }
},
methods:{
  
    getCategoriesid(cat_id){

        this.$emit("data",cat_id);
       
   },
}
}
</script>

<style>
#app{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family:'montserrat',sans-serif;
}
header{
  width: 100%;
    background-color: rgb(206, 162, 162);
    padding-top: 25px;
}
main{
  margin-top: 20px;
  width: 100%;
  background-color: rgb(199, 146, 146);
  
}
</style>