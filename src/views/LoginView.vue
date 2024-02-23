<template>
    <div class="container">
        <div class="row justify-content-center mt-50">
          <h1 class="h3 mb-3 font-weight-normal text-center my-auto">
            登入後台
          </h1>
          <div class="col-3 my-auto">
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
              <button class="btn button mt-3" type="submit" @submit.prevent="login">
                登入
              </button>
            </form>
          </div>
        </div>
      </div>
</template>

<script>
const { VITE_URL } = import.meta.env

export default {
    data(){
        return {
            user : {
                username : '',
                password : ''
            }
        }
    },
    methods: {
        login(){
            const api = `${VITE_URL}/admin/signin`;
            this.$http.post( api , this.user)
            .then(res=>{
                const {token , expired} = res.data;
                alert('登入成功')
                document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
                this.$router.push('/adminproduct')
            })
            .catch(error=>{
                console.log(error.data);
                console.log(this.user);
                alert('帳號或密碼錯誤，請重新登入！')
              })
        },
    },
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
</style>