import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
  },
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
    },
    ignores: [
      'package.json',
      'package-lock.json',
    ],
  },
)
