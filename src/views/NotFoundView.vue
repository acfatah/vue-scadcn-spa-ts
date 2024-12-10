<template>
  <main class="flex h-screen flex-col items-center justify-center">
    <div class="flex flex-col items-center">
      <div class="flex items-center">
        <span class="text-4xl font-bold">404</span>
        <div class="mx-4 h-8 w-px bg-gray-300" />
        <p class="font-light">
          The requested page could not be found.
        </p>
      </div>
      <RouterLink to="/" class="ml-auto">
        <Button variant="link" class="pr-0" to="/">
          Go Home
        </Button>
      </RouterLink>
    </div>
  </main>
</template>
