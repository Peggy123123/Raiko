<template>
  <VueLoading :active="isLoading">
    <div class="loading-img-bg">
      <img class="loading-img" src="@/assets/image/icon.png" alt="">
    </div>
  </VueLoading>
    <div class="container">
        <div class="row py-30 justify-content-center align-items-center">
          <div class="col-12 col-md-6 col-lg-5 d-flex justify-content-center">
            <img class="login-image" src="https://i.imgur.com/lowirph.png" alt="">
          </div>
          <div class="col-12 col-md-6 col-lg-5">
            <h2 class="h3 mb-8 border-bottom border-yellow-200 border-5 d-inline-block pb-3 text-secondary">
              登入後台
            </h2>
            <form id="form" class="login-form text-secondary" @submit.prevent="login">
              <div class="form-floating mb-3">
                <input type="email" class="form-control " id="username"
                  placeholder="name@example.com" v-model="user.username" required autofocus>
                <label for="username">Email</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="password"
                  placeholder="password" v-model="user.password" required>
                <label for="password">密碼</label>
              </div>
              <button class="btn btn-secondary w-100 py-2 mt-10" type="submit" @submit.prevent="login">
                登入
              </button>
            </form>
          </div>
        </div>
      </div>
  <!-- toast訊息 -->
  <div id="toast" class="toast hide toast-container position-fixed toast-placement" role="alert" aria-live="assertive" aria-atomic="true" >
    <div class="toast-header mb-0">
        <strong class="me-auto">{{toastTitle}}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
        {{toastContent}}
    </div>
  </div>
</template>

<script>
const { VITE_URL } = import.meta.env
import { Toast } from 'bootstrap'

let toast = null

export default {
  data(){
    return {
      user : {
          username : '',
          password : '',
      },
      toastTitle:'', //吐司訊息標題
      toastContent:'', //吐司訊息內文
      isLoading:false,
      fallPage:false
    }
  },
  methods: {
    login(){
      const api = `${VITE_URL}/admin/signin`;
      this.isLoading = true;

      this.$http.post( api , this.user)
      .then(res=>{
        this.toastTitle = `登入成功`
        this.toastContent = `已登入成功`
        toast.show()
        const {token , expired} = res.data;
        document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
        this.$router.push('admin/adminhome')
      })
      .catch(()=>{
        this.toastTitle = `登入失敗`
        this.toastContent = `帳號或密碼錯誤，請重新登入`
        toast.show()
        this.user.password = ''
      })
      .finally(()=>{
        this.isLoading = false
      })
    },
  },
  mounted(){
    toast = new Toast(document.getElementById("toast"));
  }
}
</script>

<style lang="scss">
@import '../assets/all.scss';

  .login-image {
    margin-bottom: 40px;
    width: 50%;
    @include pad-up {
      width: 75%;
      margin-bottom: 0;
    }
  }

  .login-form {
    width: 100%;
    @include pad-up {
      width: 75%;
    }
  }

  .toast-placement {
    top: 20px;
    right: 20px;
    width: 300px;
  }
</style>