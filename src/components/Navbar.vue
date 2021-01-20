<template>
 <nav>
  <div class="menu-item"><a href="#">Whats New</a></div> 
  <Dropdown title="Men" :items="women" />
  <Dropdown title="Women" :items="women" />  
  <div class="menu-search">      
      <input type="text" placeholder="Search..">
      <i class="fa fa-search" aria-hidden="true"></i>
  </div>
  <div class="login"><a href="#">Giriş Yap...</a></div>
  
 </nav>
</template>

<script>

import Dropdown from './Dropdown';

export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  data () {
    return {
      women: [
        {
          title: 'Short',
          link: '#'
        },
        {
          title: 'Watches',
          link:'#'
        },
        {
          title: 'Blabla',
          link: '#'
        }
      ]
      
    }
  }

}
</script>
<style>
nav{
    display: flex;
    align-items: center;
    justify-content: center;

}
nav .menu-item{
    color:#FFF;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
    
}
nav .login{
    color:#FFF;
    padding: 10px 20px;
    position: absolute;
    right: 400px;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
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
    text-decoration:none;
   
}
nav .login a{
    color: inherit;
    text-decoration:none;
   
}
nav .menu-search{
    position: absolute;
    right: 100px;
}
nav .menu-search i{
    color:#FFF;
    
}
nav .menu-search.active,
nav .menu-search:hover {
    background-color:#FF5858;
    
    }
    

</style>
