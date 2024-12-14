import {
  AutoForm,
  AutoFormField,
  AutoFormFieldArray,
  AutoFormFieldBoolean,
  AutoFormFieldDate,
  AutoFormFieldEnum,
  AutoFormFieldFile,
  AutoFormFieldInput,
  AutoFormFieldNumber,
  AutoFormFieldObject,
  AutoFormLabel,
} from '~/components/ui/auto-form'
import { Toaster } from '~/components/ui/toast'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Automatically generate a form from Zod schema.
 *
 * Documentation: https://www.shadcn-vue.com/docs/components/auto-form.html<br />
 * Primitive API Reference: https://vee-validate.logaretm.com/v4/guide/overview<br />
 * Zod API Reference: https://zod.dev/?id=basic-usage
 */
export default {
  title: 'Forms/AutoForm',
  tags: ['autodocs'],
  component: DefaultStory,
  subcomponents: {
    AutoForm,
    AutoFormField,
    AutoFormFieldArray,
    AutoFormFieldBoolean,
    AutoFormFieldDate,
    AutoFormFieldEnum,
    AutoFormFieldFile,
    AutoFormFieldInput,
    AutoFormFieldNumber,
    AutoFormFieldObject,
    AutoFormLabel,
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
    components: { DefaultStory, Toaster },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <div class="container m-auto">
        <DefaultStory />
      </div>
    `,
  }),
}
