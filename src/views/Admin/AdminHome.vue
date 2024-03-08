<template>
    <VueLoading :active="isLoading"/>
    <div class="container">
        <h2 class="py-8 mb-0">後台總覽</h2>
        <div class="row ps-0 list-unstyled bg-light py-10 justify-content-evenly mb-50">
            <div class="col-3 bg-white border rounded-3 py-5 d-flex flex-column">
                <span class="border-bottom pb-3 border-dark">所有商品數量</span>
                <span class="fs-3 ps-2 pt-3">{{ productsData.length }}</span>
            </div>
            <div class="col-3 bg-white border rounded-3 py-5 d-flex flex-column">
                <span class="border-bottom pb-3 border-dark">所有訂單數量</span>
                <span class="fs-3 ps-2 pt-3">{{ ordersData.length }}</span>
            </div>
            <div class="col-3 bg-white border rounded-3 py-5 d-flex flex-column">
                <span class="border-bottom pb-3 border-dark">所有優惠券數量</span>
                <span class="fs-3 ps-2 pt-3">{{ couponsData.length }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    const { VITE_URL , VITE_PATH } = import.meta.env

    export default {
        data(){
            return{
                productsData:[],
                ordersData:[],
                couponsData:[],
                isLoading:true,
                fullPage: true,
            }
        },
        methods: {
            getProductsData(){
                this.isLoading = true
                this.$http.get(`${VITE_URL}/api/${VITE_PATH}/admin/products`)
                .then(res=>{
                    this.productsData = res.data.products
                })
                .catch(err=>{
                    alert(err.response.data.message);
                })
                .finally(()=>{
                    this.isLoading = false
                })
            },
            getOrdersData(){
                this.$http.get(`${VITE_URL}/api/${VITE_PATH}/admin/orders`)
                .then(res=>{
                    this.ordersData = res.data.orders
                })
                .catch(err=>{
                    alert(err.response.data.message);
                })
                .finally(()=>{
                    this.isLoading = false
                })
            },
            getCouponsData(){
                this.$http.get(`${VITE_URL}/api/${VITE_PATH}/admin/coupons`)
                .then(res=>{
                    this.couponsData = res.data.coupons
                })
                .catch(err=>{
                    alert(err.response.data.message);
                })
                .finally(()=>{
                    this.isLoading = false
                })
            }
        },
        mounted() {
            //取cookie資料
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");
            //token自動夾帶進去headers
            this.$http.defaults.headers.common['Authorization'] = token;

            this.getProductsData()
            this.getOrdersData()
            this.getCouponsData()
        },
    }
</script>