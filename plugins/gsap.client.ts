/**
 * GSAP client plugin — registers ScrollTrigger and connects it to Lenis
 * so scroll-driven animations stay in sync with the smooth scroll engine.
 */
import { defineNuxtPlugin } from '#app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (!process.client) return

  gsap.registerPlugin(ScrollTrigger)

  // Soft default easing
  gsap.defaults({ ease: 'power3.out', duration: 0.9 })

  // When Lenis is available, route its scroll event into ScrollTrigger
  const connectLenis = () => {
    const lenis = (window as unknown as { __lenis?: { on?: (event: string, cb: () => void) => void } }).__lenis
    if (!lenis || typeof lenis.on !== 'function') {
      setTimeout(connectLenis, 250)
      return
    }
    lenis.on('scroll', ScrollTrigger.update)
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && typeof value === 'number') {
          window.scrollTo({ top: value, behavior: 'auto' })
        }
        return window.scrollY
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      },
    })
    ScrollTrigger.refresh()
  }

  window.addEventListener('load', connectLenis)

  return {
    provide: { gsap, ScrollTrigger },
  }
})
