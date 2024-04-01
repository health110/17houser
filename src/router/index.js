import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/door',
      name: 'door',
      component: () => import('../views/DoorView/Index.vue')
    },
    {
      path: '/cupboard',
      name: 'cupboard',
      component: () => import('../views/CupboardView/Index.vue')
    },
    {
      path: '/skirtingLine',
      name: 'skirtingLine',
      component: () => import('../views/SkirtingLineView/Index.vue')
    },
    {
      path: '/waterBasin',
      name: 'waterBasin',
      component: () => import('../views/WaterBasinView/Index.vue')
    }
  ]
})

export default router
