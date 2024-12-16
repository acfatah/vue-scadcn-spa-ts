<script setup lang="ts">
import { Label, type LabelProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes, inject } from 'vue'
import { cn } from '~/lib/utils'

const props = defineProps<LabelProps & {
  class?: HTMLAttributes['class']
  disabled?: boolean
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
const disabled = inject('disabled', false)
</script>

<template>
  <Label
    v-bind="forwardedProps"
    :class="
      cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 disabled:cursor-not-allowed',
        props.class,
        { 'opacity-70 cursor-not-allowed': props.disabled || disabled },
      )
    "
  >
    <slot />
  </Label>
</template>
