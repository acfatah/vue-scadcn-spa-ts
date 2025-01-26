import type { StoryObj } from '@storybook/vue3'
import {
  RangeCalendar,
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHead,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarNextButton,
  RangeCalendarPrevButton,
} from '~/components/ui/range-calendar'
import { Toaster } from '~/components/ui/toast'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import WithIndependentMonthsStory from './WithIndependentMonths.vue'
import WithIndependentMonthsSource from './WithIndependentMonths.vue?raw'

/**
 * A calendar component that allows users to select a range of dates.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/range-calendar.html
 */
export default {
  title: 'Data Entry/Date Range Picker',
  component: DefaultStory,
  subcomponents: {
    RangeCalendar,
    RangeCalendarCell,
    RangeCalendarCellTrigger,
    RangeCalendarGrid,
    RangeCalendarGridBody,
    RangeCalendarGridHead,
    RangeCalendarGridRow,
    RangeCalendarHeadCell,
    RangeCalendarHeader,
    RangeCalendarHeading,
    RangeCalendarNextButton,
    RangeCalendarPrevButton,
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

export const WithIndependentMonths: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithIndependentMonthsSource,
      },
    },
  },

  render: args => ({
    components: { WithIndependentMonthsStory },

    setup() {
      return { args }
    },

    template: `
      <WithIndependentMonthsStory v-bind="args" />
    `,
  }),
}
