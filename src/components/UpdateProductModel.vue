<template>
    <!-- <VueLoading :active="isLoading"/> -->
    <div ref="productsModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
    aria-hidden="true">
 <div class="modal-dialog modal-xl">
   <div class="modal-content border-0">
     <div class="modal-header bg-dark text-white">
       <h5 id="productModalLabel" class="modal-title">
         <span ref="title">新增產品</span>
       </h5>
       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
     <div class="modal-body">
       <div class="row">
         <div class="col-sm-4">
           <div class="mb-2">
            <h6>主圖</h6>
             <div class="mb-3">
               <label for="imageUrl" class="form-label">輸入圖片網址</label>
               <input type="text" class="form-control"
                      placeholder="請輸入圖片連結" v-model="editProduct.imageUrl">
             </div>
             <div class="mb-3">
              <label for="upload" class="form-label">或 上傳圖片</label>
              <input type="file" id="upload" class="form-control" @change="uploadFile">
             </div>
             <img :src="editProduct.imageUrl" :alt="editProduct.title" width="150" class="mb-2" v-if="editProduct.imageUrl">
           </div>
           <h6>多圖新增</h6>
             <div v-if="Array.isArray(editProduct.imagesUrl)">
               <div v-for="(item,i) in editProduct.imagesUrl" :key="i" class="mb-3">
                 <img :src="item" :alt="item" width="150" class="mb-2" v-if="item">
                 <input type="text" class="form-control mb-3" v-model="editProduct.imagesUrl[i]" placeholder="請輸入圖片連結">
               </div>
               <div>
                 <!-- 如果imagesUrl長度為0，或陣列最後一個索引有值，就會顯示這段 -->
                 <div v-if="!editProduct.imagesUrl.length || editProduct.imagesUrl[editProduct.imagesUrl.length-1]">
                   <button class="btn btn-outline-success btn-sm d-block w-100" @click.prevent="editProduct.imagesUrl.push('')">
                   新增圖片
                   </button>
                 </div>
                 <!-- 如果imagesUrl長度不為0，且最後一個索引沒有值 -->
                 <div v-if="editProduct.imagesUrl.length && !editProduct.imagesUrl[editProduct.imagesUrl.length-1]">
                   <button class="btn btn-outline-danger btn-sm d-block w-100" @click.prevent="editProduct.imagesUrl.pop()">
                   刪除圖片
                   </button>
                 </div>
               </div>
             </div>
           </div>
         <div class="col-sm-8">
           <div class="mb-3">
             <label for="title" class="form-label">標題</label>
             <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="editProduct.title">
           </div>

           <div class="row">
             <div class="mb-3 col-md-6">
               <label for="category" class="form-label">分類</label>
               <input id="category" type="text" class="form-control"
                      placeholder="請輸入分類" v-model="editProduct.category">
             </div>
             <div class="mb-3 col-md-6">
               <label for="price" class="form-label">單位</label>
               <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="editProduct.unit">
             </div>
           </div>

           <div class="row">
             <div class="mb-3 col-md-6">
               <label for="origin_price" class="form-label">原價</label>
               <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價" v-model.number="editProduct.origin_price">
             </div>
             <div class="mb-3 col-md-6">
               <label for="price" class="form-label">售價</label>
               <input id="price" type="number" min="0" class="form-control"
                      placeholder="請輸入售價" v-model.number="editProduct.price">
             </div>
           </div>
           <hr>

           <div class="mb-3">
             <label for="description" class="form-label">產品描述</label>
             <textarea id="description" type="text" class="form-control"
                       placeholder="請輸入產品描述" v-model="editProduct.description">
             </textarea>
           </div>
           <div class="mb-3">
             <label for="content" class="form-label">說明內容</label>
             <textarea id="description" type="text" class="form-control"
                       placeholder="請輸入說明內容" v-model="editProduct.content">
             </textarea>
           </div>
           <div class="mb-3">
             <div class="form-check">
               <input id="is_enabled" class="form-check-input" type="checkbox"
                     :true-value="1" :false-value="0" v-model="editProduct.is_enabled">
               <label class="form-check-label" for="is_enabled">是否啟用</label>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
         取消
       </button>
       <button type="button" class="btn btn-success" @click.prevent="updateProduct">
         確認
       </button>
     </div>
   </div>
 </div>
</div>
</template>

<script> 
import { Modal } from 'bootstrap' //從 node_modules 中的 bootstrap 模組中尋找並引入 Modal 類別
const { VITE_URL , VITE_PATH } = import.meta.env

export default {
    data() {
    return {
      productsModal: null,
      editProduct:{}, //因為不能直接變更傳進來的tempItem的值，所以tempItem要先賦予到新的變數上
      isLoading:true,
      fallPage:false
    };
  },
  props: ["tempItem", "updateProduct"],
  watch:{
    tempItem(){
      this.editProduct = this.tempItem
    }
  },
  methods: {
    openModel(status){
        this.productsModal.show()
        if(status === "new"){
          this.$refs.title.textContent = "新增商品"
        }else{
          this.$refs.title.textContent = "編輯商品"
        }
    },
    closeModel(){
        this.productsModal.hide()
    },
    updateProduct(){
      this.$emit('update-Product')
      console.log(this.editProduct);
    },
    uploadFile(){ //上傳圖片
      this.isLoading = true
      const upload = document.getElementById('upload')
      const formData = new FormData()
      formData.append('file-to-upload',upload.files[0]) //前者是api規定的name，後者是上傳的檔案在dom保存的地方
      const api = `${VITE_URL}/api/${VITE_PATH}/admin/upload`
      this.$http.post(api , formData)
      .then(res=>{
        this.editProduct.imageUrl = res.data.imageUrl
      })
      .catch(err=>{
        alert(err.response.data.message)
      })
      .finally(()=>{
            this.isLoading = false
        });
    }
},
  mounted() {
    //取cookie資料
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");
    //token自動夾帶進去headers
    this.$http.defaults.headers.common['Authorization'] = token;

    this.productsModal = new Modal(
      this.$refs.productsModal,
      {
        backdrop: "static",
        keyboard: false,
      },
    );
    this.editProduct = this.tempItem
  },
}
</script>