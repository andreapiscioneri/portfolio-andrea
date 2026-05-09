export default defineNuxtPlugin(() => {
  document.documentElement.classList.add('dark')
  document.documentElement.classList.remove('light')
})
