<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-4">
    <div class="flex gap-4 [&_img]:size-24">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" alt="Vite logo">
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" alt="Vue logo">
      </a>
    </div>
    <h1 class="text-3xl font-bold">
      <!-- The icon is used to test unplugin-vue-components -->
      <!-- The cn method is used to test unplugin-auto-import -->
      <SquareCheckIcon class="inline-block -translate-y-1" :class="cn('text-red-500', 'text-green-500')" /> Hello Vite and Vue!
    </h1>
  </div>
</template>
