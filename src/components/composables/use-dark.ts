import { useColorMode, usePreferredDark, useStorage } from '@vueuse/core'
import { watchEffect } from 'vue'

export function useDark() {
  const theme = useStorage('theme', 'light') as Ref<'light' | 'dark' | 'auto'>
  const colorMode = useColorMode()
  const preferredDark = usePreferredDark()

  // Initialize the color mode based on user preference
  watchEffect(() => {
    if (theme.value)
      colorMode.value = theme.value
    else
      colorMode.value = preferredDark.value ? 'dark' : 'light'
  })

  watchEffect(() => {
    if (colorMode.value === 'dark')
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
  })

  function toggleDark() {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
    theme.value = colorMode.value
  }

  return {
    colorMode,
    toggleDark,
  }
}
