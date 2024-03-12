<template>
  <VueLoading :active="isLoading">
    <div class="loading-img-bg">
      <img class="loading-img" src="@/assets/image/icon.png" alt="">
    </div>
  </VueLoading>
    <div class="container my-35">
      <h2 class="h4 text-center mb-10">已付款完成！</h2>
      <div class="row justify-content-center">
        <div class="col-lg-5 ">
          <h2 class="h5 mb-3">購買商品</h2>
          <table class="table align-middle table-light p-5">
            <thead>
              <tr >
                <th class="thead-text">商品</th>
                <th class="text-center thead-text">數量</th>
                <th class="text-end thead-text">小計</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="productsData"> 
                <tr v-for="item in productsData" :key="item.id">
                  <td height="100">
                    <img :src="item.product.imageUrl" :alt="item.product.title" width="50" class="rounded-2 me-5">
                    <span>{{ item.product.title }}</span>
                  </td>
                  <td class="text-center ">{{ item.qty }}</td>
                  <td class="text-end fs-14">NT.{{ (item.product.price*item.qty).toLocaleString() }}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <div class="col-lg-5">
          <h2 class="h5 mb-3">顧客資料</h2>
          <table class="table table-light mb-10 mb-md-5 table-borderless">
            <tbody>
              <tr class="fs-14">
                <th class="fw-normal" width="100">姓名</th>
                <td>{{ user.name }}</td>
              </tr>
              <tr class="fs-14">
                <td>Email</td>
                <td>{{ user.email }}</td>
              </tr>
              <tr class="fs-14">
                <td>收件人手機</td>
                <td>{{ user.tel }}</td>
              </tr>
              <tr class="fs-14">
                <td >收件人地址</td>
                <td>{{ user.address }}</td>
              </tr>
              <tr class="fs-14">
                <td >付款狀態</td>
                <td class="text-success">付款完成</td>
              </tr>
            </tbody>
          </table>
          <div class="text-end">
            <router-Link type="button" class="addcart-btn-hover w-50 text-center" to="/">返回首頁</router-Link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    const { VITE_URL , VITE_PATH } = import.meta.env
    export default {
      data() {
        return {
          orderId:'',
          user:{},
          productsData :[],
          total:0,
          isLoading:true
          }
      },
      methods: {
        //顯示購買人資訊
        showUserData(){
          const api = `${VITE_URL}/api/${VITE_PATH}/order/${this.orderId}`
  
          this.$http.get(api)
          .then(res=>{
            this.user = res.data.order.user
            this.productsData = res.data.order.products
            this.total = res.data.order.total
          })
          .catch(err=>{
            alert(err.response.data.message)
          })
          .finally(()=>{
            this.isLoading = false
          })
        }
      },
      mounted() {
        //取得localstorage的訂單編號
        this.orderId = localStorage.getItem('orderId')
          
        this.showUserData()
  
      },
  }
  </script>