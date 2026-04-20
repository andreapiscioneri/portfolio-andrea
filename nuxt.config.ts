// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,

  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/seo',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'it' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      title: 'Andrea Piscioneri — UX/UI Designer & Developer',
      meta: [
        { name: 'theme-color', content: '#0a0a0a' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Andrea Piscioneri' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
        },
      ],
    },
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'ap-color-mode',
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'it',
    lazy: false,
    restructureDir: false,
    langDir: 'locales',
    bundle: {
      optimizeTranslationDirective: false,
    },
    locales: [
      { code: 'it', iso: 'it-IT', name: 'Italiano', file: 'it.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch', file: 'de.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
    },
  },

  image: {
    format: ['webp', 'avif'],
    quality: 85,
    domains: ['images.unsplash.com', 'images.pexels.com'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://andreapiscioneri.com',
    name: 'Andrea Piscioneri — Portfolio',
    description:
      'Portfolio di Andrea Piscioneri — UX/UI Designer, Web Designer & Developer, Graphic Designer. Progetti di design digitale, brand identity e sviluppo web.',
    defaultLocale: 'it',
  },

  robots: {
    // Allow all crawlers including AI / GEO bots
    disallow: [],
    groups: [
      { userAgent: ['*'], allow: ['/'] },
      { userAgent: ['GPTBot'], allow: ['/'] },
      { userAgent: ['ClaudeBot'], allow: ['/'] },
      { userAgent: ['PerplexityBot'], allow: ['/'] },
      { userAgent: ['Google-Extended'], allow: ['/'] },
      { userAgent: ['anthropic-ai'], allow: ['/'] },
    ],
  },

  sitemap: {
    // @nuxtjs/seo enables sitemap by default; configure sources
    autoLastmod: true,
  },

  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'Andrea Piscioneri',
      url: 'https://andreapiscioneri.com',
      email: 'mailto:andrypiscioneri@gmail.com',
      jobTitle: 'UX/UI Designer & Web Developer',
      sameAs: [
        'https://www.behance.net/andreapiscioneri',
        'https://www.instagram.com/andrea.piscioneri_design/',
        'https://www.instagram.com/andreapiscioneri/',
        'https://it-it.facebook.com/andreapiscioneri',
        'https://apdesign.altervista.org/',
      ],
    },
  },

  ogImage: {
    // Disable runtime OG image generation (requires satori). We rely on static
    // og:image meta tags set per-page via useSeoMeta where appropriate.
    enabled: false,
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://andreapiscioneri.com',
      siteName: 'Andrea Piscioneri',
    },
  },

  typescript: {
    strict: true,
    shim: false,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },

  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  },

  experimental: {
    payloadExtraction: true,
    viewTransition: true,
  },
})
