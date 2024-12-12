import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import { Toaster } from '~/components/ui/toast'
import routes from './routes.ts'
import DefaultSource from './views/Login/LoginView.vue?raw'

export default {
  title: 'shadcn/Blocks/Authentication-01',
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
