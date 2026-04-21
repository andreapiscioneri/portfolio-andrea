<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()
const { getBySlug, getNextPrev } = useProjects()

const slug = computed(() => String(route.params.slug))
const project = computed(() => getBySlug(slug.value))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

const { next, prev } = getNextPrev(slug.value)

const site = useRuntimeConfig().public.siteUrl as string
const pageUrl = computed(() => `${site}${route.path}`)
const galleryImages = computed(() =>
  (project.value?.gallery ?? []).map((img) =>
    /^https?:\/\//i.test(img.src) ? img.src : `${site}${img.src}`,
  ),
)
const absoluteCover = computed(() => {
  const cover = project.value?.cover ?? '/logo.png'
  return /^https?:\/\//i.test(cover) ? cover : `${site}${cover}`
})
const detailGallery = computed(() => {
  if (!project.value) return []

  if (project.value.gallery.length > 1) return project.value.gallery

  const firstImage = project.value.gallery[0] ?? { src: project.value.cover, alt: project.value.title }

  return [
    firstImage,
    {
      ...firstImage,
      alt: `${firstImage.alt} — dettaglio`,
    },
  ]
})

useSeoMeta({
  title: `${project.value!.title} — Andrea Piscioneri`,
  description: project.value!.excerpt,
  keywords: [...project.value!.category, ...project.value!.stack, 'Andrea Piscioneri', 'portfolio', project.value!.client].join(', '),
  ogTitle: `${project.value!.title} — Andrea Piscioneri`,
  ogDescription: project.value!.excerpt,
  ogImage: absoluteCover,
  twitterTitle: `${project.value!.title} — Andrea Piscioneri`,
  twitterDescription: project.value!.excerpt,
  twitterImage: absoluteCover,
  twitterCard: 'summary_large_image',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        '@id': `${site}/work/${project.value!.slug}/#work`,
        name: project.value!.title,
        abstract: project.value!.excerpt,
        description: project.value!.description,
        creator: { '@type': 'Person', '@id': `${site}/#person`, name: 'Andrea Piscioneri', url: site },
        author: { '@type': 'Person', '@id': `${site}/#person`, name: 'Andrea Piscioneri' },
        datePublished: `${project.value!.year}-01-01`,
        dateCreated: `${project.value!.year}-01-01`,
        keywords: [...project.value!.category, ...project.value!.stack].join(', '),
        genre: project.value!.category[0] ?? '',
        about: project.value!.category.map(c => ({ '@type': 'Thing', name: c })),
        url: pageUrl.value,
        image: galleryImages.value,
        thumbnailUrl: absoluteCover.value,
        inLanguage: locale.value,
        isPartOf: { '@id': `${site}/#website` },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('nav.home'), item: `${site}${localePath('/')}` },
          { '@type': 'ListItem', position: 2, name: t('nav.work'), item: `${site}${localePath('/work')}` },
          { '@type': 'ListItem', position: 3, name: project.value!.title, item: pageUrl.value },
        ],
      }),
    },
  ],
})
</script>

