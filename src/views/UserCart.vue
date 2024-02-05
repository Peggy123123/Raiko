<template>
  <VueLoading :active="isLoading"/>
  <div class="container mt-5 pt-5">
    <div class="text-end">
    <button class="btn btn-outline-danger" type="button" @click="deleteItem('all')" :disabled="cartData.length<1">清空購物車</button>
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th class="text-end">單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cartData">
        <tr v-for="item in cartData" :key="item.id">
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem('single',item)">
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <div class="text-success">
              已套用優惠券
            </div>
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <input 
                      min="1" type="number" class="form-control" v-model="item.qty" @blur="(evt)=>changeCart(item,evt)">
                <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
              </div>
            </div>
          </td>
          <td class="text-end">
              {{ item.product.origin_price }} <br>
            <small class="text-success ">折扣價：</small>
            {{ item.product.price }}
          </td>
        </tr>
        <div v-if="cartData.length<1">
          <p class="text-center mb-0">購物車內還沒有商品</p>
        </div>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ total }}</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ final_total }}</td>
      </tr>
    </tfoot>
  </table>
  <!-- 表單 -->
  <!-- <div class="my-5 row justify-content-center">
      <v-form ref="form" class="col-md-6" v-slot="{ errors }" @submit="sentOrder">
          <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <v-field id="email" name="email" type="email" class="form-control" rules="email|required"
                      :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" 
                      v-model="user.email"></v-field>
          <error-message name="email" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                      placeholder="請輸入姓名" rules="required" v-model="user.name"></v-field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <v-field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" :rules="isPhone" v-model="user.tel"></v-field>
          <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                      placeholder="請輸入地址" rules="required" v-model="user.address"></v-field>
          <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea id="message" class="form-control" cols="30" rows="10" v-model="message"></textarea>
          </div>
          <div class="text-end">
          <button type="submit" class="btn btn-danger"
                  >送出訂單</button>
          </div>
      </v-form>
    </div> -->
  </div>
</template>

    
<script>
  const { VITE_URL , VITE_PATH } = import.meta.env
  import Swal from 'sweetalert2';

export default {
    data() {
        return {
            cartData :[],
            addCartQty:1,
            final_total:0,
            total:0,
            // user:{
            //     name:'',
            //     email:'',
            //     tel:'',
            //     address:'',
            // },
            // message:'',
            isLoading:true
        }
    },
    methods:{
        //顯示購物車
        showCart(){
          this.isLoading = true
          const api = `${VITE_URL}/api/${VITE_PATH}/cart`
            this.$http.get(api)
            .then(res=>{
              this.cartData = res.data.data.carts
              this.final_total = res.data.data.final_total
              this.total = res.data.data.total
            })
            .catch(err=>{
              alert(err.response.data.message)
            })
            .finally(()=>{
              this.isLoading = false
            })
        },
        //更新購物車
        changeCart(item,evt){
          this.isLoading = true
            this.$http.put(`${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`,
            {
                data:{
                    product_id:item.product_id,
                    qty:parseInt(evt.target.value)
                }
            })
            .then(res=>{
                this.showCart()
            })
            .catch(err=>{
                alert(err.response.data.message);
            })
            .finally(()=>{
              this.isLoading = false
            })
        },
        //刪除購物車
        deleteItem(status,item){
          Swal.fire({
            title: "確定刪除商品嗎?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "取消",
            confirmButtonText: "確定",
            width: 350,
          }).then((result) => {
            if (result.isConfirmed) {
              this.isLoading = true
              let api = `${VITE_URL}/api/${VITE_PATH}/carts`
              if(status === 'single'){
                api = `${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`
              }
              this.$http.delete(api)
              .then(res=>{
                  this.showCart()
              })
              .catch(err=>{
                  alert(err.response.data.message)
              })
              .finally(()=>{
                this.isLoading = false
              })
              }
            });
        },
        //電話驗證
        // isPhone(value) { 
        //     const phoneNumber = /^(09)[0-9]{8}$/
        //     return phoneNumber.test(value) ? true : '需要正確的電話號碼'
            
        // },
        //送出訂單
        // sentOrder(){
        //     let user = this.user
        //     let message = this.message
        //     let loader = this.$loading.show()
        //     axios.post(`${this.url}/api/${this.api_path}/order`,
        //     {
        //         data:{
        //             user
        //         },
        //         message:message
        //     })
        //     .then(res=>{
        //         alert(res.data.message);
        //         this.cartData=[] //清空購物車
        //         this.$refs.form.resetForm() //使用內建方法resetForm()來清空表單
        //         loader.hide()
        //     })
        //     .catch(err=>{
        //         alert(err.response.data.message);
        //         loader.hide()
        //     });
        // }
    },
    mounted() {
        //取得購物車列表
        this.showCart()
    },
    }
</script>

