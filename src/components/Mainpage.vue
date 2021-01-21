<template>
 <main id="mainview" class="mainPage">
     <div class="firstbox">
      <a href="#">
        <img src="https://ktnimg.mncdn.com/mnresize/406/534/product-images/1KAM01180NK999/1500Wx1969H/1KAM01180NK999_G01_zoom1_V02.jpg" alt="">    
        
          <h1>Yeni Trend Erkek Ürünleri</h1>
          <p class="reklam-info">2021'in Son Moda Ürünleri Burada</p>
        
      </a>
     </div>
      <div class="firstbox2">
      <a href="#">
        <img src="https://www.berrakicgiyim.com.tr/berrak-2974-bayan-fitness-takimi-bayan-spor-giyim-berrak-48868-15-B.jpg" alt="">    
        
          <h1>Yeni Trend Kadın Ürünleri</h1>
          <p class="reklam-info">İndirmli Son Moda Ürünler Burada!</p>
        
      </a>
     </div>
      <div class="firstbox">
      <a href="#">
        <img src="http://blog.maxioutlet.com/wp-content/uploads/2016/03/fitness-urunleri-e1457584509384.jpg" alt="">    
        
          <h1>Fitness Ürünleri</h1>
          <p class="reklam-info">Spor Hayatınızın Bir Parçasıysa Birbirinden Farklı Fitness Ürünleri Burada</p>
        
      </a>
     </div>
     
   </main>
</template>

<script>
export default {
  name: 'Mainpage',
  components: {
   
  }
}
</script>
<style>
main{
  width:100%;
  height:100%;

}
main .firstbox{
  position: relative;
  width: 1000px;
  height: 480px;
}
main .firstbox2{
  position: relative;
  width: 100%;
  height: 480px;
}
main .firstbox a{
   width: 1000px;
  height: 480px;
}
main .firstbox2 a{
  position: absolute;
  right: 0px;
   width: 1000px;
  height: 480px;
}
.firstbox a img{
  
  width: 480px;
  height: 480px;
  border-radius: 50%;
}
.firstbox2 a img{
  position: absolute;
  right: 0px;
  width: 480px;
  height: 480px;
  border-radius: 50%;
}
.firstbox h1{
position: absolute; 
   top: 150px; 
   left: 500px;
   color:rgb(20, 95, 100); 
 
}
.firstbox2 h1{
position: absolute; 
   top: 150px; 
   right: 500px;
   color:rgb(141, 94, 94); 
 
}
.firstbox p{
   
   position: absolute; 
   top: 200px; 
   left: 560px;
   text-align: center;
    color:rgb(20, 95, 100); 
   
 
}
.firstbox2 p{
position: absolute; 
   top: 200px; 
   right: 560px;
   color:rgb(141, 94, 94); 
   text-align: center;
 
}
</style>