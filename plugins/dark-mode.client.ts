export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()
  colorMode.preference = 'dark'

  // clear any stale stored preference
  try {
    localStorage.removeItem('ap-color-mode')
    localStorage.removeItem('nuxt-color-mode')
  }
  catch {}
})
