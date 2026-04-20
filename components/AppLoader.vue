<script setup lang="ts">
import { onMounted, ref } from 'vue'

const { t } = useI18n()
const visible = ref(true)
const progress = ref(0)

onMounted(() => {
  if (!process.client) return
  const start = performance.now()
  const duration = 1600
  const step = (now: number) => {
    const t = Math.min((now - start) / duration, 1)
    progress.value = Math.round(t * 100)
    if (t < 1) requestAnimationFrame(step)
    else {
      setTimeout(() => {
        visible.value = false
        document.documentElement.classList.remove('is-loading')
      }, 220)
    }
  }
  document.documentElement.classList.add('is-loading')
  requestAnimationFrame(step)
})
</script>

<template>
  <Transition name="loader">
    <div
      v-if="visible"
      class="fixed inset-0 z-[999] flex items-center justify-center bg-ink text-paper overflow-hidden"
      aria-hidden="true"
    >
      <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,74,28,0.14),transparent_65%)]" />

      <div class="relative w-full max-w-4xl px-8">
        <div class="flex items-end justify-between text-xs uppercase tracking-[0.3em] text-paper/60">
          <span>{{ t('loader.hello') }}</span>
          <span class="tabular-nums">{{ progress.toString().padStart(3, '0') }}</span>
        </div>

        <div class="my-6 h-[1px] w-full bg-paper/15">
          <div class="h-[1px] bg-accent transition-[width] duration-75 ease-linear" :style="{ width: `${progress}%` }" />
        </div>

        <div class="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.4em] text-paper/50">
          <span>Andrea · Piscioneri</span>
          <span>{{ t('loader.loading') }}</span>
        </div>

        <div class="mt-16 flex items-center justify-center text-center">
          <h1 class="font-display text-display-lg text-paper tracking-[-0.03em] leading-[0.95]">
            <span class="block overflow-hidden"><span class="block translate-y-0">AP</span></span>
          </h1>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.loader-enter-active,
.loader-leave-active {
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1),
    clip-path 1s cubic-bezier(0.76, 0, 0.24, 1);
}
.loader-leave-to {
  opacity: 0;
  clip-path: inset(0 0 100% 0);
}
</style>
