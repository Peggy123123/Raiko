<!-- eslint-disable vue/require-v-for-key -->
<template>
  <VueLoading :active="isLoading">
    <div class="loading-img-bg">
      <img class="loading-img" src="@/assets/image/icon.png" alt="">
    </div>
  </VueLoading>
    <div class="container">
        <h2 class="py-8 mb-0">訂單管理</h2>
        <div class="row">
            <table class="table align-middle text-center table-striped">
                <thead>
                    <tr class="table-dark">
                    <th scope="col">購買時間</th>
                    <th scope="col" width="250">Email</th>
                    <th scope="col" width="250">購買品項</th>
                    <th scope="col">應付金額</th>
                    <th scope="col">付款狀態</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="item in orders" :key="item.id">
                        <tr v-if="orders.length">
                        <td scope="row">{{ new Date(item.create_at*1000).toLocaleDateString() }}</td>
                        <td>{{item.user.email}}</td>
                        <td>
                            <ul v-for="product in item.products" key="product.id" class="ps-0 mb-0 list-unstyled">
                                <li class="mb-2 d-flex">
                                    <img :src="product.product.imageUrl" alt="product.product.title" width="50" class="me-2 rounded">
                                    <div class="d-flex align-items-center justify-content-between flex-grow-1">
                                        <div>{{ product.product.title }}</div>
                                        <div class="text-dark text-start">{{  product.qty + product.product.unit }}</div>
                                    </div>
                                </li>
                            </ul>
                        </td>
                        <td>{{item.total}} 元</td>
                        <td>
                            <div class="form-check form-switch">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    v-model="item.is_paid"
                                    @change="updatePaid(item)"
                                    />
                                <label class="form-check-label">
                                    <span v-if="item.is_paid" class="text-success fw-bold">已付款</span>
                                    <span v-else class="text-secondary  ">未付款</span>
                                </label>
                                </div>
                        </td>
                        <td>
                            <button type="button" class="btn btn-dark btn-sm" @click="openModal(item , 'edit')"><i class="bi bi-eye-fill me-2"></i><span>檢視</span>
                            </button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal(item ,'delete')"><i class="bi bi-x-lg"></i></button>
                        </td>
                    </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
    <!-- 分頁標籤 -->
    <pagination :total-Page="totalPage" :current-Page="currentPage" @swich-page="switchPage" class="my-15"></pagination>
    <!-- OrderModal -->
    <div class="modal fade" id="orderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">訂單詳細資訊</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <h2 class="fs-6 bg-dark text-white mb-0 py-3 text-center">訂單內容</h2>
            <table class="table mb-10" v-if="tempItem">
                <thead>
                    <tr class="table-light">
                    <th scope="col">訂單編號</th>
                    <th scope="col">下單日期</th>
                    <th scope="col">付款狀態</th>
                    <th scope="col">總金額</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{{ tempItem.id }}</th>
                    <td>{{new Date(tempItem.create_at*1000).toLocaleDateString()}}</td>
                    <td>
                        <span v-if="tempItem.is_paid" class="fw-bold text-success">已付款</span>
                        <span v-else class="text-secondary">尚未付款</span>
                    </td>
                    <td>{{tempItem.total}}</td>
                    </tr>
                </tbody>
            </table>
            <h2 class="fs-6 bg-dark text-white mb-0 py-3 text-center">購買商品</h2>
            <table class="table mb-10 align-middle" v-if="tempItem">
                <thead>
                    <tr class="table-light">
                    <th scope="col">品名</th>
                    <th scope="col">圖片</th>
                    <th scope="col">數量</th>
                    <th scope="col">金額</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="product in tempItem.products" :key="product.id">
                        <tr>
                            <td scope="row">{{ product.product.title }}</td>
                            <td><img :src="product.product.imageUrl" alt="product.product.title" width="100"></td>
                            <td>{{ product.qty }}</td>
                            <td>{{ product.total }}</td>
                        </tr>
                    </template>
                </tbody>
            </table>
            <h2 class="fs-6 bg-dark text-white mb-0 py-3 text-center">訂購人資訊</h2>
            <table class="table" v-if="tempItem.user">
                <thead>
                    <tr class="table-light">
                    <th scope="col">姓名</th>
                    <th scope="col">Email</th>
                    <th scope="col">電話</th>
                    <th scope="col">地址</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td scope="row">{{ tempItem.user.name }}</td>
                    <td>{{ tempItem.user.email }}</td>
                    <td>{{ tempItem.user.tel }}</td>
                    <td>{{ tempItem.user.address }}</td>
                    </tr>
                </tbody>
            </table>
                <div class="form-check d-flex justify-content-end">
                    <input type="checkbox" class="form-check-input me-3" id="paid" v-model="tempItem.is_paid" >
                    <label for="paid">已付款</label>
                </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-success" @click="updatePaid(tempItem)">儲存變更</button>
        </div>
        </div>
    </div>
    </div>
    <!-- 刪除Model -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">刪除訂單</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>是否確定刪除此訂單(刪除後將無法恢復)</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                <button type="button" class="btn btn-danger" @click="deleteOrder">確定</button>
            </div>
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
    const { VITE_URL , VITE_PATH } = import.meta.env
    import { Modal } from 'bootstrap'
    import { Toast } from 'bootstrap'
    import pagination from '../../components/PaginationMode.vue'

    let orderModal = null
    let deleteModal = null
    let toast = null

    export default {
        data(){
            return {
                orders:[], //所有訂單
                totalPage:'',
                currentPage: 1,
                perpage: 10,
                tempItem:{},
                toastTitle:'', //吐司訊息標題
                toastContent:'', //吐司訊息內文
                isLoading:true,
                fallPage:false
            }
        },
        components :{
            pagination
        },
        methods: {
            getData(page=1){ //取得訂單列表
                const api = `${VITE_URL}/api/${VITE_PATH}/admin/orders?page=${page}`
                this.isLoading = true

                this.$http.get(api)
                .then(res=>{
                    this.orders = res.data.orders
                    this.totalPage = res.data.pagination.total_pages
                })
                .catch(err=>{
                    this.toastTitle = `取得訂單`
                    this.toastContent = err.response.data.message
                    toast.show()
                })
                .finally(()=>{
                    this.isLoading = false
                })
            },
            updatePaid(item){ //更新付款狀態
                const api = `${VITE_URL}/api/${VITE_PATH}/admin/order/${item.id}`
                const paid = { is_paid : item.is_paid }
                this.isLoading = true

                this.$http.put(api , {data:paid})
                .then(res=>{
                    console.log(res);
                    orderModal.hide()
                    this.toastTitle = `更新付款狀態`
                    this.toastContent = `訂單狀態已更新成功`
                    toast.show()
                })
                .catch(err=>{
                    this.toastContent = err.response.data.message
                    toast.show()
                })
                .finally(()=>{
                    this.isLoading = false
                })
            },
            openModal(item ,status){ //開啟檢視/刪除視窗
                this.tempItem = item

                if(status === "edit"){
                    orderModal.show()
                }else if(status === "delete"){
                    deleteModal.show()
                }
            },
            deleteOrder(){ //刪除訂單
                const api = `${VITE_URL}/api/${VITE_PATH}/admin/order/${this.tempItem.id}`
                this.isLoading = true

                this.$http.delete(api)
                .then(()=>{
                    deleteModal.hide()
                    this.getData()
                    this.toastTitle = `更新訂單`
                    this.toastContent = `訂單已成功刪除`
                    toast.show()
                })
                .catch(err=>{
                    this.toastContent = err.response.data.message
                    toast.show()
                })
                .finally(()=>{
                    this.isLoading = false
                })
            },
            swichPage(page) {
                this.currentPage = page;
            },
        },
        computed:{
            //計算總共要有幾頁
            // eslint-disable-next-line vue/no-dupe-keys
            totalPage(){
                return Math.ceil(this.orders.length / this.perpage)
            }
        },
        mounted(){
            //取cookie資料
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");
            //token自動夾帶進去headers
            this.$http.defaults.headers.common['Authorization'] = token;

            //初始化orderModal
            orderModal = new Modal(document.getElementById('orderModal'), {
                keyboard: false
            })
            deleteModal = new Modal(document.getElementById('deleteModal'), {
                keyboard: false
            })

            //初始化吐司
            toast = new Toast(document.getElementById("toast"));

            this.getData()
        }
    }
</script>


<style>
body {
    position: relative;
}
.toast-placement {
    top: 20px;
    right: 20px;
    width: 300px;
}
</style>