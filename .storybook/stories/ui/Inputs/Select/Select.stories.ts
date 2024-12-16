import type { StoryObj } from '@storybook/vue3'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { Toaster } from '~/components/ui/toast'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import ScrollableStory from './ScrollableStory.vue'
import ScrollableSource from './ScrollableStory.vue?raw'

/**
 * Displays a list of options for the user to pick from—triggered by a button.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/select.html
 */
export default {
  title: 'Data Entry/Select',
  component: DefaultStory,
  subcomponents: {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  },
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

  args: {
    disabled: false,
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

export const Form: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: FormSource,
      },
    },
  },

  render: args => ({
    components: { FormStory, Toaster },

    setup() {
      return { args }
    },

    template: `
      <Teleport defer to="body">
        <Toaster />
      </Teleport>
      <FormStory v-bind="args" />
    `,
  }),
}

export const Scrollable: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: ScrollableSource,
      },
    },
  },

  render: args => ({
    components: { ScrollableStory },

    setup() {
      return { args }
    },

    template: `
      <ScrollableStory v-bind="args" />
    `,
  }),
}
