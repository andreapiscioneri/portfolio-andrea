export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hooks.hook('page:finish', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  })
})
