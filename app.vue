<script setup lang="ts">
import { computed } from 'vue'
import { useHead, useRoute } from '#imports'

const colorMode = useColorMode()
const route = useRoute()
const { locale } = useI18n()
const i18nHead = useLocaleHead({ addSeoAttributes: true })
const site = useRuntimeConfig().public.siteUrl as string
const siteUrl = computed(() => String(site).replace(/\/$/, ''))

const htmlClass = computed(() =>
  [colorMode.value === 'dark' ? 'dark' : '', 'cursor-custom'].filter(Boolean).join(' '),
)

const ogLocaleMap: Record<string, string> = {
  it: 'it_IT',
  en: 'en_US',
  es: 'es_ES',
  de: 'de_DE',
}
const ogLocaleAlternateMap: Record<string, string[]> = {
  it: ['en_US', 'es_ES', 'de_DE'],
  en: ['it_IT', 'es_ES', 'de_DE'],
  es: ['it_IT', 'en_US', 'de_DE'],
  de: ['it_IT', 'en_US', 'es_ES'],
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

useHead(() => {
  const localeHtmlAttrs = i18nHead.value.htmlAttrs ?? {}
  const localeClass = String(localeHtmlAttrs.class ?? '')
  const i18nLinks = i18nHead.value.link ?? []
  const canonical = i18nLinks.find(l => l.rel === 'canonical')
  const canonicalHref = canonical?.href?.replace(/\/$/, '')

  return {
    htmlAttrs: {
      ...localeHtmlAttrs,
      lang: locale.value,
      class: [localeClass, htmlClass.value].filter(Boolean).join(' ').trim(),
    },
    link: [
      ...i18nLinks,
      { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'LLMs.txt' },
      { rel: 'alternate', type: 'text/plain', href: '/llms-full.txt', title: 'LLMs Full Context' },
    ],
    meta: i18nHead.value.meta,
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
