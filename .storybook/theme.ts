import { create } from '@storybook/theming/create'
import { name, repository } from '../package.json'

/**
 * https://storybook.js.org/docs/configure/user-interface/theming
 */
export default create({
  base: 'dark',

  // Typography
  fontBase: 'Inter, ui-sans-serif, system-ui, sans-serif, "Open Sans"',
  fontCode: 'monospace',

  brandTitle: name,
  brandUrl: `https://github.com/acfatah/${repository.url}`,

  colorPrimary: '#10bbd2',
  colorSecondary: '#41B883',

  // Toolbar default and active colors
  barHoverColor: '#10bbd2',
})
