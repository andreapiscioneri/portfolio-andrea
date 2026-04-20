<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const open = ref(false)
const root = ref<HTMLElement | null>(null)

const flagMap: Record<string, string> = {
  it: 'it',
  en: 'gb',
  es: 'es',
  de: 'de',
}

interface Locale { code: string; name: string }
const typedLocales = computed(() => locales.value as Locale[])
const current = computed(() => typedLocales.value.find((l) => l.code === locale.value))

const flagUrl = (code: string) =>
  `/flags/${flagMap[code] ?? code}.svg`

const onClickOutside = (e: MouseEvent) => {
  if (!root.value?.contains(e.target as Node)) open.value = false
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
  <div ref="root" class="relative">
    <button
      type="button"
      class="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-xs uppercase tracking-[0.16em] transition-colors hover:bg-ink hover:text-paper dark:border-white/15 dark:hover:bg-paper dark:hover:text-ink"
      :aria-expanded="open"
      data-cursor="link"
      @click="open = !open"
    >
      <img
        v-if="current"
        :src="flagUrl(current.code)"
        :alt="current.name"
        width="24"
        height="18"
        class="rounded-[2px] object-cover"
        loading="eager"
      />
      <span>{{ current?.code.toUpperCase() }}</span>
      <span aria-hidden="true" class="text-[0.6rem] opacity-60">▾</span>
    </button>

    <Transition name="ls">
      <ul
        v-if="open"
        class="absolute right-0 top-full z-50 mt-2 min-w-[176px] overflow-hidden rounded-2xl border border-black/10 bg-paper p-1 text-sm shadow-2xl dark:border-white/15 dark:bg-ink-900"
        role="listbox"
      >
        <li v-for="l in typedLocales" :key="l.code" role="option" :aria-selected="l.code === locale">
          <NuxtLink
            :to="switchLocalePath(l.code) || '/'"
            class="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            :class="l.code === locale ? 'font-medium' : 'text-ink-600 dark:text-white/70'"
            @click="open = false"
          >
            <img
              :src="flagUrl(l.code)"
              :alt="l.name"
              width="20"
              height="15"
              class="rounded-[2px] object-cover shrink-0"
              loading="lazy"
            />
            <span class="flex-1">{{ l.name }}</span>
            <span
              class="text-[10px] tracking-[0.1em]"
              :class="l.code === locale ? 'text-ink dark:text-paper' : 'text-ink-400 dark:text-white/40'"
            >
              {{ l.code.toUpperCase() }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.ls-enter-active,
.ls-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.ls-enter-from,
.ls-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
