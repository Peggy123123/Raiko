import { defineStore } from 'pinia';
import axios from 'axios'
const { VITE_URL , VITE_PATH } = import.meta.env


export default defineStore('userCartStore', {
  state: () => ({
    cartData: [],
    addCartQty:1,
    final_total:0,
    total:0,
  }),
  actions:{
    showCart(){
        this.isLoading = true
        const api = `${VITE_URL}/api/${VITE_PATH}/cart`

        axios.get(api)
          .then(res=>{
            this.cartData = res.data.data.carts
            this.final_total = res.data.data.final_total
            this.total = res.data.data.total
          })
          .catch(err=>{
            alert(err.response.data.message)
          })
          .finally(()=>{
            this.isLoading = false
          })
      },
  },
})
