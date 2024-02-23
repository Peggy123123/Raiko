<template>
  <VueLoading :active="isLoading"/>
  <div class="container">
      <div class="text-end mt-15 pt-5">
        <button class="btn btn-primary"  @click="openModel('new')">
          建立新的產品
        </button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">
              分類
            </th>
            <th>產品名稱</th>
            <th width="120">
              原價
            </th>
            <th width="120">
              售價
            </th>
            <th width="100">
              是否啟用
            </th>
            <th width="120">
              編輯
            </th>
          </tr>
        </thead>
        <tbody v-for="item in tempData" :key="item.id">
          <tr>
            <td>{{item.category}}</td>
            <td>{{item.title}}</td>
            <td class="text-end">{{item.origin_price}}</td>
            <td class="text-end">{{item.price}}</td>
            <td>
              <span v-if="item.is_enabled" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm" @click="openModel('edit' , item)">
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="openModel( 'delete', item )">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 分頁標籤 -->
    <pagination :total-Page="totalPage" :current-Page="currentPage" @swich-page="swichPage"></pagination>
    <!-- 新增商品Modal -->
    <update-Product-Model :temp-Item="tempItem" :update-Product="updateProduct" @update-Product="updateProduct" ref="pModel"></update-Product-Model>
    <!-- 刪除商品Modal -->
    <delete-Products-Model :temp-Item="tempItem" :delete-Product="deleteProduct" ref="dModel"></delete-Products-Model>
</template>

<script>
const { VITE_URL , VITE_PATH } = import.meta.env
import pagination from '../../components/PaginationMode.vue'
import updateProductModel from '../../components/UpdateProductModel.vue'
import deleteProductsModel from '../../components/DeleteProductsModel.vue'

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
      isLoading:true,
      fallPage:false
    };
  },
  computed: {
    //計算總共要有幾頁
    totalPage() {
      return Math.ceil(this.data.length / this.perPage);
    },
    //每頁的資料內容
    tempData() {
      return this.data.filter((item, index) => {
        return Math.floor(index / this.perPage) === this.currentPage - 1;
      });
    },
  },
  methods: {
    getData() {
        const api = `${VITE_URL}/api/${VITE_PATH}/admin/products/all`
        this.isLoading = true

        this.$http.get(api)
        .then((res) => {
            this.data = Object.values(res.data.products);
        })
        .catch((err) => {
          alert(err.response.data.message);
          console.log(err);
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
        if (this.isNew) {
        api = `${VITE_URL}/api/${VITE_PATH}/admin/product`;
        http = `post`;
        this.isLoading = true
      }
      this.$http[http](api, { data: this.tempItem })
        .then((res) => {
            console.log(http);
          alert(res.data.message);
          this.getData();
          this.$refs.pModel.closeModel();
        })
        .catch((err) => {
          alert(err.response.data.message);
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
        alert(res.data.message);
        this.getData();
        this.$refs.dModel.closeModel()
      })
      .catch((err) => {
        alert(err.data.message);
      })
      .finally(()=>{
            this.isLoading = false
        })
    },
    swichPage(page) {
      this.currentPage = page;
    },
  },
  mounted(){
    //取cookie資料
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");
    //token自動夾帶進去headers
    this.$http.defaults.headers.common['Authorization'] = token;

    this.getData()
  }
}
</script>