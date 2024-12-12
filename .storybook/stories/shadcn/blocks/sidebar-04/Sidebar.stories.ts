import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import DefaultSource from './layouts/SidebarFloatingLayout.vue?raw'
import routes from './routes.ts'

/**
 * A floating sidebar with submenus.
 */
export default {
  title: 'shadcn/Blocks/Sidebar 04',
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