<template>
  <article v-if="project">
    <!-- Hero -->
    <section class="relative overflow-hidden pt-40 md:pt-48 lg:pt-56 pb-10 md:pb-16">
      <NuxtImg
        :src="project.cover"
        :alt="project.title"
        class="pointer-events-none absolute inset-0 h-full w-full object-cover"
        format="webp"
        sizes="100vw"
        placeholder
      />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/75" />
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(57,255,20,0.18),transparent_50%)]" />

      <div class="container-x relative z-10 text-paper">
        <div class="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/65">
          <NuxtLink :to="localePath('/work')" class="link-hover" data-cursor="link">← {{ t('project.backToWork') }}</NuxtLink>
          <span>·</span>
          <span>{{ project.year }}</span>
        </div>
        <AnimatedText as="h1" split="lines" class="font-display text-display-xl leading-[0.9] tracking-[-0.04em] max-w-5xl text-balance">
          {{ project.title }}
        </AnimatedText>
        <Reveal :delay="0.2">
          <p class="mt-8 max-w-3xl text-lg text-white/80 text-pretty md:text-xl">
            {{ project.excerpt }}
          </p>
        </Reveal>
      </div>
    </section>

    <!-- Cover image -->
    <section class="container-x">
      <Reveal :delay="0.1">
        <div class="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-ink-100 dark:bg-ink-900">
          <NuxtImg
            :src="project.cover"
            :alt="project.title"
            class="h-full w-full object-cover"
            format="webp"
            sizes="(max-width: 768px) 100vw, 1200px"
            placeholder
          />
        </div>
      </Reveal>
    </section>

    <!-- Meta grid -->
    <section class="container-x py-16 md:py-24">
      <div class="grid gap-14 md:grid-cols-[1.8fr_1fr]">
        <Reveal>
          <div class="eyebrow mb-4"><span>{{ t('project.overview') }}</span></div>
          <div class="prose prose-neutral max-w-none text-lg leading-relaxed text-ink-700 dark:prose-invert dark:text-white/80 text-pretty">
            <p v-for="(line, i) in project.description.split(/\n+/)" :key="i" class="mb-4">{{ line }}</p>
          </div>
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="mt-8 inline-flex btn btn-primary"
            data-cursor="link"
          >
            {{ t('project.visitLive') }} <span aria-hidden="true">↗</span>
          </a>
        </Reveal>

        <Reveal :delay="0.15">
          <dl class="grid grid-cols-1 gap-6 rounded-3xl border border-black/5 bg-paper-200 p-8 text-sm dark:border-white/10 dark:bg-ink-900">
            <div>
              <dt class="eyebrow mb-2">{{ t('project.client') }}</dt>
              <dd class="font-medium">{{ project.client }}</dd>
            </div>
            <div>
              <dt class="eyebrow mb-2">{{ t('project.year') }}</dt>
              <dd class="font-medium">{{ project.year }}</dd>
            </div>
            <div>
              <dt class="eyebrow mb-2">{{ t('project.role') }}</dt>
              <dd class="flex flex-wrap gap-1.5">
                <span v-for="r in project.role" :key="r" class="rounded-full border border-black/10 px-3 py-1 text-xs dark:border-white/15">{{ r }}</span>
              </dd>
            </div>
            <div>
              <dt class="eyebrow mb-2">{{ t('project.category') }}</dt>
              <dd class="flex flex-wrap gap-1.5">
                <span v-for="c in project.category" :key="c" class="rounded-full border border-black/10 px-3 py-1 text-xs dark:border-white/15">{{ c }}</span>
              </dd>
            </div>
            <div>
              <dt class="eyebrow mb-2">{{ t('project.stack') }}</dt>
              <dd class="flex flex-wrap gap-1.5">
                <span v-for="s in project.stack" :key="s" class="rounded-full bg-ink px-3 py-1 text-xs text-paper dark:bg-paper dark:text-ink">{{ s }}</span>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>

    <!-- Highlights -->
    <section class="container-x pb-16 md:pb-24">
      <div class="mb-10 flex items-end justify-between gap-6">
        <AnimatedText as="h2" split="lines" class="font-display text-display-md leading-[0.98] tracking-[-0.03em]">
          {{ t('project.highlights') }}
        </AnimatedText>
      </div>
      <div class="grid gap-4 md:grid-cols-2">
        <Reveal v-for="(h, i) in project.highlights" :key="i" :delay="i * 0.05">
          <div class="flex gap-5 rounded-3xl border border-black/5 bg-paper-200 p-6 dark:border-white/10 dark:bg-ink-900">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-paper text-xs font-medium dark:border-white/15 dark:bg-ink-950 dark:text-paper">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <p class="text-base text-ink-700 dark:text-white/80 text-pretty">{{ h }}</p>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- Gallery -->
    <section v-if="detailGallery.length" class="container-x pb-20 md:pb-28">
      <div class="eyebrow mb-6"><span>{{ t('project.gallery') }}</span></div>
      <div class="grid gap-4 md:grid-cols-2">
        <Reveal v-for="(img, i) in detailGallery" :key="i" :delay="i * 0.04">
          <figure class="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink-100 dark:bg-ink-900">
            <NuxtImg
              :src="img.src"
              :alt="img.alt"
              loading="lazy"
              format="webp"
              class="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder
            />
          </figure>
        </Reveal>
      </div>
    </section>

    <!-- Next / Prev nav -->
    <section class="container-x pb-24">
      <div class="grid gap-4 md:grid-cols-2">
        <NuxtLink
          v-if="prev"
          :to="localePath(`/work/${prev.slug}`)"
          class="group block rounded-3xl border border-black/5 bg-paper-200 p-8 transition-colors hover:bg-ink hover:text-paper dark:border-white/10 dark:bg-ink-900 dark:hover:bg-paper dark:hover:text-ink"
          data-cursor="link"
        >
          <div class="eyebrow mb-3">← {{ t('project.prev') }}</div>
          <p class="font-display text-2xl leading-[1.05] tracking-[-0.02em]">{{ prev.title }}</p>
        </NuxtLink>
        <NuxtLink
          v-if="next"
          :to="localePath(`/work/${next.slug}`)"
          class="group block rounded-3xl border border-black/5 bg-paper-200 p-8 text-right transition-colors hover:bg-ink hover:text-paper dark:border-white/10 dark:bg-ink-900 dark:hover:bg-paper dark:hover:text-ink"
          data-cursor="link"
        >
          <div class="eyebrow mb-3 justify-end">{{ t('project.next') }} →</div>
          <p class="font-display text-2xl leading-[1.05] tracking-[-0.02em]">{{ next.title }}</p>
        </NuxtLink>
      </div>
    </section>
  </article>
</template>
