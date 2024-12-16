import lucideIconResolver from './lucide-icon-resolver'
import radixVueResolver from './radix-vue-resolver'
import searchDirsResolver from './search-dirs-resolver'
import vaulVueResolver from './vaul-vue-resolver'
import veeValidateResolver from './vee-validate-resolver'
import vueuseComponentsResolver from './vueuse-components-resolver'

export const searchDirs = [
  'src/components',
]

export const resolvers = [
  searchDirsResolver,
  lucideIconResolver,
  radixVueResolver,
  veeValidateResolver,
  vueuseComponentsResolver,
  vaulVueResolver,
]
