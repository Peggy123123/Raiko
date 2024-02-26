<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <RouterLink to="/" class="link">首頁</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/productslist" class="link">商品列表</RouterLink>
              </li>
              <li class="nav-item">
                  <RouterLink to="/cart" class="link">購物車</RouterLink>
                </li>
              <li class="nav-item">
                <RouterLink to="/login" class="link">登入後台</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
<RouterView />
  <footer class="bg-light py-15 ">
    <p class="text-center mb-0">Raiko 休日製作所</p>
    <p class="text-center mb-0">本網站不提供商業用途</p>
  </footer>
</template>

<style lang="scss">
@import "../assets/all.scss";

.nav-item {
  background-color: #000000;
  border-radius: 20px;
  margin: 12px;
  padding: 8px 0;
  transition: all .2s;
  &:hover {
        background-color: #fff;
        border: 1px solid #000000;
        transition: all .2s
      }
}
.link {
  color: #fff;
  padding: 16px 20px;
  text-decoration: none;
    font-size: 14px;
    &:hover {
        color: #000000;
      }
}
</style>