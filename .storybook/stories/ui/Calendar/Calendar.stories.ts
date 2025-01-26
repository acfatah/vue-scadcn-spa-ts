import type { StoryObj } from '@storybook/vue3'
import {
  Calendar,
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarNextButton,
  CalendarPrevButton,
} from '~/components/ui/calendar'
import { Toaster } from '~/components/ui/toast'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import WithMonthYearSelectionStory from './WithMonthYearSelection.vue'
import WithMonthYearSelectionSource from './WithMonthYearSelection.vue?raw'

/**
 * A date field component that allows users to enter and edit date.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/calendar.html
 *
 * See also:
 * - [Data Entry/Datepicker](?path=/docs/data-entry-date-picker--docs) component
 * - [Date and Time in Radix Vue](https://www.radix-vue.com/guides/dates.html)
 * - [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html)
 */
export default {
  title: 'Data Display/Calendar',
  component: DefaultStory,
  subcomponents: {
    Calendar,
    CalendarCell,
    CalendarCellTrigger,
    CalendarGrid,
    CalendarGridBody,
    CalendarGridHead,
    CalendarGridRow,
    CalendarHeadCell,
    CalendarHeader,
    CalendarHeading,
    CalendarNextButton,
    CalendarPrevButton,
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

export const WithMonthYearSelection: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithMonthYearSelectionSource,
      },
    },
  },

  render: args => ({
    components: { WithMonthYearSelectionStory, Toaster },
    setup() {
      return { args }
    },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <WithMonthYearSelectionStory v-bind="args" />
    `,
  }),
}
