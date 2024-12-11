import SidebarCollapseLayout from './layouts/SidebarCollapseLayout.vue'
import Dashboard from './views/Dashboard.vue'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      layout: SidebarCollapseLayout,
    },
  },
]
