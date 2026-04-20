<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const open = ref(false)
const root = ref<HTMLElement | null>(null)

const current = computed(() => (locales.value as { code: string; name: string }[]).find((l) => l.code === locale.value))

const onClickOutside = (e: MouseEvent) => {
  if (!root.value) return
  if (!root.value.contains(e.target as Node)) open.value = false
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})
onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>

<template>
  <div ref="root" class="relative">
    <button
      type="button"
      class="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-xs uppercase tracking-[0.16em] transition-colors hover:bg-ink hover:text-paper dark:border-white/15 dark:hover:bg-paper dark:hover:text-ink"
      :aria-expanded="open"
      data-cursor="link"
      @click="open = !open"
    >
      <span>{{ current?.code.toUpperCase() }}</span>
      <span aria-hidden="true" class="text-[0.6rem]">▾</span>
    </button>

    <Transition name="ls">
      <ul
        v-if="open"
        class="absolute right-0 top-full z-50 mt-2 min-w-[140px] overflow-hidden rounded-2xl border border-black/10 bg-paper p-1 text-sm shadow-2xl dark:border-white/15 dark:bg-ink-900"
      >
        <li v-for="l in (locales as { code: string; name: string }[])" :key="l.code">
          <NuxtLink
            :to="switchLocalePath(l.code) || '/'"
            class="flex items-center justify-between rounded-xl px-4 py-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            :class="l.code === locale ? 'text-accent' : ''"
            @click="open = false"
          >
            <span>{{ l.name }}</span>
            <span class="text-xs text-ink-500 dark:text-white/50">{{ l.code.toUpperCase() }}</span>
          </NuxtLink>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.ls-enter-active,
.ls-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.ls-enter-from,
.ls-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
