import type { StoryObj } from '@storybook/vue3'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Displays content within a desired ratio.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/aspect-ratio.html
 */
export default {
  title: 'Graphic Elements/Aspect Ratio',
  component: DefaultStory,
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
