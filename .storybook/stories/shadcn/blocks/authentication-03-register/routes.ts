import type { RouteRecordRaw } from 'vue-router'
import CenteredLayout from './layouts/CenteredLayout.vue'
import RegisterView from './views/RegisterView.vue'

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
    meta: { layout: CenteredLayout },
    component: RegisterView,
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
