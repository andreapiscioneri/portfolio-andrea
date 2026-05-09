<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const dot = ref<HTMLElement | null>(null)
const ring = ref<HTMLElement | null>(null)
const active = ref(false)
const enabled = ref(true)

let raf = 0
let mouseX = 0
let mouseY = 0
let ringX = 0
let ringY = 0

const lerp = (a: number, b: number, n: number) => a + (b - a) * n

const loop = () => {
  ringX = lerp(ringX, mouseX, 0.12)
  ringY = lerp(ringY, mouseY, 0.12)

  if (dot.value) {
    dot.value.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
  }
  if (ring.value) {
    ring.value.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
  }

  raf = requestAnimationFrame(loop)
}

const onMove = (e: MouseEvent) => {
  mouseX = e.clientX
  mouseY = e.clientY
}

const onOver = (e: MouseEvent) => {
  const target = e.target as HTMLElement | null
  if (target?.closest?.('[data-cursor]')) {
    active.value = true
  }
}
const onOut = () => {
  active.value = false
}

onMounted(() => {
  if (!process.client) return
  const mq = window.matchMedia('(pointer: fine)')
  enabled.value = mq.matches
  if (!enabled.value) {
    document.documentElement.classList.remove('cursor-custom')
    return
  }
  document.documentElement.classList.add('cursor-custom')
  window.addEventListener('mousemove', onMove, { passive: true })
  document.addEventListener('mouseover', onOver)
  document.addEventListener('mouseout', onOut)
  raf = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('mousemove', onMove)
  document.removeEventListener('mouseover', onOver)
  document.removeEventListener('mouseout', onOut)
})
</script>

<template>
  <template v-if="enabled">
    <!-- Dot -->
    <div
      ref="dot"
      class="pointer-events-none fixed left-0 top-0 z-[501] will-change-transform"
      aria-hidden="true"
    >
      <div
        class="rounded-full bg-accent transition-transform duration-150"
        :class="active ? 'h-2 w-2 scale-150' : 'h-2 w-2'"
      />
    </div>

    <!-- Ring -->
    <div
      ref="ring"
      class="pointer-events-none fixed left-0 top-0 z-[500] will-change-transform"
      aria-hidden="true"
    >
      <div
        class="rounded-full border border-accent/60 transition-[width,height] duration-300 ease-out"
        :class="active ? 'h-10 w-10' : 'h-7 w-7'"
      />
    </div>
  </template>
</template>
