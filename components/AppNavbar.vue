<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const { t, locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const isOpen = ref(false)
const scrolled = ref(false)

const navLinks = computed(() => [
  { to: localePath('/work'), label: t('nav.work') },
  { to: localePath('/about'), label: t('nav.about') },
  { to: localePath('/contact'), label: t('nav.contact') },
])

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)

const availableLocales = computed(() =>
  (locales.value as { code: string; name: string }[]).filter((l) => l.code !== locale.value),
)
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth"
    :class="[
      scrolled || isOpen
        ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/10'
        : 'bg-transparent border-b border-transparent text-paper',
    ]"
  >
    <nav class="container-x flex h-16 items-center justify-between md:h-20">
      <NuxtLink :to="localePath('/')" class="group relative flex items-center gap-3" data-cursor="link">
        <span
          class="flex h-9 w-9 items-center justify-center rounded-full border bg-paper overflow-hidden"
          :class="scrolled || isOpen ? 'border-white/10' : 'border-white/20'"
          aria-hidden="true"
        >
          <img src="/logo.png" alt="AP" class="h-5 w-5 object-contain invert" />
        </span>
        <span class="hidden text-sm font-medium sm:inline">Andrea Piscioneri</span>
      </NuxtLink>

      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="link-hover text-sm"
            active-class="text-accent"
            exact-active-class="text-accent"
            data-cursor="link"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <LocaleSwitcher class="hidden md:flex" :ghost="!scrolled && !isOpen" />
        <NuxtLink
          :to="localePath('/contact')"
          class="btn hidden text-xs md:inline-flex transition-colors duration-500"
          :class="scrolled || isOpen
            ? 'btn-primary'
            : 'border-white/30 bg-white/10 text-paper hover:bg-paper hover:text-ink'"
          data-cursor="link"
        >
          {{ t('common.getInTouch') }}
        </NuxtLink>
        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border md:hidden touch-manipulation transition-colors duration-500"
          :class="scrolled || isOpen ? 'border-white/15' : 'border-white/25'"
          :aria-label="isOpen ? t('nav.close') : t('nav.menu')"
          @click="isOpen = !isOpen"
          data-cursor="link"
        >
          <span class="sr-only">{{ isOpen ? t('nav.close') : t('nav.menu') }}</span>
          <span class="relative block h-3 w-5">
            <span
              class="absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300"
              :class="isOpen ? 'translate-y-1.5 rotate-45' : ''"
            />
            <span
              class="absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300"
              :class="isOpen ? '-translate-y-1 -rotate-45' : ''"
            />
          </span>
        </button>
      </div>
    </nav>

    <Transition name="mobile-menu">
      <div
        v-if="isOpen"
        class="md:hidden origin-top overflow-hidden border-t border-white/10 bg-ink-950"
      >
        <ul class="container-x flex flex-col gap-2 py-6">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="block rounded-2xl px-4 py-4 text-xl font-display transition-colors hover:bg-white/5"
              exact-active-class="text-accent"
              active-class="text-accent"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
          <li class="flex items-center justify-between px-4 pt-6">
            <LocaleSwitcher />
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  max-height: 80vh;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
