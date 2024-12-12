import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import { Toaster } from '~/components/ui/toast'
import routes from './routes.ts'
import DefaultSource from './views/LoginView.vue?raw'

export default {
  title: 'shadcn/Blocks/02 Login',
  component: App,
  tags: ['autodocs'],

  decorators: [vueRouter(routes, {
    initialRoute: '/login',
  })],

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

  render: () => ({
    components: { App, Toaster },
    template: '<Toaster /><App />',
  }),
}
