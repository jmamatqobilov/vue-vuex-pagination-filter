<template>
    <div class="product-box">
      <div class="">
        <div class="">
          <img :src="require('../assets/1.png')" width="80" height="80"/>
        </div>
        <div class="product-name-brand">
          <div class="">{{ product.name }}</div>
          <div class="">{{ product.brand }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
 
  export default {
    name: 'ProductCard',
    components: {
      
    },

    props:{
      product:Object
    }
  }
  </script>


<style lang="scss">
  .product-box{
    width: 160px;
    height: 180px;
    border: solid 1px red;
    margin: 20px;
    .product-name-brand{
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>