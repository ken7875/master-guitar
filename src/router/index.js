import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/frontend/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/frontend/Index.vue')
      },
      {
        path: '/products/:category',
        name: 'products',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: '/carts',
        name: 'carts',
        component: () => import('../views/frontend/Carts.vue')
      },
      {
        path: '/pay',
        name: 'pay',
        component: () => import('../views/frontend/Pay.vue')
      },
      {
        path: '/confirm/:orderId',
        name: 'confirm',
        component: () => import('../views/frontend/Confirm.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
