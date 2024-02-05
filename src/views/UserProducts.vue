<template>
  <VueLoading :active="isLoading"/>
    <div class="container">
      <div class="mt-5 pt-5">
        <table class="table align-middle mt-5">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in productData" :key="item.id">
              <td style="width: 200px">
                <div style="height: 100px; background-size: cover; background-position: center" :style="{ 'background-image': 'url(' + item.imageUrl + ')' }"></div>
              </td>
              <td>
                {{ item.title }}
              </td>
              <td>
                <!-- <div class="h5">{{ item.origin_price }} 元</div> -->
                <del class="h6">原價 {{ item.origin_price }} 元</del>
                <div class="h5">現在只要 {{ item.price }} 元</div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <!-- <button type="button" class="btn btn-outline-secondary" @click="opensingleProduct(item)"> -->
                    <RouterLink :to="`/productslist/${item.id}`">查看更多</RouterLink>
                    
                  <!-- </button> -->
                  <button type="button" class="btn btn-outline-danger" ref="loadingAddCart" @click="addCart(item)">
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
</template>

<script>
const { VITE_URL , VITE_PATH } = import.meta.env

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

export default {
    data(){
        return {
            productData:[],
            isLoading: true,
            fullPage: true,
        }
    },
    mounted(){
      //取得產品列表
      const url  =`${VITE_URL}/api/${VITE_PATH}/products/all`
      this.isLoading = true;
      this.$http.get(url)
        .then(res=>{
            this.productData = res.data.products
        })
        .catch(err=>{
            alert(err.response.data.message)
        })
        .finally(()=>{
          this.isLoading = false
        })

    },
    methods: {
      //加入購物車
      addCart(item,qty=1){
        const api =`${VITE_URL}/api/${VITE_PATH}/cart`
        this.isLoading = true;
          this.$http.post(api, {
            data:{
                product_id:item.id,
                qty:qty
            }
          })
          .then(res=>{
              alert(res.data.message)
              // this.$refs.ProductComponent.hideModel() //關閉互動視窗
              // this.addCartQty = 1 //購物車數量改回1
              // this.$refs.ProductComponent.qty = 1
          })
          .catch(err=>{
              alert(err)
          })
          .finally(()=>{
            this.isLoading = false;

          })
      },
  }
}

</script> 