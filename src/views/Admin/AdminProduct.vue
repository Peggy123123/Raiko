<template>
  <VueLoading :active="isLoading"/>
  <div class="container">
    <h2 class="py-8 mb-0">商品管理</h2>
    <div class="row">
      <div class="text-end mb-2">
        <button class="btn btn-dark fw-bold" @click="openModel('new')">
          建立新產品
        </button>
      </div>
      <table class="table mt-4 align-middle text-center table-striped">
        <thead>
          <tr class="table-dark">
            <th scope="col" width="120">
              分類
            </th>
            <th scope="col" width="250">產品</th>
            <th scope="col" width="120">
              原價
            </th>
            <th scope="col" width="120">
              售價
            </th>
            <th scope="col" width="100">
              狀態
            </th>
            <th scope="col" width="100"></th>
            <th scope="col" width="100"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in data" :key="item.id">
            <tr>
              <td><span class="bg-secondary p-3 text-white rounded-pill">{{item.category}}</span></td>
              <td class="text-start">
                <img :src="item.imageUrl" :alt="item.title" width="100" class="me-3 rounded">
                <span class="fw-bold">{{item.title}}</span>
              </td>
              <td >{{item.origin_price}}元</td>
              <td class="fw-bold">{{item.price}}元</td>
              <td>
                <span v-if="item.is_enabled" class="text-success fw-bold">已啟用</span>
                <span v-else class="text-secondary">未啟用</span>
              </td>
              <td><button type="button" class="btn btn-dark btn-sm" @click="openModel('edit' , item)"><i class="bi bi-pencil me-2"></i><span>編輯</span> </button></td>
              <td><button type="button" class="btn btn-outline-danger btn-sm" @click="openModel( 'delete', item )">
                <i class="bi bi-x-lg"></i></button></td>
            </tr>
          </template>
        </tbody>
      </table>
      </div>
    </div>
    <!-- 分頁標籤 -->
    <pagination :total-Page="totalPage" :current-Page="currentPage" @swich-page="swichPage" class="my-15"></pagination>
    <!-- 新增商品Modal -->
    <update-Product-Model :temp-Item="tempItem" :update-Product="updateProduct" @update-Product="updateProduct" ref="pModel"></update-Product-Model>
    <!-- 刪除商品Modal -->
    <delete-Products-Model :temp-Item="tempItem" :delete-Product="deleteProduct" ref="dModel"></delete-Products-Model>
    <!-- toast訊息 -->
    <div id="toast" class="toast hide toast-container position-fixed toast-placement" role="alert" aria-live="assertive" aria-atomic="true" >
      <div class="toast-header mb-0">
          <strong class="me-auto">{{toastTitle}}</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" @click="toastClose"></button>
      </div>
      <div class="toast-body">
          {{toastContent}}
      </div>
    </div>
</template>

<script>
const { VITE_URL , VITE_PATH } = import.meta.env
import pagination from '../../components/PaginationMode.vue'
import updateProductModel from '../../components/UpdateProductModel.vue'
import deleteProductsModel from '../../components/DeleteProductsModel.vue'
import { Toast } from 'bootstrap'

let toast = null

export default {
    components: {
    updateProductModel,
    deleteProductsModel,
    pagination
  },
  data() {
    return {
      data: [],
      tempItem: {},
      isNew: false,
      currentPage: 1, //當前頁碼
      perPage: 10, //每頁最多幾筆
      totalPage:'',
      toastTitle:'', //吐司訊息標題
      toastContent:'', //吐司訊息內文
      isLoading:true,
      fallPage:false
    };
  },
  methods: {
    getData(page=1) {
        const api = `${VITE_URL}/api/${VITE_PATH}/admin/products?page=${page}`
        this.isLoading = true

        this.$http.get(api)
        .then((res) => {
            this.data = res.data.products;
            this.totalPage = res.data.pagination.total_pages
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
        .finally(()=>{
            this.isLoading = false
        })
    },
    openModel(status, item) {
      if (status === "new") {
        this.isNew = true;
        this.tempItem = { imagesUrl: [] };
        this.$refs.pModel.openModel(status);

      } else if (status === "edit") {
        this.isNew = false;
        this.tempItem = { ...item };
        if (!this.tempItem.imagesUrl) {
          this.tempItem.imagesUrl = [];
        }
        this.$refs.pModel.openModel(status)

      } else if (status === "delete") {
        this.isNew = false;
        this.tempItem = { ...item };
        this.$refs.dModel.openModel()
      }
    },
    updateProduct() {
        let api = `${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempItem.id}`
        let http = `put`;
        this.toastTitle = `更新商品`
        this.toastContent = `商品已更新成功`
        this.isLoading = true

        if (this.isNew) {
        api = `${VITE_URL}/api/${VITE_PATH}/admin/product`;
        http = `post`;
        this.isLoading = true
        this.toastTitle = `新增商品`
        this.toastContent = `商品已新增成功`
      }
      this.$http[http](api, { data: this.tempItem })
        .then((res) => {
          this.getData();
          this.$refs.pModel.closeModel();
          toast.show()
        })
        .catch((err) => {
          this.toastContent = err.response.data.message
          toast.show()
        })
        .finally(()=>{
            this.isLoading = false
        });
    },
    deleteProduct() {
      this.isLoading = true
      this.$http.delete(
        `${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempItem.id}`,
      )
      .then((res) => {
        this.getData();
        this.$refs.dModel.closeModel()
        this.toastTitle = `刪除商品`
        this.toastContent = `商品已刪除成功`
        toast.show()
      })
      .catch((err) => {
        this.toastContent = err.data.message
        toast.show()
      })
      .finally(()=>{
            this.isLoading = false
        })
    },
    swichPage(page){
      const api = `${VITE_URL}/api/${VITE_PATH}/admin/products?page=${page}`
      this.isLoading = true

      this.$http.get(api)
      .then(res=>{
          this.data = res.data.products;
          this.currentPage = page
      })
      .catch(err=>{
          alert(err.response.data.message);
      })
      .finally(()=>{
          this.isLoading = false
      })
  },
  toastClose(){
    toast.hide()
  }
  },
  mounted(){
    //取cookie資料
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");
    //token自動夾帶進去headers
    this.$http.defaults.headers.common['Authorization'] = token;

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
    z-index: 1500;
}
</style>