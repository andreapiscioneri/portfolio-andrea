<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import Lenis from '@studio-freight/lenis'

let lenis: Lenis | null = null
let raf = 0

onMounted(() => {
  if (!process.client) return

  // Respect reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
    smoothWheel: true,
  })

  const loop = (time: number) => {
    lenis?.raf(time)
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)

  // Expose on window for other components (e.g. GSAP ScrollTrigger)
  ;(window as unknown as { __lenis?: Lenis }).__lenis = lenis
})

onBeforeUnmount(() => {
  if (!process.client) return
  cancelAnimationFrame(raf)
  lenis?.destroy()
  lenis = null
})
</script>

<template>
  <span aria-hidden="true" />
</template>
