<template>
  <HomeView/>
</template>


<script>
import HomeView from './views/HomeView.vue';




export default {
  name: 'App',
  components: {
    HomeView
},

 

  data(){
    return{

    }
  },

  



  
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  
  
}
</style>
