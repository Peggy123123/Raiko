<template>
  <VueLoading :active="isLoading"/>
    <div class="container">
        <div class="row justify-content-center py-30">
          <h2 class="h3 mb-8 font-weight-normal text-center my-auto">
            登入後台
          </h2>
          <div class="col-3 ">
            <form id="form" class="form-signin" @submit.prevent="login">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="username"
                  placeholder="name@example.com" v-model="user.username" required autofocus>
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="password"
                  placeholder="Password" v-model="user.password" required>
                <label for="password">Password</label>
              </div>
              <button class="btn button mt-10" type="submit" @submit.prevent="login">
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
        this.$router.push('admin/adminproduct')
      })
      .catch(error=>{
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

<style>
  .button {
    background-color: #000;
    color: #fff;
    width: 100%;
    padding-top : .5rem;
    padding-bottom: .5rem;
    border-radius: 60px;

    &:hover {
      background-color: #fff;
      color: #000;
      border: 1px solid #000 ;
    }
  }

  body {
    position: relative;
  }
  .toast-placement {
    top: 20px;
    right: 20px;
    width: 300px;
  }
</style>