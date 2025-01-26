import type { StoryObj } from '@storybook/vue3'
import { Calendar } from '~/components/ui/calendar'
import { Toaster } from '~/components/ui/toast'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import WithPresetStory from './WithPresetStory.vue'
import WithPresetSource from './WithPresetStory.vue?raw'

/**
 * A date field component that allows users to enter and edit date.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/calendar.html
 *
 * See also:
 * - [Data Entry/Calendar](?path=/docs/data-display-calendar--docs) component
 * - [Data Entry/Range Calendar](?path=/docs/data-display-range-calendar--docs) component
 * - [Overlays/Popover](?path=/docs/overlays-popover--docs) component
 */
export default {
  title: 'Data Entry/Datepicker',
  component: Calendar,
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
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <FormStory v-bind="args" />
    `,
  }),
}

export const WithPreset: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithPresetSource,
      },
    },
  },

  render: args => ({
    components: { WithPresetStory },

    setup() {
      return { args }
    },

    template: `
      <WithPresetStory v-bind="args" />
    `,
  }),
}
