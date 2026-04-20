<script setup lang="ts">
import { computed } from 'vue'

const colorMode = useColorMode()
const { t } = useI18n()

const modes = [
  { value: 'light', icon: '☀︎' },
  { value: 'dark', icon: '☾' },
  { value: 'system', icon: '◑' },
] as const

const activeIdx = computed(() => modes.findIndex((m) => m.value === colorMode.preference))

const setMode = (value: (typeof modes)[number]['value']) => {
  colorMode.preference = value
}
</script>

<template>
  <div
    class="relative inline-flex items-center rounded-full border border-black/10 bg-paper/50 p-1 text-xs dark:border-white/15 dark:bg-ink-900/60"
    role="group"
    :aria-label="t('theme.toggle')"
  >
    <span
      class="absolute inset-y-1 w-8 rounded-full bg-ink transition-all duration-500 ease-smooth dark:bg-paper"
      aria-hidden="true"
      :style="{ transform: `translateX(${activeIdx * 100}%)`, left: '0.25rem' }"
    />
    <button
      v-for="m in modes"
      :key="m.value"
      type="button"
      class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300"
      :class="colorMode.preference === m.value ? 'text-paper dark:text-ink' : 'text-ink-500 dark:text-white/60'"
      :aria-label="t(`theme.${m.value}`)"
      :aria-pressed="colorMode.preference === m.value"
      data-cursor="link"
      @click="setMode(m.value)"
    >
      <span>{{ m.icon }}</span>
    </button>
  </div>
</template>
