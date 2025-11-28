import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter',{
  
  state:()=>({
    posts:[],
      counter:7,
      car:{
          brand:'Fiat',
          color:'Beyaz'
      }
  }),

  getters:{
      getCounter(state){
        return state.counter;
      }
  },
  actions:{
      add(){
        this.counter++;
      },
      subtract(){
        this.counter--;
      },

      async getPosts(){
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
         this.posts = response.data;
      }
  }

  
})
