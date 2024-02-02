<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      data:{}
    }
  },
  mounted(){
    const url = `import.meta.env.VITE_PATH` //改為環境變數，如果正常運作就表示正常取用變數
    this.$http.get(url)
    .then(res=>{
      console.log(res);
      console.log(import.meta.env.VITE_TEXT);
      this.data = res.data
    })
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
