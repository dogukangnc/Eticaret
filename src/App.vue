<template>
  <div id="app">
  <header> <Navbar /> </header>
   <main>
   <router-view></router-view>
  </main>
  
 
   
  </div>
</template>

<script>
import Navbar from './components/Navbar';


export default {
  name: 'App',
  components: {
        Navbar,
      
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
  width:100%;
  background-color: rgb(206, 162, 162);
  padding: 25px;
}
main{
  width: 100%;
  background-color: rgb(199, 146, 146);
  
}
</style>