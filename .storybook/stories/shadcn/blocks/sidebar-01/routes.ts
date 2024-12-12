import SidebarCollapseLayout from './layouts/SidebarSimpleLayout.vue'
import DashboardView from './views/DashboardView.vue'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      layout: SidebarCollapseLayout,
    },
  },
]
