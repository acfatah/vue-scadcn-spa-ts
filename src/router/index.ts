import type { Router, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '~/components/layouts/DefaultLayout.vue'
import HomeView from '~/views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: { layout: DefaultLayout },
    component: HomeView,
  },
  {
    path: '/blank',
    name: 'blank',
    component: () => import('~/views/BlankView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('~/views/NotFoundView.vue'),
  },
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
