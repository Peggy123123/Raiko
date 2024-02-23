<template>
  <toastMessage />
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-opacity fixed-top">
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
                <RouterLink to="adminproduct" class="link">商品管理</RouterLink>
              </li>
              <li class="nav-item">
                  <RouterLink to="adminorder" class="link">訂單管理</RouterLink>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>


<script>
  const { VITE_URL , VITE_PATH } = import.meta.env
  import toastMessage from '../../components/toastMessage.vue'

  export default {
    data(){
		return{
            api: VITE_URL,
            api_path: VITE_PATH,
            
		}
  },component:{
    toastMessage,
  },
  methods:{
    //驗證身份
		checkUser(){
            this.$http.post(`${this.api}/api/user/check`)
            .then(res=>{
                // alert('登入成功')
            })
            .catch(error=>{
                console.log(error);
                alert('登入失敗，請重新登入')
                this.$router.push('/login')
              })
        },
      },
        mounted(){
        //取cookie資料
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");
         //token自動夾帶進去headers
         this.$http.defaults.headers.common['Authorization'] = token;
         this.checkUser();
        }
  }
</script>

<style lang="scss">
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