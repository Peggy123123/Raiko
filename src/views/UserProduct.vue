<template>
  <VueLoading :active="isLoading">
    <div class="loading-img-bg">
      <img class="loading-img" src="@/assets/image/icon.png" alt="">
    </div>
  </VueLoading>
    <div class="container py-30 py-md-35">
        <div class="row">
            <div class="col-md-6">
                <div class="d-flex justify-content-center">
                    <img :src="picture" :alt="productData.title" class="ing-fluid w-75 rounded-3">
                    <!-- 手機版縮圖 -->
                    <div class="d-flex flex-column d-md-none align-items-center">
                        <img :src="productData.imageUrl" alt="主圖1" class="w-75 mb-2 rounded-3" @click="picture = productData.imageUrl" style="cursor:pointer;">
                        <template v-for="item in productData.imagesUrl" :key="item">
                            <img :src="item" alt="" class="w-75 mb-2 rounded-3" @click="picture = item" style="cursor:pointer;">
                        </template>
                        </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex flex-column justify-content-between h-100 mt-10 mt-md-0">
                    <div>
                        <h2 class="mb-3">{{ productData.title }}</h2>
                        <p>{{ productData.content }}</p>
                        <div>
                            <small class="text-decoration-line-through">NT. {{ productData.origin_price }}</small>
                            <p class="mb-0 text-primary fw-bold h4">NT. {{ productData.price }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="input-group mb-3 pad-width-change">
                            <button class="btn btn-primary text-white" type="button" :disabled="addCartQty ===1" @click="addCartQty -=1"><i class="bi bi-dash"></i></button>
                            <span  class="form-control text-center text-secondary">{{ addCartQty }}</span>
                            <button class="btn btn-primary text-white" type="button"><i class="bi bi-plus" @click="addCartQty ++"></i></button>
                        </div>
                        <button type="button" class="addcart-btn-hover pad-width-change mt-5" @click.stop="addCart">加入購物車</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 電腦版縮圖 -->
        <div class="row d-none d-md-block">
            <div class="col-md-6">
                <div class="text-center">
                    <img :src="productData.imageUrl" alt="主圖1" class="product-image-width me-2 mt-3 rounded-3 img-hover" @click="picture = productData.imageUrl" style="cursor:pointer;">
                    <template v-for="item in productData.imagesUrl" :key="item">
                        <img :src="item" alt="主圖" class="product-image-width me-2 mt-3 rounded-3 img-hover" @click="picture = item" style="cursor:pointer;">
                    </template>
                </div>
            </div>
        </div>
        <!-- 頁籤 -->
    </div>
    <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
        <li class="nav-item nav-item-width" role="presentation">
            <button class="nav-link active w-100 text-secondary" id="home-tab" data-bs-toggle="tab" data-bs-target="#productIformation" type="button" role="tab" aria-controls="home" aria-selected="true">商品資訊</button>
        </li>
        <li class="nav-item w-50" role="presentation">
            <button class="nav-link w-100 text-secondary" id="profile-tab" data-bs-toggle="tab" data-bs-target="#detail" type="button" role="tab" aria-controls="profile" aria-selected="false">注意事項</button>
        </li>
        </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="productIformation" role="tabpanel" aria-labelledby="home-tab">
            <div class="container my-20">
                <h3 class="h5 fw-bold">商品介紹</h3>
                {{ productData.description }}
            </div>
        </div>
        <div class="tab-pane fade" id="detail" role="tabpanel" aria-labelledby="profile-tab">
            <div class="container my-20">
                <div class="row justify-content-center">
                    <div class="col-md-5 fs-14">
                        <h3 class="h5 fw-bold">下單注意事項</h3>
                        <p class="mb-0">請在下單前仔細閱讀商品頁面上的資訊，包括商品規格、尺寸、顏色等，確保您所選擇的商品符合您的需求。</p>
                        <p> 請在購物車頁面或結帳頁面查看預計的配送時間，以便合理安排接收商品的時間。</p>
                    </div>
                    <div class="col-md-5 fs-14">
                        <h3 class="h5 fw-bold">商品保存</h3>
                        <p class="mb-0">請將商品存放在建議的適當溫度環境中，以確保商品質量。請避免將商品長時間暴露在陽光直射下，以免影響商品的色澤和質地。</p>
                        <p> 避免商品存放在潮濕的環境中，特別是對於紙質商品，潮濕容易影響商品的質感。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <!-- 加入購物車吐司 -->
      <div class="toast-style position-fixed end-0 p-3 border-0 d-flex justify-content-end" style="z-index: 11">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-body d-flex justify-content-between">
          <p class="mb-0 fw-bold d-flex align-items-center">已加入購物車！</p>
          <router-link type= "button" class="btn bg-primary fs-12" to="/cart">查看購物車</router-link>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  </div>
</template>


<script>
    import * as bootstrap from 'bootstrap'
    import { mapActions , mapState } from 'pinia'
    import userCartStore from '../stores/userCartStore.js'
    const { VITE_URL , VITE_PATH } = import.meta.env

export default {
    data() {
        return {
            productData:{},
            addCartQty:1,
            picture:'',
            isLoading:true,
            fallPage:false
        }
    },
    computed:{
        ...mapActions(userCartStore,['showCart'])
    },
    methods: {
        getData(){
            const id = this.$route.params.id
            const api = `${VITE_URL}/api/${VITE_PATH}/product/${id}`
            this.isLoading = true

            this.$http.get(api)
            .then(res=>{
                this.productData = res.data.product
                this.picture = this.productData.imageUrl
            })
            .catch(err=>{
                alert(err.response.message)
            })
            .finally(()=>{
                this.isLoading = false
            })
        },
        //加入購物車
        addCart(){
            const api =`${VITE_URL}/api/${VITE_PATH}/cart`
            this.isLoading = true;
            this.$http.post(api, {
                data:{
                    product_id:this.productData.id,
                    qty:this.addCartQty
                }
            })
            .then(res=>{
                this.showToast()
                this.addCartQty = 1 //購物車數量改回1
                this.showCart()
            })
            .catch(err=>{
                alert(err.response.data.message)
            })
            .finally(()=>{
                this.isLoading = false;
            })
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
        this.getData()

        //初始化吐司模組
        this.initToast()
    },
}
</script>

<style lang="scss">
@import '../assets/all.scss';
    .product-image-width {
        width: 20%;
    }

    .nav-item-width {
        width: 40%;
    }

    .img-hover:hover {
        filter: grayscale(50%);
        transition: .3s;
    }
</style>