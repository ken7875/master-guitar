import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/frontend/Home.vue'
// import VueCookies from 'vue-cookie'
// import store from '@/store.js'
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
        path: '/products/',
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
      },
      {
        path: '/favorite',
        name: 'favorite',
        component: () => import('../views/frontend/Favorite.vue')
      },
      {
        path: '/course',
        name: 'course',
        component: () => import('../views/frontend/Course.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Backend/LogIn.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    meta: { requiresAuth: true },
    component: () => import('../views/Backend/Dashboard.vue'),
    children: [
      {
        path: 'backendProducts',
        name: 'backendProducts',
        meta: { requiresAuth: true },
        component: () => import('../views/Backend/Backend/BackendProducts.vue')
      },
      {
        path: 'backendOrders',
        meta: { requiresAuth: true },
        component: () => import('../views/Backend/Backend/BackendOrders.vue')
      },
      {
        path: 'backendCoupons',
        meta: { requiresAuth: true },
        component: () => import('../views/Backend/Backend/BackendCoupons.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     const isAuth = !!(store.token === '' || store.token === null)
//     if (isAuth) {
//       next({ name: 'Login' })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
