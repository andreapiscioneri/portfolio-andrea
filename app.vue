<script setup lang="ts">
import { computed } from 'vue'
import { useHead, useRoute } from '#imports'

const route = useRoute()
const { locale } = useI18n()
const i18nHead = useLocaleHead()
const site = useRuntimeConfig().public.siteUrl as string
const siteUrl = computed(() => String(site).replace(/\/$/, ''))

const ogLocaleMap: Record<string, string> = {
  it: 'it_IT',
  en: 'en_US',
  fr: 'fr_FR',
  de: 'de_DE',
  es: 'es_ES',
}
const ogLocaleAlternateMap: Record<string, string[]> = {
  it: ['en_US', 'fr_FR', 'de_DE', 'es_ES'],
  en: ['it_IT', 'fr_FR', 'de_DE', 'es_ES'],
  fr: ['it_IT', 'en_US', 'de_DE', 'es_ES'],
  de: ['it_IT', 'en_US', 'fr_FR', 'es_ES'],
  es: ['it_IT', 'en_US', 'fr_FR', 'de_DE'],
}

useSeoMeta({
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  ogType: 'website',
  ogSiteName: 'Andrea Piscioneri — Portfolio',
  ogLocale: computed(() => ogLocaleMap[locale.value] ?? 'it_IT'),
  ogLocaleAlternate: computed(() => ogLocaleAlternateMap[locale.value] ?? ['en_US', 'es_ES', 'de_DE']),
  ogImage: computed(() => `${siteUrl.value}/profilo.PNG`),
  twitterCard: 'summary_large_image',
  twitterSite: '@andreapiscioneri',
  twitterCreator: '@andreapiscioneri',
  twitterImage: computed(() => `${siteUrl.value}/profilo.PNG`),
  author: 'Andrea Piscioneri',
  referrer: 'strict-origin-when-cross-origin',
})

const themeColor = '#0a0a0a'

useHead(() => {
  const localeHtmlAttrs = i18nHead.value.htmlAttrs ?? {}
  const i18nLinks = i18nHead.value.link ?? []
  const canonical = i18nLinks.find(l => l.rel === 'canonical')
  const canonicalHref = canonical?.href?.replace(/\/$/, '')

  return {
    htmlAttrs: {
      ...localeHtmlAttrs,
      lang: locale.value,
    },
    meta: [
      ...(i18nHead.value.meta ?? []),
      { name: 'theme-color', content: themeColor, key: 'theme-color' },
    ],
    link: [
      ...i18nLinks,
      { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'LLMs.txt' },
      { rel: 'alternate', type: 'text/plain', href: '/llms-full.txt', title: 'LLMs Full Context' },
    ],
    script: canonicalHref
      ? [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': `${siteUrl.value}/#website`,
              name: 'Andrea Piscioneri — Portfolio',
              description: 'Portfolio di Andrea Piscioneri — UX/UI Designer, Web Developer e Graphic Designer con base in Lombardia, Italia. Progetti di design digitale, brand identity, sviluppo web e fotografia.',
              url: canonicalHref,
              inLanguage: locale.value,
              author: { '@id': `${siteUrl.value}/#person` },
              publisher: { '@id': `${siteUrl.value}/#person` },
              potentialAction: [
                {
                  '@type': 'SearchAction',
                  target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl.value}/work?q={search_term_string}` },
                  'query-input': 'required name=search_term_string',
                },
                {
                  '@type': 'ContactAction',
                  target: `${siteUrl.value}/contact`,
                  name: 'Contatta Andrea Piscioneri',
                },
              ],
            }),
          },
        ]
      : [],
  }
})
</script>

<template>
  <div class="app-shell">
    <AppLoader />
    <AppCursor />
    <SmoothScroll />
    <NuxtLayout>
      <NuxtPage :key="route.fullPath" />
    </NuxtLayout>
  </div>
</template>

<style>
.app-shell {
  min-height: 100vh;
  position: relative;
  isolation: isolate;
}
</style>
