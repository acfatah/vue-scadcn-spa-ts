import { createContext } from 'radix-vue'

export { default as RadioGroup } from './RadioGroup.vue'
export { default as RadioGroupItem } from './RadioGroupItem.vue'

export const [useRadioGroup, provideRadioGroupContext] = createContext<{
  disabled: Ref<boolean>
}>('RadioGroup')
