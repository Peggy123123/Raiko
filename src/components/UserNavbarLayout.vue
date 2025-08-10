<template>
  <VueLoading :active="isLoading">
    <div class="loading-img-bg">
      <img class="loading-img" src="@/assets/image/icon.png" alt="">
    </div>
  </VueLoading>
<header>
    <nav class="navbar navbar-light bg-opacity fixed-top pt-5">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/"><h1>休日製作所</h1></RouterLink>
        <!-- menu button -->
        <div class="d-flex align-items-center">
          <!-- 購物車按鈕 -->
          <router-link class="me-2 me-md-5" type="button" to="/cart">
            <span class="cart-btn-hover px-3 py-2 rounded-circle position-relative"><i class="bi bi-cart"></i>
              <span  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              {{ cartData.length }}
              <span class="visually-hidden">cart</span>
            </span>
            </span>
          </router-link>
          <button @click="menu=!menu" class="menu-btn cart-btn-hover btn btn-secondary py-2 px-4 rounded-pill" type="button">
            <div class="d-flex">
              <div class="menu-icon-container">
                <span class="menu-icon" :class="{ 'menu-icon-close':menu }"></span>
                <span class="menu-icon" :class="{ 'menu-icon-close':menu }"></span>
              </div>
              <span class=" d-none d-md-inline ms-5">MENU</span>
            </div>
          </button>
        </div>
        <!-- menu視窗 -->
        <div class="w-100 bg-secondary menu-hide " :class="{ 'menu-show': menu }">
          <div class="text-white row justify-content-center mt-20">
            <ul class="navbar-nav col-6 col-sm-5 col-md-4 d-flex justify-content-center pe-0">
              <li class="user-nav-item">
                <a href="#" class="link" aria-current="page" @click.prevent="goPage('首頁')">首頁</a>
              </li>
              <li class="user-nav-item">
                <a href="#" class="link" @click.prevent="goPage('商品一覽')">商品一覽</a>
              </li>
              <li class="user-nav-item">
                  <a href="#" class="link" @click.prevent="goPage('購物車')">購物車</a>
                </li>
              <li class="user-nav-item">
                <a href="#" class="link" @click.prevent="goPage('登入後台')">登入後台</a>
              </li>
            </ul>
            <div class="d-none d-md-block col-12 col-sm-5 col-md-4 d-flex justify-content-center">
              <div class="text-center pt-25">
                <img class="menu-image" src="@/assets/image/img-house.png" alt="image">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background">
        <img class="logo-bottom logo-bottom-lg" src="@/assets/image/bg-logo.png" alt="logo-bottom">
        <img class="logo-bottom logo-bottom-md" src="@/assets/image/bg-logo.png" alt="logo-bottom">
        <img class="logo-bottom logo-bottom-sm" src="@/assets/image/bg-logo.png" alt="logo-bottom">
      </div>
    </nav>
  </header>

</template>


<script>
 import { mapState , mapActions } from 'pinia';
  import userCartStore from '../stores/userCartStore.js';

  export default {
    data() {
      return {
        menu:false
      }
    },
    computed:{
      ...mapState(userCartStore,['cartData'])
    },
    methods: {
      ...mapActions(userCartStore,['showCart']),
      goPage(page){
        this.menu = !this.menu
        if(page === "首頁"){
          this.$router.push('/')
        }else if(page === "商品一覽"){
          this.$router.push('/productslist')
        }else if(page === "購物車"){
          this.$router.push('/cart')
        }else if(page === "登入後台"){
          this.$router.push('/login')
        }
      }
    },
    mounted() {
      this.showCart()
    },
  }

</script>

<style lang="scss">
@import "../assets/all.scss";

.user-nav-item {
  opacity: 0;
  transform: translateY(100px);
  font-size: 28px;
  transition: all .2s;
  position: relative;
  overflow: hidden;

  @include pad-up {
    font-size: 40px;
  }

  &:hover{
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
    transform: translateX(-110%);
  }

  .link {
    color: #fff;
    display: block;
    width: 100%;
    padding: 20px 0;
  }
  &:hover {
    transition: all .2s;
  }
}

.navbar-brand {
  background-image: url(@/assets/image/img-logo.png);
  max-width: 252px;
  background-size: contain;
  background-repeat: no-repeat;
}

h1 {
  text-indent: 101%;
  white-space: nowrap;
  overflow: hidden;
}

// 左上logo背景圖片
.logo-bottom {
  z-index: -1;
  position: absolute;
}

.logo-bottom-lg {
  max-width: 500px;
  top: -140px;
  left: -143px;

  @include pad-down {
    display: none;
  }
}

.logo-bottom-md {
  max-width: 300px;
  top: -60px;
  left: -50px;

  @include mobile-down {
    display: none;
  }
}

  .logo-bottom-sm {
    max-width: 250px;
    top: -40px;
    left: -50px;

    @include mobile-up {
      display: none;
    }
}

  .menu-image {
    margin-bottom: 40px;
    width: 50%;
    @include pad-up {
      width: 65%;
      margin-bottom: 0;
    }
  }

  .menu-btn {
    z-index: 10;
  }

  .menu-hide {
    transform: translateX(130%);
    transition: .5s;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
  }

  .menu-show {
    transform: translateX(0);

    .user-nav-item:nth-child(1)  {
      transform: translateY(0%);
      transition: .8s;
      opacity: 1;
      transition-delay: .5s;
    }
    .user-nav-item:nth-child(2)  {
      transform: translateY(0%);
      transition: .8s;
      opacity: 1;
      transition-delay: .7s;
    }
    .user-nav-item:nth-child(3)  {
      transform: translateY(0%);
      transition: .8s;
      opacity: 1;
      transition-delay: .9s;
    }
    .user-nav-item:nth-child(4)  {
      transform: translateY(0%);
      transition: .8s;
      opacity: 1;
      transition-delay: 1.1s;
    }
  }

  .menu-icon-container {
    position: relative;
    height: 24px;
    width: 24px;
  }

  .menu-icon {
    display: block;
    width: 25px;
    height: 1px;
    background-color: #fff;
    transition: 1s;
    position: absolute;
    &:nth-child(1){
      top: 40%;
      left: 0;
    }
    &:nth-child(2){
      top: 70%;
      left: 0;
    }
  }

  .menu-icon-close:nth-child(1) {
    top: 50%;
    transform: rotate(45deg);
  }
  .menu-icon-close:nth-child(2) {
    top: 50%;
    transform: rotate(-45deg);
  }

</style>