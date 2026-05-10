export default defineNuxtPlugin(() => {
  const html = document.documentElement

  console.log('[dark-mode] plugin running')
  console.log('[dark-mode] classes BEFORE:', html.className)
  console.log('[dark-mode] classList has dark:', html.classList.contains('dark'))
  console.log('[dark-mode] classList has light:', html.classList.contains('light'))

  html.classList.add('dark')
  html.classList.remove('light')

  console.log('[dark-mode] classes AFTER:', html.className)

  // Osserva eventuali rimozioni successive della classe dark
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.attributeName === 'class') {
        console.warn('[dark-mode] class attribute changed:', html.className)
        if (!html.classList.contains('dark')) {
          console.error('[dark-mode] DARK CLASS WAS REMOVED — re-adding')
          html.classList.add('dark')
        }
      }
    }
  })

  observer.observe(html, { attributes: true, attributeFilter: ['class'] })
})
