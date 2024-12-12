import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import routes from './routes.ts'
import DefaultSource from './views/LoginView.vue?raw'

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
}
