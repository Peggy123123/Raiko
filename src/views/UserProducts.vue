<template>
  <VueLoading :active="isLoading">
    <div class="loading-img-bg">
      <img class="loading-img" src="@/assets/image/icon.png" alt="">
    </div>
  </VueLoading>
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-md-10 mb-5">
          <div class="mt-35 w-100 cover d-flex align-items-center">
            <h2 class="text-white ms-10">所有商品</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- 手機版選單 -->
        <div class="dropdown mt-5 pad-down-menu">
            <a class="bg-primary dropdown-toggle text-white p-2 rounded-2 w-100 d-block" href="#"  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              {{ mobileMenuText }}
            </a>
            <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
              <li><router-link class="dropdown-item" to="productslist" @click="mobileMenuText ='所有商品'">所有商品</router-link></li>
              <li><router-link class="dropdown-item" to="productslist?category=家居小物" @click="mobileMenuText ='家居小物'">家居小物</router-link></li>
              <li><router-link class="dropdown-item" to="productslist?category=療癒寢具" @click="mobileMenuText ='療癒寢具'">療癒寢具</router-link></li>
              <li><router-link class="dropdown-item" to="productslist?category=辦公小物" @click="mobileMenuText ='辦公小物'">辦公小物</router-link></li>
            </ul>
          </div>
          <!-- 電腦版選單 -->
        <div class="col-md-2 d-flex flex-column">
          <div class="pad-up-menu sticky-position">
            <ul class="ps-0 list-unstyled">
              <li><router-link class="text-secondary py-5 d-block border-bottom" to="productslist">所有商品</router-link></li>
              <template v-for="item in categories" :key="item">
                <li><router-link class="text-secondary py-5 d-block border-bottom" :to="`productslist?category=${item}`">{{ item }}</router-link></li>
              </template>
            </ul>
          </div>
        </div>
        <div class="col-md-10">
          <div class="row my-10 gy-5">
            <template v-for="item in productData" :key="item.id">
              <div class="productCard col-md-6 col-lg-4 d-flex justify-content-center h-100">
                <div class="border rounded-2" >
                  <div class="product-image-container d-block" @click="detailPage(item)">
                    <img :src="item.imageUrl" :alt="item.title" class="product-image" width="250">
                    <span class="hover-text">查看更多</span>
                    <div class="cart w-75" @click.stop="addCart(item)" ref="loadingAddCart"><span>加入購物車</span><i class="bi bi-cart2 ms-2"></i></div>
                  </div>
                  <div>
                    <div class="p-3">
                      <div class="d-flex justify-content-between">
                        <small class="border border-yellow-200 p-1 text-secondary">{{item.category}}</small>
                      </div>
                      <p class="mb-0 text-secondary product-text-size mt-3">{{item.title}}</p>
                      <div class="d-flex justify-content-end text-secondary ">
                        <small class=" text-decoration-line-through me-3">NT. {{item.origin_price}} </small>
                        <small class="fw-bold text-primary">NT. {{item.price}} </small>
                        </div>

                    </div>
                    <div class="cart-desktop-down border-top py-3" @click.stop="addCart(item)" ref="loadingAddCart">加入購物車</div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  <!-- 加入購物車吐司 -->
  <div class="toast-style position-fixed end-0 p-3 border-0 d-flex justify-content-end" style="z-index: 11">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-body d-flex justify-content-between">
          <p class="mb-0 fw-bold d-flex align-items-center">已加入購物車！</p>
          <router-link type= "button" class="btn bg-primary fs-12" to="cart">查看購物車</router-link>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  </div>
  <!-- 分頁標籤 -->
  <pagination :total-Page="totalPage" :current-Page="currentPage" @swich-page="swichPage" class="my-15"></pagination>
</template>

<script>
const { VITE_URL , VITE_PATH } = import.meta.env
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle' //使用bs5的下拉選單，需引用此當案
import { mapActions } from 'pinia'
import userCartStore  from '@/stores/userCartStore.js'
import pagination from '../components/PaginationMode.vue'

