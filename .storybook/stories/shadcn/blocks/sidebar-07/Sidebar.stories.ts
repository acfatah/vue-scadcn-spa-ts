import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import DefaultSource from './layouts/SidebarCollapseLayout.vue?raw'
import routes from './routes.ts'

/**
 * A sidebar that collapses to icons.
 */
export default {
  title: 'shadcn/Blocks/Sidebar 07',
  component: App,
  tags: ['autodocs'],
  decorators: [vueRouter(routes)],
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: DefaultSource,
      },
    },
  },
}
