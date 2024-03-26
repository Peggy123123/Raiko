<template>
  <AdminNavbarLayout />
  <div class="main">
    <div class="container">
      <RouterView />
    </div>
  </div>
  <footer class="bg-light py-15 admin-footer">
    <p class="text-center mb-0">Raiko 休日製作所</p>
    <p class="text-center mb-0">本網站不提供商業用途</p>
  </footer>
</template>


<script>
  const { VITE_URL , VITE_PATH } = import.meta.env
  import AdminNavbarLayout from '@/components/AdminNavbarLayout.vue'

  export default {
    data(){
		return{
      api: VITE_URL,
      api_path: VITE_PATH,
		}
  },components:{
    AdminNavbarLayout,
  },
  methods:{
    //驗證身份
		checkUser(){
            this.$http.post(`${this.api}/api/user/check`)
            .then(()=>{
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
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");
         //token自動夾帶進去headers
         this.$http.defaults.headers.common['Authorization'] = token;
         this.checkUser();
        }
  }
</script>

<style lang="scss">
  .main {
    margin-left: 296px;
  }

  .admin-footer {
    margin-left: 296px;
  }
</style>