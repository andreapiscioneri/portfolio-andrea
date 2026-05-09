export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()
  colorMode.preference = 'dark'
  colorMode.value = 'dark'
  document.documentElement.classList.add('dark')
  document.documentElement.classList.remove('light')
})
