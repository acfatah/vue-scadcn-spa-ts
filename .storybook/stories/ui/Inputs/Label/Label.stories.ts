import type { StoryObj } from '@storybook/vue3'
import { Label } from '~/components/ui/label'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Renders an accessible label associated with controls.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/label.html
 */
export default {
  title: 'Data Entry/Label',
  component: Label,
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DefaultSource,
      },
    },
  },

  render: args => ({
    components: { DefaultStory },

    setup() {
      return { args }
    },

    template: `
      <DefaultStory v-bind="args" />
    `,
  }),
}
