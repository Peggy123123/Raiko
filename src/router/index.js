import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '前台',
      component: ()=> import ('../views/FrontView.vue'),
      children:[{
        path: '/',
        name: '首頁',
        component: ()=> import ('../views/UserHome.vue')
      },
      {
        path: 'productslist',
        name: '商品列表',
        component: () => import('../views/UserProducts.vue'),
      },
      {
        path: 'productslist/:id', //動態路由 //不是產品列表的children
        name: '商品詳細頁',
        component: () => import('../views/UserProduct.vue'),
      },
      {
        path: 'cart',
        name: '購物車',
        component:()=> import('../views/UserCart.vue')
      },
      {
        path: 'checkout',
        name: '結帳',
        component:()=> import('../views/UserCheckout.vue')
      },
      {
        path: 'order_complete',
        name: '結帳完成',
        component:()=> import('../views/UserOderComplete.vue')
      },
      {
        path: 'paid_complete',
        name: '付款完成',
        component:()=> import('../views/UserPaid.vue')
      },
      {
        path: 'login',
        name: '登入頁面',
        component:()=> import ('../views/LoginView.vue')
      }]
    },
    {
      path: '/admin',
      name: '後台',
      component: ()=> import ('../views/Admin/AdminView.vue'),
      children:[
        {
          path: 'adminhome',
          name: '後台首頁',
          component:()=> import ('../views/Admin/AdminHome.vue')
        },
        {
          path: 'adminproduct',
          name: '商品管理',
          component:()=> import('../views/Admin/AdminProduct.vue')
        },
        {
          path: 'adminorder',
          name: '訂單管理',
          component:()=> import('../views/Admin/AdminOrder.vue')
        },
        {
          path: 'admincoupon',
          name: '優惠券頁面',
          component:()=> import ('../views/Admin/AdminCoupon.vue')
        },
      ]
    },
  ]
})

export default router
