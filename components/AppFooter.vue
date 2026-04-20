<script setup lang="ts">
import { computed } from 'vue'
import { personal, links } from '~/content/about'

const { t } = useI18n()
const localePath = useLocalePath()
const year = new Date().getFullYear()

const socials = [
  { label: 'Behance', href: links.behance },
  { label: 'Instagram', href: links.instagramDesign },
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'Facebook', href: links.facebook },
]

const scrollTop = () => {
  if (process.client) window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="relative border-t border-black/5 bg-paper pt-24 dark:border-white/10 dark:bg-ink-950">
    <div class="container-x">
      <div class="grid gap-16 pb-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div class="eyebrow mb-4"><span>Portfolio · 2026</span></div>
          <p class="font-display text-display-sm leading-[1.05] text-balance">
            {{ t('footer.tagline') }}
          </p>
          <a
            :href="`mailto:${personal.email}`"
            class="mt-6 inline-block link-hover text-base"
            data-cursor="link"
          >
            {{ personal.email }}
          </a>
        </div>

        <div>
          <h3 class="eyebrow mb-4">{{ t('nav.menu') }}</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink :to="localePath('/')" class="link-hover">{{ t('nav.home') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/work')" class="link-hover">{{ t('nav.work') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/about')" class="link-hover">{{ t('nav.about') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/contact')" class="link-hover">{{ t('nav.contact') }}</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="eyebrow mb-4">Social</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="s in socials" :key="s.label">
              <a :href="s.href" target="_blank" rel="noopener" class="link-hover">{{ s.label }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="eyebrow mb-4">{{ t('about.current') }}</h3>
          <p class="text-sm text-ink-500 dark:text-white/70">
            {{ personal.city }}<br>{{ personal.region }}, {{ personal.country }}
          </p>
          <p class="mt-3 text-sm text-ink-500 dark:text-white/70">
            {{ personal.phone }}
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-4 border-t border-black/5 py-8 text-xs text-ink-500 md:flex-row md:items-center md:justify-between dark:border-white/10 dark:text-white/60">
        <p>{{ t('footer.copyright', { year }) }}</p>
        <div class="flex flex-wrap items-center gap-4">
          <NuxtLink :to="localePath('/trattamento-dati')" class="link-hover" data-cursor="link">{{ t('footer.dataProcessing') }}</NuxtLink>
          <span aria-hidden="true">·</span>
          <NuxtLink :to="localePath('/cookie')" class="link-hover" data-cursor="link">{{ t('footer.cookie') }}</NuxtLink>
        </div>
        <button type="button" @click="scrollTop" class="link-hover self-start md:self-auto" data-cursor="link">
          {{ t('footer.backToTop') }} ↑
        </button>
      </div>

      <!-- Giant wordmark -->
      <div aria-hidden="true" class="pointer-events-none pb-4 -mb-6 overflow-hidden">
        <span
          class="block whitespace-nowrap text-center font-display text-[clamp(4rem,22vw,18rem)] leading-[0.9] tracking-[-0.04em] text-ink/5 dark:text-white/5 select-none"
        >
          Andrea Piscioneri
        </span>
      </div>
    </div>
  </footer>
</template>
