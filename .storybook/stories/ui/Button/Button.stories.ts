import type { StoryObj } from '@storybook/vue3'
import {
  ChevronRight as ChevronRightIcon,
  MailOpen as MailOpenIcon,
  RotateCw as RotateCwIcon,
} from 'lucide-vue-next'
import { Button } from '~/components/ui/button'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'

const PrimitiveProps = ['as', 'asChild']

/**
 * Displays a button or a component that looks like a button.
 */
export default {
  title: 'Data Entry/Button',
  component: Button,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },

    size: {
      control: { type: 'select' },
      options: ['default', 'xs', 'sm', 'lg', 'icon'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },

    as: {
      type: 'string',
      table: {
        type: { summary: ['string | Component'] },
        defaultValue: { summary: 'button' },
      },
      description: '[AsTag](https://github.com/unovue/radix-vue/blob/main/packages/radix-vue/src/Primitive/Primitive.ts#L4)',
    },

    asChild: {
      type: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      description: '[Radix\'s Composition](https://www.radix-vue.com/guides/composition.html)',

    },

    class: {
      type: 'string',
      table: {
        type: { summary: 'string | array | object' },
        defaultValue: { summary: 'null' },
      },
      description: 'HTMLAttributes[\'class\']',
    },
  },
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: `<Button>Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: `
      <Button v-bind="args">{{ args.text }}</Button>
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

  render: () => ({
    components: { FormStory },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <FormStory />
    `,
  }),
}

export const Secondary: StoryObj = {
  parameters: {
    controls: {
      exclude: [...PrimitiveProps, 'variant'],
    },

    docs: {
      source: {
        code: `<Button variant="secondary">Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
    variant: 'secondary',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: `
      <Button v-bind="args">{{ args.text }}</Button>
    `,
  }),
}

export const Destructive: StoryObj = {
  parameters: {
    controls: {
      exclude: [...PrimitiveProps, 'variant'],
    },

    docs: {
      source: {
        code: `<Button variant="destructive">Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
    variant: 'destructive',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: `
      <Button v-bind="args">{{ args.text }}</Button>
    `,
  }),
}

export const Outline: StoryObj = {
  parameters: {
    controls: {
      exclude: [...PrimitiveProps, 'variant'],
    },

    docs: {
      source: {
        code: `<Button variant="outline">Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
    variant: 'outline',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: `
      <Button v-bind="args">{{ args.text }}</Button>
    `,
  }),
}

export const Ghost: StoryObj = {
  parameters: {
    controls: {
      exclude: [...PrimitiveProps, 'variant'],
    },

    docs: {
      source: {
        code: `<Button variant="ghost">Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
    variant: 'ghost',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: `
      <Button v-bind="args">{{ args.text }}</Button>
    `,
  }),
}

export const Icon: StoryObj = {
  parameters: {
    controls: {
      exclude: [...PrimitiveProps, 'size'],
    },

    docs: {
      source: {
        code: `
<Button variant="outline" size="icon">
  <ChevronRightIcon class="size-4" />
</Button>
`,
      },
    },
  },

  render: (args) => {
    return {
      components: { Button, ChevronRightIcon },

      setup() {
        return { args }
      },

      template: `
        <Button variant="outline" size="icon" v-bind="args">
          <ChevronRightIcon class="size-4" />
        </Button>
      `,
    }
  },
}

export const WithIcon: StoryObj = {
  parameters: {
    controls: {
      exclude: PrimitiveProps,
    },

    docs: {
      source: {
        code: `
<Button>
  <MailOpenIcon class="size-4 mr-2" />
  Login with Email
</Button>
`,
      },
    },
  },

  render: (args) => {
    return {
      components: { Button, MailOpenIcon },

      setup() {
        return { args }
      },

      template: `
        <Button v-bind="args">
          <MailOpenIcon class="size-4 mr-2" />
          Login with Email
        </Button>
      `,
    }
  },
}

export const Loading: StoryObj = {
  parameters: {
    controls: {
      exclude: PrimitiveProps,
    },

    docs: {
      source: {
        code: `
<Button disabled">
  <RotateCwIcon class="size-4 mr-2 animate-spin" />
  Please wait
</Button>
      `,
      },
    },
  },

  render: (args) => {
    return {
      components: { Button, RotateCwIcon },

      setup() {
        return { args }
      },

      template: `
        <Button disabled v-bind="args">
          <RotateCwIcon class="size-4 mr-2 animate-spin" />
          Please wait
        </Button>
      `,
    }
  },
}
