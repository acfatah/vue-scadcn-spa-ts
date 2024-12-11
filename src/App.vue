<script setup lang="ts">
import { useDark } from '~/components/composables/use-dark'
import DefaultLayout from '~/components/layouts/DefaultLayout.vue'

const route = useRoute()

onMounted(() => {
  useDark()
})
</script>

<template>
  <Teleport to="body">
    <Toaster />
  </Teleport>
  <component :is="route.meta.layout || DefaultLayout" />
</template>
