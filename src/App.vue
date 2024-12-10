<script setup lang="ts">
import { useRoute } from 'vue-router'
import BlankLayout from '~/components/layouts/BlankLayout.vue'

const route = useRoute()
</script>

<template>
  <component :is="route.meta.layout || BlankLayout">
    <RouterView />
  </component>
</template>
