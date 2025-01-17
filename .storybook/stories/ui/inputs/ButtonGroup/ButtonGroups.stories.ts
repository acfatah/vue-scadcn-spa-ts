import type { StoryObj } from '@storybook/vue3'
import {
  ButtonGroup,
  ButtonGroupItem,
} from '~/components/ui/button-group'
import { Toaster } from '~/components/ui/toast'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import MultipleFormStory from './MultipleFormStory.vue'
import MultipleFormSource from './MultipleFormStory.vue?raw'
import SingleFormStory from './SingleFormStory.vue'
import SingleFormSource from './SingleFormStory.vue?raw'

/**
 * Customized ToggleGroup component to group buttons together.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/toggle-group.html
 */
export default {
  title: 'Data Entry/Button Group',
  component: ButtonGroup,
  subcomponents: {
    ButtonGroupItem,
  },
  tags: ['autodocs'],

  args: {
    defaultValue: 'button-3',
  },

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      description: 'The button variant',
    },

    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
      description: 'The button orientation',
    },
  },
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
      // @ts-expect-error Property 'defaultValue' does not exist on type {}
      const value = ref(args.defaultValue)

      return { args, value }
    },

    template: `
      <DefaultStory
        v-bind="args"
        @update:model-value="value = $event"
      />
      <div class="mt-4">
        value: {{ value }}
      </div>
    `,
  }),
}

export const FormSingle: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: SingleFormSource,
      },
    },
  },

  render: args => ({
    components: { SingleFormStory, Toaster },

    setup() {
      return { args }
    },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <SingleFormStory v-bind="args" />
    `,
  }),
}

export const FormMultiple: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: MultipleFormSource,
      },
    },
  },

  render: args => ({
    components: { MultipleFormStory, Toaster },

    setup() {
      return { args }
    },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <MultipleFormStory v-bind="args" />
    `,
  }),
}
