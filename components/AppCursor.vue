<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const cursor = ref<HTMLElement | null>(null)
const label = ref<string>('')
const active = ref(false)
const enabled = ref(true)

let raf = 0
let mouseX = 0
let mouseY = 0
let currentX = 0
let currentY = 0

const lerp = (a: number, b: number, n: number) => a + (b - a) * n

const loop = () => {
  currentX = lerp(currentX, mouseX, 0.18)
  currentY = lerp(currentY, mouseY, 0.18)
  if (cursor.value) {
    cursor.value.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
  }
  raf = requestAnimationFrame(loop)
}

const onMove = (e: MouseEvent) => {
  mouseX = e.clientX
  mouseY = e.clientY
}

const onOver = (e: MouseEvent) => {
  const target = e.target as HTMLElement | null
  const el = target?.closest?.('[data-cursor]') as HTMLElement | null
  if (el) {
    label.value = el.getAttribute('data-cursor-label') || el.getAttribute('data-cursor') || ''
    active.value = true
  }
}
const onOut = () => {
  active.value = false
  label.value = ''
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
  <div
    v-if="enabled"
    ref="cursor"
    class="pointer-events-none fixed left-0 top-0 z-[500] -translate-x-1/2 -translate-y-1/2 will-change-transform"
    aria-hidden="true"
  >
    <div
      class="relative flex items-center justify-center rounded-full bg-ink text-paper mix-blend-difference transition-[width,height] duration-300 ease-smooth dark:bg-paper dark:text-ink"
      :class="[active ? 'h-20 w-20' : 'h-3 w-3']"
    >
      <span
        v-if="active && label"
        class="absolute inset-0 flex items-center justify-center text-[0.6rem] uppercase tracking-[0.2em]"
      >
        {{ label === 'true' || label === 'link' ? '↗' : label }}
      </span>
    </div>
  </div>
</template>
