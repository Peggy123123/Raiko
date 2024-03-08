<template>
  <header>
    <nav class="navbar navbar-light bg-opacity fixed-top pt-5">
      <div class="container">
        <RouterLink class="navbar-brand" to="/"><h1>休日製作所</h1></RouterLink>
        <!-- menu button -->
        <button class="btn btn-secondary py-2 px-4 rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"><i class="bi bi-list me-2"></i>MENU</button>
        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">導覽</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="user-nav-item" data-bs-dismiss="offcanvas">
                <RouterLink to="/" class="link" aria-current="page">首頁</RouterLink>
              </li>
              <li class="user-nav-item"  data-bs-dismiss="offcanvas">
                <RouterLink to="/productslist" class="link">商品列表</RouterLink>
              </li>
              <li class="user-nav-item" data-bs-dismiss="offcanvas">
                  <RouterLink to="/cart" class="link">購物車</RouterLink>
                </li>
              <li class="user-nav-item" data-bs-dismiss="offcanvas">
                <RouterLink to="/login" class="link">登入後台</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="background">
        <img class="logo-bottom logo-bottom-lg" src="https://i.imgur.com/3CYFYkq.png" alt="logo-bottom">
        <img class="logo-bottom logo-bottom-md" src="https://i.imgur.com/3CYFYkq.png" alt="logo-bottom">
        <img class="logo-bottom logo-bottom-sm" src="https://i.imgur.com/3CYFYkq.png" alt="logo-bottom">
      </div>
    </nav>
  </header>
<RouterView />
  <footer class="bg-primary pt-15 pb-5">
    <div class="container">
      <div class="row gy-4 text-white pb-15 border-bottom border-2">
        <div class="col-12 col-sm-6 col-lg-4">
          <span class="mb-3 fs-5 border-top py-3 d-inline-block border-2">關於我們</span>
          <ul class="list-unstyled">
            <li class="mb-2"><i class="bi bi-telephone-fill me-1"></i>0978-885-145</li>
            <li class="mb-2"><i class="bi bi-envelope-fill me-1"></i>raikoraiko@gmail.com</li>
            <li class="mb-2"><i class="bi bi-cursor-fill me-1"></i>週一至週五 AM9:00~PM6:00</li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-lg-4">
          <span class="mb-3 fs-5 border-top py-3 d-inline-block border-2">休日製作所</span>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#" class="text-white">品牌故事</a></li>
            <li class="mb-2"><a href="#" class="text-white">熱銷排行</a></li>
            <li class="mb-2"><a href="#" class="text-white">聯絡我們</a></li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-lg-4">
          <span class="mb-3 fs-5 border-top py-3 d-inline-block border-2">顧客權益</span>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#" class="text-white">購物流程</a></li>
            <li class="mb-2"><a href="#" class="text-white">退換貨須知</a></li>
            <li class="mb-2"><a href="#" class="text-white">隱私政策</a></li>
          </ul>
        </div>
      </div>
      <div class="d-flex justify-content-between pt-5 align-items-center">
        <p class=" mb-0 text-white flex-grow-1 text-center">本網站不提供商業用途</p>
        <ul class="d-flex list-unstyled">
          <li><a href="#"><i class="bi bi-facebook text-white fs-8 me-5"></i></a></li>
          <li><a href="#"><i class="bi bi-instagram text-white fs-8 me-5"></i></a></li>
          <li><a href="#"><i class="bi bi-youtube text-white fs-8"></i></a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
// import { offcanvas } from 'bootsrap'

// let closeOffcanvas = null

export default {
  mounted() {
    // console.log(offcanvas);
    // let myOffcanvas = document.getElementById('myOffcanvas')
    // closeOffcanvas = Offcanvas(myOffcanvas)
  },
}

</script>

<style lang="scss">
@import "../assets/all.scss";

.user-nav-item {
  border-radius: 20px;
  margin: 12px;
  padding: 8px 0;
  transition: all .2s;
  &:hover {
    background-color: $secondary;
    transition: all .2s;
    .link {
      color: #fff;
    }
  }
}

.link {
  color: $secondary;
  display: block;
  width: 100%;
  padding: 0  16px;
}

.navbar-brand {
  background-image: url(https://i.imgur.com/pFJdiRb.png);
  max-width: 252px;
  background-size: contain;
  background-repeat: no-repeat;
  @include pad-down {
    margin-left:-10%;
  }
  @include mobile-down {
    margin-left:0;
  }
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

</style>