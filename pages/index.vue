<script setup lang="ts">
import { computed } from 'vue'

const { t, tm, rt, locale } = useI18n()
const { featured } = useProjects()
const localePath = useLocalePath()
const site = useRuntimeConfig().public.siteUrl as string
const homeUrl = computed(() => `${site}${localePath('/')}`)
const workUrl = computed(() => `${site}${localePath('/work')}`)

useSeoPerson()

useSeoMeta({
  title: () => t('site.title'),
  description: () => t('site.description'),
  keywords: () => `UX/UI Designer, Web Developer, Graphic Designer, Nuxt, Vue.js, Brand Identity, Portfolio, Andrea Piscioneri, Lombardia, Italia, Figma, React, Next.js, TypeScript, ${t('site.tagline')}`,
  ogType: 'website',
  ogUrl: homeUrl,
  ogTitle: () => t('site.title'),
  ogDescription: () => t('site.description'),
  ogImage: `${site}/profilo.PNG`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterTitle: () => t('site.title'),
  twitterDescription: () => t('site.description'),
  twitterImage: `${site}/profilo.PNG`,
  twitterCard: 'summary_large_image',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${homeUrl.value.replace(/\/$/, '')}/#homepage`,
        name: t('site.title'),
        url: homeUrl.value,
        description: t('site.description'),
        inLanguage: locale.value,
        isPartOf: { '@id': `${site}/#website` },
        about: { '@id': `${site}/#person` },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.hero-description', '.about-section-body'],
        },
        dateModified: '2026-05-09',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t('nav.home'), item: homeUrl.value },
          ],
        },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `${t('home.servicesTitle')} — Andrea Piscioneri`,
        description: t('site.description'),
        inLanguage: locale.value,
        url: workUrl.value,
        itemListElement: (tm('home.services') as { title: string; body: string }[]).map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: { '@type': 'Service', name: rt(s.title), description: rt(s.body), provider: { '@id': `${site}/#person` } },
        })),
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${homeUrl.value.replace(/\/$/, '')}/#faq`,
        inLanguage: locale.value,
        mainEntity: Array.from({ length: 6 }, (_, i) => ({
          '@type': 'Question',
          name: t(`faq.items[${i}].q`),
          acceptedAnswer: { '@type': 'Answer', text: t(`faq.items[${i}].a`) },
        })),
      }),
    },
  ],
})

const services = computed(() =>
  (tm('home.services') as { title: string; body: string }[]).map(s => ({
    title: rt(s.title),
    body: rt(s.body),
  }))
)
const stats = computed(() =>
  (tm('home.stats') as { value: string; label: string; suffix: string }[]).map(s => ({
    value: rt(s.value),
    label: rt(s.label),
    suffix: rt(s.suffix),
  }))
)

const FAQ_COUNT = 6
const faqItems = computed(() =>
  Array.from({ length: FAQ_COUNT }, (_, i) => ({
    q: t(`faq.items[${i}].q`),
    a: t(`faq.items[${i}].a`),
  }))
)

