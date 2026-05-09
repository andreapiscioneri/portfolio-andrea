<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ ghost?: boolean }>()
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
    class="relative inline-flex items-center rounded-full border p-1 text-xs transition-colors duration-500"
    :class="props.ghost
      ? 'border-white/25 bg-white/10'
      : 'border-black/10 bg-paper/50 dark:border-white/15 dark:bg-ink-900/60'"
    role="group"
    :aria-label="t('theme.toggle')"
  >
    <span
      class="absolute inset-y-1 w-9 rounded-full bg-ink transition-all duration-500 ease-smooth dark:bg-paper"
      aria-hidden="true"
      :style="{ transform: `translateX(${activeIdx * 100}%)`, left: '0.25rem' }"
    />
    <button
      v-for="m in modes"
      :key="m.value"
      type="button"
      class="relative z-10 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300"
      :class="colorMode.preference === m.value
        ? 'text-paper dark:text-ink'
        : props.ghost ? 'text-white/70' : 'text-ink-500 dark:text-white/60'"
      :aria-label="t(`theme.${m.value}`)"
      :aria-pressed="colorMode.preference === m.value"
      data-cursor="link"
      @click="setMode(m.value)"
    >
      <span>{{ m.icon }}</span>
    </button>
  </div>
</template>
