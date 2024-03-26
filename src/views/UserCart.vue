<template>
  <VueLoading :active="isLoading">
    <div class="loading-img-bg">
      <img class="loading-img" src="@/assets/image/icon.png" alt="">
    </div>
  </VueLoading>
  <div class="container my-35">
    <router-link class="d-inline-block my-8 link-secondary" to="/productslist"><i class="bi bi-arrow-left me-2"></i>返回商品列表</router-link>
    <div class="row">
      <h2 class="h5 mb-5">購物清單</h2>
      <div class="col-lg-8 d-none d-md-block">
        <table class="table align-middle table-light">
          <thead>
            <tr >
              <th class="text-center thead-text">商品</th>
              <th class="text-center thead-text">數量</th>
              <th class="text-end thead-text">單價</th>
              <th class="text-end thead-text">小計</th>
              <th class="text-center thead-text">刪除</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cartData">
              <tr v-for="item in cartData" :key="item.id">
                <td height="100">
                  <img :src="item.product.imageUrl" :alt="item.product.title" width="100" class="rounded-2 me-5">
                  <span>{{ item.product.title }}</span>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <button class="btn btn-primary text-white" type="button" :disabled="item.qty ===1" @click="changeCart(item,item.qty-1)"><i class="bi bi-dash"></i></button>
                    <span  class="form-control text-center text-secondary">{{ item.qty }}</span>
                    <button class="btn btn-primary text-white" type="button"><i class="bi bi-plus" @click="changeCart(item,item.qty+1)"></i></button>
                  </div>
                </td>
                <td class="text-end">
                  <div class="fs-12 text-decoration-line-through">{{ (item.product.origin_price).toLocaleString() }}</div>
                  <div class="fs-14">NT.{{ (item.product.price).toLocaleString() }}</div></td>
                <td class="text-end fs-14">NT.{{ (item.product.price*item.qty).toLocaleString() }}</td>
                <td class="text-center">
                  <span class="text-danger" @click="deleteItem('single',item)" style="cursor:pointer ;">
                    <i class="bi bi-trash-fill"></i>
                  </span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
        <div v-if="cartData.length<1" class="text-center">
          <p class="mb-0">購物車內還沒有商品</p>
        </div>
      </div>
      <!-- 手機版 -->
      <div class="d-md-none">
        <table class="table align-middle table-light">
          <thead>
            <tr>
              <th class="text-center thead-text">商品</th>
              <th class="text-end thead-text">單價</th>
              <th class="text-end thead-text">小計</th>
              <th class="text-center thead-text">刪除</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cartData">
              <tr v-for="item in cartData" :key="item.id">
                <td height="100" class="text-center py-5">
                  <img :src="item.product.imageUrl" :alt="item.product.title" width="120" class="rounded-2 mb-2">
                  <div class="mb-5">{{ item.product.title }}</div>
                  <div class="input-group input-group-sm">
                    <button class="btn btn-primary text-white" type="button" :disabled="item.qty ===1" @click="changeCart(item,item.qty-1)"><i class="bi bi-dash"></i></button>
                    <span  class="form-control text-center text-secondary">{{ item.qty  }}</span>
                    <button class="btn btn-primary text-white" type="button"><i class="bi bi-plus" @click="changeCart(item,item.qty+1)"></i></button>
                  </div>
                </td>
                <td class="text-end">
                  <div class="fs-14 text-decoration-line-through">{{ (item.product.origin_price).toLocaleString() }}</div>
                  <div>NT {{ (item.product.price).toLocaleString() }}</div></td>
                <td class="text-end">NT{{ (item.product.price*item.qty).toLocaleString() }}</td>
                <td class="text-center">
                  <span class="text-danger" @click="deleteItem('single',item)" style="cursor:pointer ;">
                    <i class="bi bi-trash-fill"></i>
                  </span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
        <div v-if="cartData.length<1" class="text-center">
          <p class="mb-0">購物車內還沒有商品</p>
        </div>
      </div>
      <!-- 手機版結束 -->
      <div class="col-lg-4">
        <!-- 優惠券 -->
        <div class="mb-10">
          <div class="bg-light border border-2 border-primary w-100 rounded-2 mb-5 mt-10 mt-md-0 px-5 py-2 fs-14">限今日輸入優惠碼「today」，享整單9折！</div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="輸入優惠碼" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="couponCode">
            <button class="btn btn-secondary fs-14" type="button" id="button-addon2" @click="addCoupon(couponCode)">套用優惠碼</button>
          </div>
        </div>
          <div v-if="final_total !== total" class="mb-5 mt-10 mt-md-0 fs-14 text-primary"><i class="bi bi-check-lg"></i>已套用優惠碼！</div>
          <table class="table table-borderless table-light mb-10 mb-md-5">
            <thead>
              <tr class="thead-text border-bottom">
                <th>訂單小計</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr class="fs-14">
                <td>合計金額</td>
                <td>{{ total.toLocaleString() }} 元</td>
              </tr>
              <tr class="border-bottom fs-14">
                <td>優惠折抵</td>
                <td>{{ total-final_total }} 元</td>
              </tr>
              <tr class="fw-bold">
                <td class="text-primary">總金額</td>
                <td class="text-primary">{{ final_total.toLocaleString() }} 元</td>
              </tr>
            </tbody>
          </table>
          <a href="#" type="button" class="addcart-btn-hover w-100 text-center" @click.prevent="checkOut">前往結帳</a>
        </div>
      </div>
    </div>
    <!-- 加入購物車吐司 -->
    <div class="toast-style position-fixed end-0 p-3 border-0 d-flex justify-content-end" style="z-index: 11">
      <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-body d-flex justify-content-between">
          <p class="mb-0 fw-bold d-flex align-items-center">還沒有選購商品！</p>
          <router-link type= "button" class="btn bg-primary fs-12" to="/productslist">返回商品一覽</router-link>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  </div>
