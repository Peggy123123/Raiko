<template>
  <VueLoading :active="isLoading">
    <div class="loading-img-bg">
      <img class="loading-img" src="@/assets/image/icon.png" alt="">
    </div>
  </VueLoading>
    <div class="container">
        <h2 class="py-8 mb-0">優惠券管理</h2>
        <div class="row">
            <div class="text-end bg-light py-5 border rounded-3 d-flex justify-content-between">
                <button class="btn btn-dark fw-bold" @click="openModal(item={},'new')">
                建立優惠券
                </button>
            </div>
            <table class="table mt-4 align-middle text-center table-striped">
                <thead>
                <tr class="table-dark">
                    <th scope="col" width="120">
                    名稱
                    </th>
                    <th scope="col" width="250">
                        折扣百分比
                    </th>
                    <th scope="col" width="120">
                    到期日
                    </th>
                    <th scope="col" width="120">
                    狀態
                    </th>
                    <th scope="col" width="100"></th>
                    <th scope="col" width="100"></th>
                </tr>
                </thead>
                <tbody>
                <template v-for="item in data" :key="item.id">
                    <tr>
                    <td class="fw-bold"> {{ item.title }}</td>
                    <td >{{ item.percent }} %</td>
                    <td>{{ new Date(item.due_date*1000).toLocaleDateString() }}</td>
                    <td >
                        <span v-if="item.is_enabled" class="text-success fw-bold">已啟用</span>
                        <span v-else class="text-secondary">尚未啟用</span>
                    </td> 
                    <td><button type="button" class="btn btn-dark btn-sm" @click="openModal(item , 'edit')" ><i class="bi bi-pencil me-2"></i><span>編輯</span> </button></td>
                    <td><button type="button" class="btn btn-outline-danger btn-sm" @click="openModal(item , 'delete')" >
                        <i class="bi bi-x-lg"></i></button></td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
    </div>
    <!-- 編輯視窗 -->
    <div class="modal fade" id="couponEditModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label for="title" class="form-label">優惠卷名稱</label>
                    <input id="title" type="text" class="form-control"
                    placeholder="請輸入優惠卷名稱" v-model="tempItem.title">
                </div>
                <div class="mb-3">
                    <label for="code" class="form-label">優惠碼</label>
                    <input id="code" type="text" class="form-control"
                    placeholder="請輸入優惠碼" v-model="tempItem.code">
                </div> 
                <div class="mb-3">
                    <label for="date" class="form-label">到期日</label>
                    <input type="date" class="form-control" id="date" v-model="date">
                </div> 
                <div class="mb-3">
                    <label for="percent" class="form-label">折扣百分比</label>
                    <input id="percent" type="text" class="form-control"
                    placeholder="請輸入折扣百分比" v-model.number="tempItem.percent">
                </div> 
                <div class="form-check d-flex justify-content-end">
                    <input type="checkbox" id="abled" class="form-check-input" :true-value="1" :false-value="0" v-model="tempItem.is_enabled">
                    <label for="abled" class="form-lable mx-3">啟用</label>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                <button type="button" class="btn btn-success" @click="updateCoupon">確定</button>
            </div>
            </div>
        </div>
    </div>
    <!-- 刪除Model -->
    <div class="modal fade" id="couponDeleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">刪除優惠券</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>是否確定刪除<span class="text-danger fw-bold">{{ this.tempItem.title }}優惠券(刪除後將無法恢復)</span></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-danger" @click="deleteCoupon">確定</button>
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
    <!-- 分頁標籤 -->
        <pagination :total-Page="totalPage" :current-Page="currentPage" @swich-page="swichPage" class="my-15"></pagination>
</template>


<script>
    const { VITE_URL , VITE_PATH } = import.meta.env
    import pagination from '../../components/PaginationMode.vue'
    import { Modal } from 'bootstrap'
    import { Toast } from 'bootstrap'
    
    let couponEditModal = null
    let couponDeleteModal = null
    let toast = null

    export default {
        components:{
            pagination
        },
        data(){
            return{
                data:[],
                tempItem:{},
                currentPage: 1, //當前頁碼
                perPage: 10, //每頁最多幾筆
                totalPage:'',
                date:'',
                title:'',
                toastTitle:'', //吐司訊息標題
                toastContent:'', //吐司訊息內文
                isLoading:true,
                fallPage:false
            }
        },
        
        methods:{
            getData(page=1){
                this.isLoading = true
                const api = `${VITE_URL}/api/${VITE_PATH}/admin/coupons?page=${page}`

                this.$http.get(api)
                .then(res=>{
                    this.data = res.data.coupons
                    console.log(res.data.pagination);
                    this.totalPage = res.data.pagination.total_pages
                    console.log(this.totalPage);
                    this.currentPage = page
                })
                .catch(err=>{
                    this.toastTitle = `取得商品`
                    this.toastContent = err.response.data.message
                    this.toast.show()
                })
                .finally(()=>{
                    this.isLoading = false
                })
            },
            openModal(item, status){
                if(status === "edit"){
                    this.title = "編輯優惠券"
                    this.tempItem = {...item}
                    const newDate = new Date(this.tempItem.due_date*1000).toISOString().split('T'); //改成這個格式才能正常顯示在inut type="date"上
                     [this.date] = newDate
                    couponEditModal.show()
                }else if(status === "new"){
                    this.title = "新增優惠券"
                    item = {
                        title: '',
                        is_enabled: 0,
                        percent: '',
                        due_date: '',
                        code: ''
                    }
                    this.tempItem = {...item}
                    const newDate = new Date().toISOString().split('T');
                    [ this.date ] = newDate
                    couponEditModal.show()
                }else if(status === "delete"){
                    this.tempItem = {...item}
                    couponDeleteModal.show()
                }
            
            },
            updateCoupon(){
                this.isLoading = true
                let api = `${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempItem.id}`;
                let requestMethod = `put`
                this.toastTitle = `更新優惠券`
                this.toastContent = `優惠券已更新成功`

                if(this.title === "新增優惠券"){
                    api = `${VITE_URL}/api/${VITE_PATH}/admin/coupon`;
                    requestMethod = `post`
                    this.toastTitle = `新增優惠券`
                    this.toastContent = `優惠券已新增成功`
                }

                this.$http[requestMethod]( api , { data : this.tempItem })
                .then(()=>{
                    this.getData()
                    couponEditModal.hide()
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
            deleteCoupon(){
                this.isLoading = true
                const api = `${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempItem.id}`

                this.$http.delete(api)
                .then(()=>{
                    this.getData()
                    couponDeleteModal.hide()
                    this.toastTitle = `刪除優惠券`
                    this.toastContent = `優惠券已刪除成功`
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
            swichPage(page){
                const api = `${VITE_URL}/api/${VITE_PATH}/admin/coupons?page=${page}`
                this.isLoading = true

                this.$http.get(api)
                .then(res=>{
                    this.data = res.data.coupons
                    this.currentPage = page
                })
                .catch(err=>{
                    alert(err.response.data.message);
                })
                .finally(()=>{
                    this.isLoading = false
                })
            }
        },
        watch:{
            date(){
                this.tempItem.due_date = Math.floor(new Date(this.date)/1000)
            },
        }, 
        mounted(){
            //取cookie資料
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");
            //token自動夾帶進去headers
            this.$http.defaults.headers.common['Authorization'] = token;

            couponEditModal =new Modal(document.getElementById('couponEditModal'), {
                keyboard: false,
                backdrop: 'static'
            })

            couponDeleteModal =new Modal(document.getElementById('couponDeleteModal'), {
                keyboard: false,
                backdrop: 'static'
            })
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