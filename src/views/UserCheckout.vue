<template>
  <VueLoading :active="isLoading"/>
  <div class="container my-35">
    <router-link class="d-inline-block my-8 link-secondary" to="/cart"><i class="bi bi-arrow-left me-2"></i>返回購物車</router-link>
    <!-- 購物車 -->
    <p class="text-center">
        <a class="text-secondary" data-bs-toggle="collapse" href="#cart" role="button" aria-expanded="false" aria-controls="collapseExample"><i class="bi bi-chevron-down me-3"></i>購物車資訊</a></p>
    <!-- 購物車折疊 -->
    <div class="collapse" id="cart">
        <div class="">
            <table class="table align-middle">
                <thead>
                    <tr >
                    <th class="thead-text">商品</th>
                    <th class="text-center thead-text">數量</th>
                    <th class="text-end thead-text ">單價</th>
                    <th class="text-end thead-text">小計</th>
                    <th class="text-center thead-text d-none d-md-block">刪除</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="cartData">
                    <tr v-for="item in cartData" :key="item.id">
                        <td height="100">
                        <img :src="item.product.imageUrl" :alt="item.product.title" width="100" class="rounded-2 me-5 mb-3 mb-md-0">
                        <br class="d-md-none">
                        <span>{{ item.product.title }}</span>
                        </td>
                        <td><div class="text-center">{{ item.qty }}</div></td>
                        <td class="text-end">
                        <div class="fs-12 text-decoration-line-through">{{ (item.product.origin_price).toLocaleString() }}</div>
                        <div class="fs-14">NT.{{ (item.product.price).toLocaleString() }}</div></td>
                        <td class="text-end fs-14">NT.{{ (item.product.price*item.qty).toLocaleString() }}</td>
                        <td class="text-center">
                        <span class="text-danger" @click="deleteItem('single',item)" style="cursor:pointer ;">
                            <i class="bi bi-trash-fill"></i>
                        </span>
                        </td>
                    </tr>
                    <div v-if="cartData.length<1">
                        <p class="text-center mb-0">購物車內還沒有商品</p>
                    </div>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
    <!-- 表單 -->
    <div class="row">
        <h2 class="h5 mb-5">填寫顧客資料</h2>
        <div class="col-lg-4">
            <div class="bg-light p-5 mb-8">
                <h3 class="fs-14 mb-3">寄送地點</h3>
                <select class="form-select form-select-sm pad-width-change-50 mb-8" aria-label="Default select example">
                    <option selected value="台灣本島">台灣本島</option>
                    <option value="台灣離島">台灣離島</option>
                </select>
                <h3 class="fs-14 mb-3">收貨方式</h3>
                <select class="form-select form-select-sm pad-width-change-50 mb-8" aria-label="Default select example">
                    <option selected value="宅配">宅配</option>
                    <option value="超商取貨(7-11)">超商取貨(7-11)</option>
                    <option value="超商取貨(全家)">超商取貨(全家)</option>
                </select>
                <h3 class="fs-14 mb-3">付款資料</h3>
                <select class="form-select form-select-sm pad-width-change-50" aria-label="Default select example">
                    <option selected value="信用卡">信用卡</option>
                    <option value="LinePay">LinePay</option>
                    <option value="宅配取貨付款">宅配取貨付款</option>
                    <option value="超商代碼">超商代碼</option>
                </select>
            </div>
            
            <table class="table table-borderless mb-10 mb-md-5">
            <thead>
              <tr class="thead-text border-bottom">
                <th>訂單小計</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr class="fs-14">
                <td>合計金額</td>
                <td>{{ total.toLocaleString() }} 元</td>
              </tr>
              <tr class="border-bottom fs-14">
                <td>優惠折抵</td>
                <td>{{ total-final_total }} 元</td>
              </tr>
              <tr class="fw-bold">
                <td class="text-primary">總金額</td>
                <td class="text-primary">{{ final_total.toLocaleString() }} 元</td>
              </tr>
            </tbody>
          </table>
    </div>
        <div class="col-lg-8">
            <div class="bg-light p-5">
                <v-form ref="form" v-slot="{ errors }" @submit="sentOrder">
                    <div class="mb-3">
                    <label for="email" class="form-label thead-text">Email</label>
                    <v-field id="email" name="email" type="email" class="form-control" rules="email|required"
                        :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" 
                        v-model="user.email"></v-field>
                    <error-message name="email" class="invalid-feedback"></error-message>
                    </div>

                    <div class="mb-3">
                    <label for="name" class="form-label form-label-text thead-text">收件人姓名</label>
                    <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                        placeholder="請輸入姓名" rules="required" v-model="user.name"></v-field>
                    <error-message name="姓名" class="invalid-feedback"></error-message>
                    </div>

                    <div class="mb-3">
                    <label for="tel" class="form-label thead-text">收件人電話</label>
                    <v-field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" :rules="isPhone" v-model="user.tel"></v-field>
                    <error-message name="電話" class="invalid-feedback"></error-message>
                    </div>

                    <div class="mb-3">
                    <label for="address" class="form-label thead-text">收件人地址</label>
                    <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                        placeholder="請輸入地址" rules="required" v-model="user.address"></v-field>
                    <error-message name="地址" class="invalid-feedback"></error-message>
                    </div>

                    <div class="mb-3">
                    <label for="message" class="form-label thead-text">訂單備註</label>
                    <textarea id="message" class="form-control" placeholder="有什麼想告訴賣家的嗎？" cols="30" rows="3" v-model="message"></textarea>
                    </div>
                    <div class="text-end mt-8">
                        <button type="submit" class="btn btn-primary text-white pad-width-change-25" @submit="sentOrder">確認訂購</button>
                    </div>
                </v-form>
            </div>
        </div>
</div>
  </div>
</template>

<script>
  const { VITE_URL , VITE_PATH } = import.meta.env

export default {
    data() {
        return {
            user:{
                name:'',
                email:'',
                tel:'',
                address:'',
            },
            message:'',
            cartData :[],
            addCartQty:1,
            final_total:0,
            total:0,
            isLoading:true
        }
    },
    methods: {
        // 電話驗證
        isPhone(value) { 
            const phoneNumber = /^(09)[0-9]{8}$/
            return phoneNumber.test(value) ? true : '需要正確的電話號碼'
            
        },
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
        // 送出訂單
        sentOrder(){
            let user = this.user
            let message = this.message
            this.isLoading = true
            const api = `${VITE_URL}/api/${VITE_PATH}/order`
            this.$http.post(api,
            {
                data:{
                    user
                },
                message:message
            })
            .then(res=>{
                this.cartData=[] //清空購物車
                this.$refs.form.resetForm() //使用內建方法resetForm()來清空表單
                localStorage.setItem('orderId' , res.data.orderId) //訂單編號存在localStorage，給下一頁取顧客資料用
                this.$router.push('order_complete')
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
        //取得購物車列表
        this.showCart()
    },
}
</script>

<style lang="scss">
@import '../assets/all.scss';

</style>