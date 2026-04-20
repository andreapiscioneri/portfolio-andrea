<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{ y?: number; delay?: number; once?: boolean; duration?: number }>(),
  { y: 36, delay: 0, once: true, duration: 1.1 },
)

const el = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(async () => {
  if (!process.client || !el.value) return
  const { gsap } = await import('gsap')

  gsap.set(el.value, { y: props.y, opacity: 0 })

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && el.value) {
          gsap.to(el.value, {
            y: 0,
            opacity: 1,
            duration: props.duration,
            delay: props.delay,
            ease: 'power3.out',
          })
          if (props.once) observer?.disconnect()
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
  )
  observer.observe(el.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div ref="el"><slot /></div>
</template>
