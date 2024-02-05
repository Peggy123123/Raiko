<template>
    <VueLoading :active="isLoading"/>
    <div class="container">
        <div class="mt-5 pt-5">
            <h2>{{ productData.title }}</h2>
            <img :src="productData.imageUrl" :alt="productData.title" class="image mt3">
            <p class="mt-3">{{ productData.content }}</p>
            <router-link to="/productslist" class="mt-3">返回</router-link>
        </div>
    </div>
</template>


<script>
    const { VITE_URL , VITE_PATH } = import.meta.env

export default {
    data() {
        return {
            productData:{},
            isLoading:true,
            fallPage:false
        }
    },
    mounted() {
        const id = this.$route.params.id
        const api = `${VITE_URL}/api/${VITE_PATH}/product/${id}`
        this.isLoading = true

        this.$http.get(api)
        .then(res=>{
            this.productData = res.data.product
        })
        .catch(err=>{
            alert(err.response.message)
        })
        .finally(()=>{
            this.isLoading = false
        })
    },
}
</script>


<style>
    .image {
        width: 300px;
    }
</style>