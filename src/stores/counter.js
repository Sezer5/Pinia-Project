import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter',{
  
  state:()=>({
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
      }
  }

  
})
