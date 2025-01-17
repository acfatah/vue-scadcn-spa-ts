<script setup lang="ts">
import type { VariantProps } from 'class-variance-authority'
import { ToggleGroupItem, type ToggleGroupItemProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes, inject } from 'vue'
import { buttonGroupVariants } from '.'

type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>

const props = defineProps<ToggleGroupItemProps & {
  class?: HTMLAttributes['class']
  variant?: ButtonGroupVariants['variant']
  size?: ButtonGroupVariants['size']
}>()

const context = inject<ButtonGroupVariants>('buttonGroup')

const delegatedProps = computed(() => {
  const { class: _, variant, size, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ToggleGroupItem
    v-bind="forwardedProps"
    :class="cn(
      buttonGroupVariants({
        variant: context?.variant || variant,
        size: context?.size || size,
      }),
      props.class,
    )"
  >
    <slot />
  </ToggleGroupItem>
</template>