</template>

    
<script>
  const { VITE_URL , VITE_PATH } = import.meta.env
  import Swal from 'sweetalert2';
  import userCartStore from "../stores/userCartStore.js";
  import { mapState ,mapActions } from 'pinia';
  import * as bootstrap from 'bootstrap';

export default {
    data() {
        return {
          couponCode:'', //輸入的優惠碼
          isLoading:false,
        }
    },
    computed:{
      ...mapState(userCartStore,['cartData','addCartQty','final_total','total'])
    },
    methods:{
      //顯示購物車
      ...mapActions(userCartStore,['showCart']),
        //更新購物車
        changeCart(item,cartQty){
          this.isLoading = true
            this.$http.put(`${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`,
            {
                data:{
                    product_id:item.product_id,
                    qty:parseInt(cartQty)
                }
            })
            .then(()=>{
                this.showCart()
            })
            .catch(err=>{
                alert(err.response.data.message);
            })
            .finally(()=>{
              this.isLoading = false
            })
        },
        //刪除購物車
        deleteItem(status,item){
          Swal.fire({
            title: "確定刪除商品嗎?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#81CFDC",
            cancelButtonColor: "#707070",
            cancelButtonText: "取消",
            confirmButtonText: "確定",
            imageWidth: '50',
            width: 350,
          }).then((result) => {
            if (result.isConfirmed) {
              this.isLoading = true
              let api = `${VITE_URL}/api/${VITE_PATH}/carts`
              if(status === 'single'){
                api = `${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`
              }
              this.$http.delete(api)
              .then(res=>{
                  this.showCart()
                  console.log(res);
              })
              .catch(err=>{
                  alert(err.response.data.message)
              })
              .finally(()=>{
                this.isLoading = false
              })
              }
            });
        },
        addCoupon(code){
          const api = `${VITE_URL}/api/${VITE_PATH}/coupon`

          this.$http.post(api , {
            data:{
              code:code
            }
          })
          .then(res=>{
                  this.showCart()
                  console.log(res);
              })
              .catch(err=>{
                  alert(err.response.data.message)
              })
              .finally(()=>{
                this.isLoading = false
              })
        },
        checkOut(){
          if(this.cartData.length === 0){
            this.showToast()
          }else{
            this.$router.push('checkout')
          }
        },
        //初始化吐司
        initToast(){
            let toastLiveExample = document.getElementById('liveToast')
            this.toastInstance = new bootstrap.Toast(toastLiveExample)
        },
        showToast(){
            this.toastInstance.show()
        },
    },
    mounted() {
        //取得購物車列表
        this.showCart()

        //初始化吐司模組
        this.initToast()
    },
    }
</script>

<style lang="scss">
  @import '../assets/all.scss';

</style>