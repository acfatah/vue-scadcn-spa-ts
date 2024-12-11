<script setup lang="ts">
import { useDark } from '~/components/composables/use-dark'
import BlankLayout from '~/components/layouts/BlankLayout.vue'

const route = useRoute()

onMounted(() => {
  useDark()
})
</script>

<template>
  <Teleport to="body">
    <Toaster />
  </Teleport>
  <component :is="route.meta.layout || BlankLayout" />
</template>
