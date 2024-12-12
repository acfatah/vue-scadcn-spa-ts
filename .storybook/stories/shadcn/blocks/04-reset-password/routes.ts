import type { RouteRecordRaw } from 'vue-router'
import CenteredLayout from './layouts/CenteredLayout.vue'
import ResetPasswordView from './views/ResetPasswordView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: {
      render() {
        window.location.href = '/iframe.html?globals=&args=&id=shadcn-blocks-02-login--default&viewMode=story'
      },
    },
  },

  {
    path: '/register',
    name: 'register',
    component: {
      render() {
        window.location.href = '/iframe.html?globals=&args=&id=shadcn-blocks-register--default&viewMode=story'
      },
    },
  },

  {
    path: '/reset-password',
    name: 'reset-password',
    meta: { layout: CenteredLayout },
    component: ResetPasswordView,
  },
]

export default routes
