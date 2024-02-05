<template>
    <div class="modal fade" id="productModal" ref="userProductModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content border-0">
                <div class="modal-header bg-dark text-white">
                <h5 class="modal-title" id="exampleModalLabel">
                    <span>{{ singleProductItem.title }}</span>
                </h5>
                <button type="button" class="btn-close"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                    <div class="col-sm-6">
                    <img class="img-fluid" :src="singleProductItem.imageUrl" :alt="singleProductItem.title"></div>
                        <div class="col-sm-6">
                        <span class="badge bg-primary rounded-pill">{{ singleProductItem.category }}</span>
                        <p>商品描述：{{ singleProductItem.description }}</p>
                        <p>商品內容：{{ singleProductItem.content }}</p>
                        <div class="h5">{{ singleProductItem.price }} 元</div>
                        <del class="h6">原價 {{singleProductItem.origin_price }} 元</del>
                        <div class="h5">現在只要 {{ singleProductItem.price }} 元</div>
                        <div>
                                <div class="input-group">
                                <input type="number" class="form-control" v-model="qty" min="1"> 
                                <button type="button" class="btn btn-primary" @click="addCart(singleProductItem,qty)">加入購物車</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['singleProductItem','addCart','addCartQty'],
          data() {
            return {
              singleProduct: null, //商品詳細視窗
              qty:1
            }
          },
          methods:{
            openModel(){
              this.singleProduct.show()
            },
            hideModel(){
              this.singleProduct.hide()
            }
          },
          mounted() {
            this.singleProduct = new bootstrap.Modal(this.$refs.userProductModal , {
                  keyboard: false
              });
          },
    }
</script>