import type { RouteRecordRaw } from 'vue-router'
import LoginView from './views/LoginView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },

  {
    path: '/register',
    name: 'register',
    component: {
      render() {
        window.location.href = '/iframe.html?globals=&args=&id=shadcn-blocks-03-register--default&viewMode=story'
      },
    },
  },

  {
    path: '/reset-password',
    name: 'reset-password',
    component: {
      render() {
        window.location.href = '/iframe.html?globals=&args=&id=shadcn-blocks-04-reset-password--default&viewMode=story'
      },
    },
  },
]

export default routes
