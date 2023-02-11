import axios from 'axios'
import { createStore } from 'vuex'

import {actions,mutations} from '../utils/names'

export default createStore({
  state: {
    products:[],
    
    products_count:[],
   
    
  },
  
  mutations: {
    [mutations.SET_PRODUCTS_ALL]:(state,products)=>{
      state.products = products
    },

    [mutations.SET_PRODUCTS_LENGTH]:(state,products_count)=>{
      state.products_count = products_count
    },

    


  },
  actions: {
    [actions.GET_PRODUCTS_ALL]({commit},params){
      const {page,brand} = params
      return axios.get(`http://localhost:8000/products?_limit=4`,{
        params:{  
          _page:page,
          brand:brand
        }
      })
      .then((response)=>{
       
        commit(mutations.SET_PRODUCTS_ALL,response.data);
        
        console.log(response.data)
        
      })
    },
    
   

   [actions.GET_PRODUCTS_LENGTH]({commit},params){
      const {brand} = params
     
      return axios.get('http://localhost:8000/products',{
        params:{
          brand:brand
        }
      })
      .then((respon)=>{
        commit(mutations.SET_PRODUCTS_LENGTH,respon.data);
        
        console.log(respon.data)
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
