import SidebarInsetLayout from './layouts/SidebarInsetLayout.vue'
import DashboardView from './views/DashboardView.vue'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      layout: SidebarInsetLayout,
    },
  },
]
