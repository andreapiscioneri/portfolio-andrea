export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()

  // Sincronizza il localStorage con la classe HTML al mount
  watch(
    () => colorMode.preference,
    (newValue) => {
      if (newValue === 'dark') {
        document.documentElement.classList.add('dark')
      } else if (newValue === 'light') {
        document.documentElement.classList.remove('dark')
      }
    },
    { immediate: true },
  )
})