const marqueeItems = [
  { name: 'Figma',              logo: 'https://cdn.simpleicons.org/figma/ffffff' },
  { name: 'Vue.js',             logo: 'https://cdn.simpleicons.org/vuedotjs/ffffff' },
  { name: 'Nuxt',               logo: 'https://cdn.simpleicons.org/nuxt/ffffff' },
  { name: 'React',              logo: 'https://cdn.simpleicons.org/react/ffffff' },
  { name: 'Next.js',            logo: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
  { name: 'TypeScript',         logo: 'https://cdn.simpleicons.org/typescript/ffffff' },
  { name: 'Odoo',               logo: 'https://cdn.simpleicons.org/odoo/ffffff' },
  { name: 'Adobe Photoshop',    logo: '/Adobe_Photoshop_CC_icon.svg.png' },
  { name: 'Adobe Illustrator',  logo: '/Adobe_Illustrator_CC_icon.svg.png' },
  { name: 'Adobe After Effects',logo: '/Adobe_After_Effects_CC_icon.svg.png' },
  { name: 'Blender',            logo: 'https://cdn.simpleicons.org/blender/ffffff' },
  { name: 'Tailwind CSS',       logo: 'https://cdn.simpleicons.org/tailwindcss/ffffff' },
]
</script>

<template>
  <div>
    <HeroSection />

    <!-- Marquee -->
    <section class="relative py-8 bg-ink-900 text-paper">
      <Marquee :items="marqueeItems" />
    </section>

    <!-- Featured projects -->
    <section class="container-x py-16 md:py-24 lg:py-32">
      <div class="mb-10 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
        <div class="max-w-2xl">
          <div class="eyebrow mb-4"><span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" /><span>{{ t('common.selectedWorks') }}</span></div>
          <AnimatedText as="h2" split="lines" class="font-display text-display-md leading-[0.95] tracking-[-0.03em] text-balance">
            {{ t('home.featuredTitle') }}
          </AnimatedText>
          <Reveal :delay="0.2" class="mt-5 max-w-xl text-base text-white/70">
            {{ t('home.featuredSubtitle') }}
          </Reveal>
        </div>
        <Reveal :delay="0.3">
          <NuxtLink :to="localePath('/work')" class="btn btn-ghost" data-cursor="link">
            {{ t('home.allWork') }} <span aria-hidden="true">→</span>
          </NuxtLink>
        </Reveal>
      </div>

      <div class="grid gap-6 md:grid-cols-2 md:gap-8">
        <Reveal v-for="(p, i) in featured" :key="p.slug" :delay="i * 0.08" class="h-full">
          <ProjectCard :project="p" :index="i" />
        </Reveal>
      </div>
    </section>

    <!-- About inline -->
    <section class="relative overflow-hidden border-y border-white/10 bg-ink-900 py-16 md:py-24 lg:py-32">
      <div class="container-x grid gap-12 md:grid-cols-[1fr_1.3fr] md:items-center">
        <Reveal>
          <div class="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-ink-800 to-ink-950 p-8 text-paper md:p-12">
            <img src="/profilo.PNG" alt="Andrea Piscioneri" class="absolute inset-0 h-full w-full object-cover object-top grayscale opacity-40 mix-blend-luminosity" />
            <div class="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,rgba(57,255,20,0.35),transparent_60%)]" />
            <div class="relative flex h-full flex-col justify-between">
              <div class="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
                <span>Andrea</span>
                <span>06.09.2000</span>
              </div>
              <div>
                <p class="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.92] tracking-[-0.03em]">
                  UX/UI<br>Designer<br><span class="italic text-accent">& developer.</span>
                </p>
                <p class="mt-6 text-sm text-white/70 max-w-xs">
                  Da Albino (BG), Lombardia · lavoro in Denani S.R.L.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <div>
          <div class="eyebrow mb-4"><span>{{ t('about.title') }}</span></div>
          <AnimatedText as="h2" split="lines" class="font-display text-display-md leading-[0.95] tracking-[-0.03em] text-balance">
            {{ t('home.aboutSectionTitle') }}
          </AnimatedText>
          <Reveal :delay="0.2">
            <p class="mt-6 text-base text-white/70 text-pretty md:text-lg">
              {{ t('home.aboutSectionBody') }}
            </p>
          </Reveal>
          <Reveal :delay="0.3">
            <div class="mt-8 flex flex-wrap gap-3">
              <NuxtLink :to="localePath('/about')" class="btn btn-primary" data-cursor="link">
                {{ t('about.title') }} <span aria-hidden="true">→</span>
              </NuxtLink>
              <NuxtLink :to="localePath('/contact')" class="btn btn-ghost" data-cursor="link">
                {{ t('common.getInTouch') }}
              </NuxtLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="container-x py-16 md:py-24 lg:py-32">
      <div class="mb-10 md:mb-20">
        <div class="eyebrow mb-4"><span>{{ t('home.servicesTitle') }}</span></div>
        <AnimatedText as="h2" split="lines" class="font-display text-display-md leading-[0.95] tracking-[-0.03em] text-balance">
          Costruisco tutto ciò che serve al tuo prodotto digitale.
        </AnimatedText>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal v-for="(s, i) in services" :key="i" :delay="i * 0.06">
          <article
            class="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-8 transition-colors duration-700 hover:bg-paper hover:text-ink"
            data-cursor="link"
          >
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-white/50 transition-colors duration-500 group-hover:text-ink/70">
                0{{ i + 1 }}
              </span>
              <span class="text-xs transition-transform duration-500 group-hover:translate-x-1">→</span>
            </div>
            <h3 class="mt-6 font-display text-2xl leading-[1.05] tracking-[-0.02em]">
              {{ s.title }}
            </h3>
            <p class="mt-3 text-sm text-white/60 transition-colors duration-500 group-hover:text-ink/70">
              {{ s.body }}
            </p>
          </article>
        </Reveal>
      </div>
    </section>

    <!-- Stats -->
    <section class="container-x pb-16 md:pb-24 lg:pb-32">
      <div class="rounded-3xl border border-white/10 bg-ink-900 text-paper p-6 md:p-10 lg:p-16">
        <div class="eyebrow mb-6 md:mb-8 text-paper/70"><span>{{ t('home.statsTitle') }}</span></div>
        <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Reveal v-for="(s, i) in stats" :key="i" :delay="i * 0.08">
            <div class="flex flex-col">
              <div class="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.9] tracking-[-0.04em]">
                {{ s.value }}<span class="text-accent">{{ s.suffix }}</span>
              </div>
              <div class="mt-3 text-sm uppercase tracking-[0.2em] text-paper/60">
                {{ s.label }}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="container-x pb-16 md:pb-24 lg:pb-32">
      <div class="mb-10 md:mb-16">
        <div class="eyebrow mb-4"><span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" /><span>FAQ</span></div>
        <AnimatedText as="h2" split="lines" class="font-display text-display-md leading-[0.95] tracking-[-0.03em] text-balance max-w-2xl">
          {{ t('faq.title') }}
        </AnimatedText>
        <Reveal :delay="0.15" class="mt-4 max-w-xl text-base text-white/70">
          {{ t('faq.subtitle') }}
        </Reveal>
      </div>
      <div class="divide-y divide-white/10">
        <FaqItem
          v-for="(item, i) in faqItems"
          :key="i"
          :question="item.q"
          :answer="item.a"
        />
      </div>
    </section>

    <!-- CTA -->
    <section class="container-x pb-16 md:pb-24 lg:pb-32">
      <div class="relative overflow-hidden rounded-3xl border border-white/10 p-8 md:p-12 lg:p-20 bg-ink-900">
        <div class="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <AnimatedText as="h2" split="lines" class="font-display text-display-lg leading-[0.92] tracking-[-0.03em] text-balance max-w-3xl">
            {{ t('home.ctaTitle') }}
          </AnimatedText>
          <NuxtLink :to="localePath('/contact')" class="btn btn-primary self-end" data-cursor="link">
            {{ t('common.getInTouch') }} <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        />
      </div>
    </section>
  </div>
</template>
