<script setup lang="ts">
import { computed, ref } from 'vue'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const { all, categories } = useProjects()
const { getHeroImageBySlug } = useHeroProjectImage()
const selected = ref<string>('__all')
const heroImage = getHeroImageBySlug('airpods-pro-2', 1)
const site = useRuntimeConfig().public.siteUrl as string
const absoluteHeroImage = computed(() => (/^https?:\/\//i.test(heroImage.value) ? heroImage.value : `${site}${heroImage.value}`))
const workUrl = computed(() => `${site}${localePath('/work')}`)
const homeUrl = computed(() => `${site}${localePath('/')}`)

const filtered = computed(() =>
  selected.value === '__all'
    ? all
    : all.filter((p) => p.category.includes(selected.value)),
)

useSeoMeta({
  title: `${t('work.title')} — Andrea Piscioneri`,
  description: t('work.subtitle'),
  keywords: 'portfolio design, UX/UI design, web design, brand identity, graphic design, motion design, fotografia, Andrea Piscioneri, progetti digitali, Brescia, Lombardia',
  ogTitle: `${t('work.title')} — Andrea Piscioneri`,
  ogDescription: t('work.subtitle'),
  ogImage: absoluteHeroImage,
  twitterTitle: `${t('work.title')} — Andrea Piscioneri`,
  twitterDescription: t('work.subtitle'),
  twitterImage: absoluteHeroImage,
  twitterCard: 'summary_large_image',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Portfolio — Andrea Piscioneri',
        description: 'Tutti i progetti di design digitale, sviluppo web, brand identity, grafica e fotografia di Andrea Piscioneri.',
        url: workUrl.value,
        inLanguage: locale.value,
        numberOfItems: all.length,
        itemListElement: all.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: p.title,
          url: `${site}${localePath(`/work/${p.slug}`)}`,
          description: p.excerpt,
          image: p.cover,
        })),
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('nav.home'), item: homeUrl.value },
          { '@type': 'ListItem', position: 2, name: t('nav.work'), item: workUrl.value },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <section class="relative overflow-hidden pt-40 md:pt-48 lg:pt-56 pb-14 md:pb-20">
      <NuxtImg
        :src="heroImage"
        :alt="t('work.title')"
        class="pointer-events-none absolute inset-0 h-full w-full object-cover"
        format="webp"
        sizes="100vw"
        placeholder
      />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/72 via-black/58 to-black/70" />
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(57,255,20,0.2),transparent_52%)]" />

      <div class="container-x relative z-10">
        <div class="eyebrow mb-4 text-white/70"><span>/ {{ t('nav.work') }}</span></div>
        <AnimatedText as="h1" split="lines" class="font-display text-display-xl leading-[0.88] tracking-[-0.04em] text-balance max-w-5xl text-paper">
          {{ t('work.title') }}
        </AnimatedText>
        <Reveal :delay="0.3">
          <p class="mt-6 max-w-2xl text-base text-white/80 text-pretty md:text-lg">
            {{ t('work.subtitle') }}
          </p>
        </Reveal>
      </div>
    </section>

    <!-- Filter -->
    <section class="container-x pt-16 md:pt-20">
      <div class="flex flex-wrap items-center gap-2">
        <button
          type="button"
          class="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors duration-300"
          :class="selected === '__all' ? 'border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink' : 'border-black/15 text-ink-500 hover:bg-ink hover:text-paper dark:border-white/15 dark:text-white/60 dark:hover:bg-paper dark:hover:text-ink'"
          data-cursor="link"
          @click="selected = '__all'"
        >
          {{ t('work.all') }}
        </button>
        <button
          v-for="c in categories"
          :key="c"
          type="button"
          class="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors duration-300"
          :class="selected === c ? 'border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink' : 'border-black/15 text-ink-500 hover:bg-ink hover:text-paper dark:border-white/15 dark:text-white/60 dark:hover:bg-paper dark:hover:text-ink'"
          data-cursor="link"
          @click="selected = c"
        >
          {{ c }}
        </button>
      </div>
    </section>

    <section class="container-x py-16 md:py-24">
      <TransitionGroup
        tag="div"
        name="cards"
        class="grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3"
      >
        <ProjectCard v-for="(p, i) in filtered" :key="p.slug" :project="p" :index="i" />
      </TransitionGroup>
    </section>
  </div>
</template>

<style scoped>
.cards-enter-active,
.cards-leave-active {
  transition: all 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}
.cards-enter-from,
.cards-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
