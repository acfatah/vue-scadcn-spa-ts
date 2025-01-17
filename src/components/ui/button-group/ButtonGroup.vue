<script setup lang="ts">
import type { VariantProps } from 'class-variance-authority'
import type { buttonGroupVariants } from '.'
import { ToggleGroupRoot, type ToggleGroupRootEmits, type ToggleGroupRootProps, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes, provide, reactive } from 'vue'
import { cn } from '~/lib/utils'

type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>

const props = defineProps<ToggleGroupRootProps & {
  class?: HTMLAttributes['class']
  variant?: ButtonGroupVariants['variant']
  size?: ButtonGroupVariants['size']
  orientation?: ButtonGroupVariants['orientation']
}>()

const emits = defineEmits<ToggleGroupRootEmits>()

provide('buttonGroup', reactive({
  variant: props.variant,
  size: props.size,
}))

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ToggleGroupRoot
    v-bind="forwarded"
    :class="cn(
      'inline-flex w-min',
      props.class,
      props.orientation === 'vertical' && 'flex-col',
      props.variant === 'outline' && 'border rounded-[--radius]',
    )"
  >
    <slot />
  </ToggleGroupRoot>
</template>
