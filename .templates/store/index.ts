import type { PlopGeneratorConfig } from 'plop'

export const storeGenerator: PlopGeneratorConfig = {
  description: 'Pinia store generator',

  prompts: [{
    type: 'input',
    name: 'name',
    message: 'store name in camelCase',
  }],

  actions: [
    {
      type: 'add',
      path: '../src/stores/{{kebabCase name}}/actions.ts',
      templateFile: 'store/files/actions.ts.hbs',
    },
    {
      type: 'add',
      path: '../src/stores/{{kebabCase name}}/getters.ts',
      templateFile: 'store/files/getters.ts.hbs',
    },
    {
      type: 'add',
      path: '../src/stores/{{kebabCase name}}/index.ts',
      templateFile: 'store/files/index.ts.hbs',
    },
    {
      type: 'add',
      path: '../src/stores/{{kebabCase name}}/state.ts',
      templateFile: 'store/files/state.ts.hbs',
    },
  ],
}

export default storeGenerator
