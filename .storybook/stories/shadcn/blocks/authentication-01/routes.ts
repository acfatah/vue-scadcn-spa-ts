import CenteredLayout from './layouts/CenteredLayout.vue'
import LoginView from './views/Login/LoginView.vue'

export default [
  {
    path: '/login',
    name: 'login',
    meta: { layout: CenteredLayout },
    component: LoginView,
  },
]
