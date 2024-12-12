import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import DefaultSource from './layouts/SidebarInsetLayout.vue?raw'
import routes from './routes.ts'

/**
 * An inset sidebar with secondary navigation.
 */
export default {
  title: 'shadcn/Blocks/Sidebar 08',
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
