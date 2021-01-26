<template>
 <nav>

  <div class="menu-item"><router-link to="/anasayfa">Home Page</router-link></div> 
    
  
     <div v-for="categori in categories.children_data"
    :key="categori.id" v-on:click="getCategoriesid(gelenCatid)">
   
         <Dropdown @data="gelenCatid=$event" :title="categori.name" :items="categori.children_data" />
                    
       </div> 
        <p>Gelen cat: {{gelenCatid}}</p>   
  <div class="menu-search">      
      <input type="text" placeholder="Search..">
      <i class="fa fa-search" aria-hidden="true"></i>
  </div>
  <div class="login">
    <router-link to="/giris">Giriş Yap..</router-link></div>
  
 </nav>
</template>

<script>
import Dropdown from './Dropdown';
import axios from "axios";



axios.defaults.headers.common['Authorization'] = 'Bearer 66xif6wjoj74y5mpyd3rslfutnyens8e';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default {
  name: 'navbar',
  components: {
    Dropdown,
  },

   created() {

      this.getCategories();
     
    },
  
   
  data () {
    return {
     
      categories:[],
      errors:[],
      gelenCatid:"", 
    }
  },
  methods:{
 
  getCategories() {

        axios
          .get("https://store.therelated.com/rest/V1/categories/")
          .then(response => (this.categories =response.data))
          .catch(error => {
            this.errors.push(error);
              
          });
           
              
      },
        getCategoriesid(cat_id){

        this.$emit("data",cat_id);
       
   },
     
   
    

}
}
</script>
<style>
nav{
    display: flex;
    justify-content: center;
    padding: 20px;
    column-gap: 10px;
}
 
nav .menu-item{
    color: #FFF;
    padding: 10px;
    
    transition: 0.4s;
    border-radius: 8px;
    background-color: #dcc1c1cc;
    display: block;
    float: left;
    width: 120px;
    margin-left: 15px;
    display: inline-table;
}
nav .login{
    color:#FFF;
    border-bottom: 3px solid transparent;
    transition: 0.4s;
    display: inline-table;
}
nav .menu-item.active,
nav .menu-item:hover {
    background-color: #444;
    border-bottom-color: #FF5858;
}
nav .login.active,
nav .login:hover {
    background-color: #444;
    border-bottom-color: #FF5858;
}
nav .menu-item a{
    color: inherit;
    font-weight: 600;
    text-decoration:none;
   
}
nav .login a{
    color: inherit;
    text-decoration:none;
   
}
nav .menu-search{
  width: 240px;
  display: inline-table;
  padding: 8px 20px;
}
nav .menu-search i{
    color:#FFF;
    
}
nav .menu-search.active,
nav .menu-search:hover {
    background-color:#FF5858;
    
    }
   .menu-search i{
  
     margin-left: 3px;
   }
    
</style>