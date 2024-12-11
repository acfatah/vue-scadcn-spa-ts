import { withThemeByClassName } from '@storybook/addon-themes'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { type Preview, setup } from '@storybook/vue3'

// eslint-disable-next-line perfectionist/sort-imports
import { createPinia } from 'pinia'

// eslint-disable-next-line perfectionist/sort-imports
import theme from './theme'

/* eslint-disable */
import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks'
import React from 'react'
/* eslint-enable */

import '../src/styles/app.css'

const pinia = createPinia()

setup((app) => {
  app.use(pinia)
})

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },

    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: [
          'Readme',
          'shadcn',
        ],
        locales: 'en-US',
      },
    },

    themes: {
      target: 'html',
    },

    docs: {
      theme,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },

      defaultTheme: 'light',
    }),

    // Decorator to apply bg-color to stories in dark mode
    (_) => {
      const body = document.querySelector('body')
      const stories = document.querySelectorAll('.docs-story')
      const THEME_CLASS = 'bg-background'

      body?.classList.add(THEME_CLASS)
      stories.forEach((element) => {
        element.classList.add(THEME_CLASS)
      })

      return { template: `<story/>` }
    },
  ],
}

export default preview
