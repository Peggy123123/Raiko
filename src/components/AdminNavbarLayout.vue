<template>
    <VueLoading :active="isLoading"/>
    <header>
        <div class="nav d-flex flex-column bg-dark justify-content-between">
        <div>
            <a class="navbar-brand text-white" href="#">Logo</a>
            <ul class="list-unstyled mt-10">
                <li>
                <RouterLink to="/admin/adminproduct" class="admin-link">商品管理</RouterLink>
                </li>
                <li>
                    <RouterLink to="adminorder" class="admin-link">訂單管理</RouterLink>
                </li>
                <li>
                <RouterLink to="admincoupon" class="admin-link">優惠券管理</RouterLink>
                </li>
                <li>
                    <a href="#" class="admin-link" @click.prevent="openModal">登出</a>
                </li>
            </ul>
            </div>
            <div class="text-white mb-20 fw-bold d-flex align-items-center justify-content-center">
            <i class="bi bi-person-circle fs-1"></i>
            <p class="mb-0 ms-2">歡迎回來！ <span>管理者1</span></p>
            </div>
        </div>
    </header>
    <!-- 登出Modal -->
    <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">登出</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>是否確定要登出</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                <button type="button" class="btn btn-danger" @click="logout">確定</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    const { VITE_URL } = import.meta.env
    import { Toast } from 'bootstrap'
    import { Modal } from 'bootstrap'

    let toast = null
    let logoutModal = null

    export default {
        data(){
            return {
                toastTitle:'', //吐司訊息標題
                toastContent:'', //吐司訊息內文
                isLoading:false,
                fallPage:false
            }
        },
        methods:{
            openModal(){
                logoutModal.show()
            },
            logout(){
                const api = `${VITE_URL}/logout`
                this.isLoading = true
                logoutModal.hide()
                
                this.$http.post(api)
                .then(res=>{
                    this.$router.push('/login')
                })
                .catch(err=>{
                    this.toastTitle = `登出`
                    this.toastContent = `請重新操作`
                    toast.show()
                })
                .finally(()=>{
                    this.isLoading = false
                })
            }
        },
        mounted() {
            //初始化吐司
            toast = new Toast(document.getElementById("toast"));

            logoutModal = new Modal(document.getElementById('logoutModal'))
        },
    }
</script>

<style lang="scss">
    .nav {
        min-width: 296px;
        min-height: 100vh;
        position: fixed;
    }

    .admin-link {
        padding: 20px;
        display: block;
        font-weight: bold;
        text-align: center;
        transition-duration: .2s;
        color: #fff;
        text-decoration: none;

        &:hover {
        background:rgba(255,255,255,0.2) ;
        color: #fff;
        }
    }

</style>