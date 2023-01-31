import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products:[],
    
    products_count:[],
    
    
  },
  
  mutations: {
    SET_PRODUCT_TO_VUEX:(state,products)=>{
      state.products = products
    },

    SET_PRODUCT_ALL_VUEX:(state,products_count)=>{
      state.products_count = products_count
    },

    


  },
  actions: {
    async getProductsFromApi({commit},page){
      // console.log(params)
      // const {page,brand} = JSON.parse(params)

      return axios.get('http://localhost:8000/products?_limit=4',{
        params:{  
          _page:page
        }
      })
      .then((response)=>{
       
        commit('SET_PRODUCT_TO_VUEX',response.data);
        
        console.log(response.data)
        
      })
    },
    
   

    getProductsAllApi({commit}){
      // const {brand} = JSON.parse(params)
      console.log ();
      return axios.get('http://localhost:8000/products',{
        // params:{
        //   brand:brand
        // }
      })
      .then((respon)=>{
        commit('SET_PRODUCT_ALL_VUEX',respon.data);
        
        // console.log(respon.data)
      })
    },

    
  
  },
  getters: {
    PRODUCTS(state){
      return state.products
    },
    PAGES(state){
      return state.products_count
    },

   
  },
  modules: {
  }
})
