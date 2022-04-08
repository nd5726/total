import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        component: () => import('../views/IndexView.vue')
      },
      {
        path: '/product',
        component: () => import('../views/ProductListView.vue')
      },
      {
        path: '/product/:id',
        component: () => import('../views/ProductDetailView.vue')
      },
      {
        path: '/cart1',
        component: () => import('../views/CartStep1View.vue')
      },
      {
        path: '/cart2',
        component: () => import('../views/CartStep2View.vue')
      },
      {
        path: '/cartFinish',
        component: () => import('../views/CartFinishView.vue')
      },
      {
        path: '/question',
        component: () => import('../views/QuestionView.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: '/admin',
        component: () => import('../views/Admin/ProductView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Admin/OrdersView.vue')
      },
      {
        path: 'question',
        component: () => import('../views/Admin/QuestionView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