export default {
  components:{
    pagination
  },
  data(){
    return {
      productData:[],
      categories:['家居小物','療癒寢具','辦公小物'],
      mobileMenuText:'所有商品',
      isLoading: true,
      currentPage: 1, //當前頁碼
      perPage: 10, //每頁最多幾筆
      totalPage:'',
      fullPage: true,
      toastInstance:null,
    }
  },
  watch:{ //點下產品分類時會改變路由，要監聽路由中的query
    '$route.query':{
      handler(){
        this.getData()
      }
    }
  },
  methods: {
    getData(page=1){
      let { category = ''} = this.$route.query //取路由中的關鍵字(如果category是undefined，要預設一個值是空字串)
      const url  =`${VITE_URL}/api/${VITE_PATH}/products?page=${page}&category=${category}` //可以用分類打api
      this.isLoading = true;
      this.$http.get(url)
        .then(res=>{
            this.productData = res.data.products
            this.totalPage = res.data.pagination.total_pages
        })
        .catch(err=>{
            alert(err.response.data.message)
        })
        .finally(()=>{
          this.isLoading = false
        })
      },
      swichPage(page){
      let { category = ''} = this.$route.query
      const api = `${VITE_URL}/api/${VITE_PATH}/products?page=${page}&category=${category}`
      this.isLoading = true;

      this.$http.get(api)
      .then(res=>{
            this.productData = res.data.products
            this.totalPage = res.data.pagination.total_pages
            this.currentPage = res.data.pagination.current_page
        })
        .catch(err=>{
            alert(err.response.data.message)
        })
        .finally(()=>{
          this.isLoading = false
        })
      },
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
        .then(()=>{
          this.showToast()
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
    detailPage(item){
      this.$router.push(`productslist/${item.id}`)
    },
    ...mapActions(userCartStore,['showCart']),
  },
  mounted(){
    this.getData()
    this.showCart()

    //初始化吐司模組
    this.initToast()
  },
}

</script>


<style lang="scss">
  @import '../assets/all.scss' ;

  //封面
  .cover {
    height: 180px;
    background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711102632545.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JiuD1k4x1pJVls2fsARyk%2BYtIFDwTUQhTBvjzO1fpYWkxRKDuLGK4dStgy3Iwhcp4ZXXFjeD2A7FoFHaoi3%2FeOJMKM5JmnXbjz83iydGfn9Yopd9irOLMi6WbUCh55eU9bDN8V4XBFW%2Be9GBoeVa4A4f6G38%2BPjnEImVjb%2BmsEFnJ1FfHi9H7t3sDqyzpcM6Tz75TKag%2F%2Blh0C9RRGIEXMMpemQghSnxVb%2FM5%2F%2FFs5XDifxWelEIjjXnSvYWyLdHyjNsPcDQrwDdJ1%2ByJwZmA%2B7miNmeTq7OTRSpLG3P0hMmmB3cXhnY98Z638m6JiPoUUIq%2B6txK5qbwL3lcYWgHA%3D%3D);
    background-size: cover;
    background-position: 50% 50%;
  }

  .pad-up-menu {
    display: none;
    cursor: pointer;
    @include pad-up {
      display: block;

      li {
        position: relative;
        overflow: hidden;

        &:hover {
          border-bottom: 0;

          &::after {
            transform: translateX(0);
            transition: all .5s;
          }
        }

        &::after {
          position: absolute;
          content: '';
          width: 100%;
          height: 10%;
          bottom: 0;
          left: 0;
          background-color: #E0D979;
          transform: translateX(-101%);
        }
      }
    }
  }

  .pad-down-menu {
    @include pad-up {
      display: none;
    }

    .dropdown-item {
      margin-bottom: 8px;
      color: $secondary;
    }
  }

  .sticky-position {
    position: sticky;
    top: 300px;
    z-index: 1020;
  }

  .product-image {
    height: 100%;
    object-fit: cover;
    width: 100%;

    &:hover {
      opacity: .3;
      transition: .2s;
    }
  }

  .product-image-container {
    position: relative;
    cursor: pointer;

    .hover-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      font-size: 20px;
      color:$secondary;
      display: none;
    }

    .cart {
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%,-50%);
      cursor: pointer;
      border: 1px solid $secondary;
      text-align: center;
      color: $secondary;
      border-radius: 20px;
      padding-top: 8px;
      padding-bottom: 8px;
      transition: .3s;
      display: none;

      &:hover {
        background-color: $primary;
        border: none;
        color: #fff;

        .product-image {
          opacity: .3;
        }
      }
    }

    &:hover {
       .cart {
        display: block;
        @include pad-down {
          display: none ;
        }
      }
      .hover-text {
        display: block;
      }
    }
  }

  .cart-desktop-down {
    cursor: pointer;
    color: $secondary;
    text-align: center;
    transition: all .3s;
    @include desktop-up {
      display: none;
    }

    &:hover , &:active {
      background-color: $primary;
        color: #fff;
        transition: all .3s;
    }
  }

  .product-text-size {
    @include rwd-text-size (16px,20px)
  }


</style>