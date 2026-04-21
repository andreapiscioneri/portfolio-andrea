<script setup lang="ts">
import { personal, bio, experiences, educations, skills, links } from '~/content/about'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const { getHeroImageBySlug } = useHeroProjectImage()

const profileImageSrc = computed(() => (locale.value === 'it' ? '/profilo.PNG' : '/1.PNG'))
const heroImage = getHeroImageBySlug('reteye', 2)
const site = useRuntimeConfig().public.siteUrl as string
const absoluteHeroImage = computed(() => (/^https?:\/\//i.test(heroImage.value) ? heroImage.value : `${site}${heroImage.value}`))
const cvDownload = computed(() => (locale.value === 'it' ? '/Andrea_Piscioneri_CV.pdf' : '/Andrea_Piscioneri_CV_english.pdf'))
const cvLabel = computed(() => (locale.value === 'it' ? 'Scarica CV — Italiano ↓' : 'Download CV — English ↓'))
const cvAltDownload = computed(() => (locale.value === 'it' ? '/Andrea_Piscioneri_CV_english.pdf' : '/Andrea_Piscioneri_CV.pdf'))
const cvAltLabel = computed(() => (locale.value === 'it' ? 'English version ↓' : 'Versione italiana ↓'))
const aboutUrl = computed(() => `${site}${localePath('/about')}`)
const homeUrl = computed(() => `${site}${localePath('/')}`)

useSeoPerson()

useSeoMeta({
  title: `${t('about.title')} — Andrea Piscioneri`,
  description: t('about.subtitle'),
  keywords: 'Andrea Piscioneri, UX/UI Designer, Web Developer, Graphic Designer, LABA Brescia, Accademia Belle Arti Santa Giulia, Denani, Albino Bergamo, curriculum vitae, portfolio designer italiano',
  ogTitle: `${t('about.title')} — Andrea Piscioneri`,
  ogDescription: t('about.subtitle'),
  ogImage: absoluteHeroImage,
  twitterTitle: `${t('about.title')} — Andrea Piscioneri`,
  twitterDescription: t('about.subtitle'),
  twitterImage: absoluteHeroImage,
  twitterCard: 'summary_large_image',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': `${aboutUrl.value.replace(/\/$/, '')}/#profilepage`,
        name: `${t('about.title')} — Andrea Piscioneri`,
        url: aboutUrl.value,
        description: t('about.subtitle'),
        inLanguage: locale.value,
        isPartOf: { '@id': `${site}/#website` },
        mainEntity: { '@id': `${site}/#person` },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('nav.home'), item: homeUrl.value },
          { '@type': 'ListItem', position: 2, name: t('nav.about'), item: aboutUrl.value },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden pt-40 md:pt-48 lg:pt-56 pb-12 md:pb-16">
      <NuxtImg
        :src="heroImage"
        :alt="t('nav.about')"
        class="pointer-events-none absolute inset-0 h-full w-full object-cover"
        format="webp"
        sizes="100vw"
        placeholder
      />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/72 via-black/58 to-black/70" />
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(57,255,20,0.2),transparent_50%)]" />

      <div class="container-x relative z-10">
        <div class="eyebrow mb-4 text-white/70"><span>/ {{ t('nav.about') }}</span></div>
        <div class="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-end text-paper">
          <div>
            <Reveal :delay="0.1">
              <div class="mb-8 h-48 w-48 overflow-hidden rounded-full border-2 border-white/25">
                <img
                  :src="profileImageSrc"
                  alt="Andrea Piscioneri"
                  class="h-full w-full object-cover object-top grayscale contrast-125 brightness-110 saturate-0"
                />
              </div>
            </Reveal>
            <AnimatedText as="h1" split="lines" class="font-display text-display-xl leading-[0.88] tracking-[-0.04em] text-balance">
              {{ personal.firstName }}<br><span class="italic">{{ personal.lastName }}</span>
            </AnimatedText>
          </div>
          <Reveal :delay="0.3">
            <p class="text-base text-white/80 text-pretty md:text-lg">
              {{ t('about.subtitle') }}
            </p>
            <ul class="mt-8 space-y-3 text-sm">
              <li class="flex justify-between gap-8 border-b border-white/20 pb-3">
                <span class="text-white/65">{{ t('contact.emailLabel') }}</span>
                <a :href="`mailto:${personal.email}`" class="link-hover">{{ personal.email }}</a>
              </li>
              <li class="flex justify-between gap-8 border-b border-white/20 pb-3">
                <span class="text-white/65">{{ t('contact.phoneLabel') }}</span>
                <a :href="`tel:${personal.phoneRaw}`" class="link-hover">{{ personal.phone }}</a>
              </li>
              <li class="flex justify-between gap-8 border-b border-white/20 pb-3">
                <span class="text-white/65">{{ t('contact.locationLabel') }}</span>
                <span>{{ personal.location }}</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- Bio -->
    <section class="container-x py-20 md:py-28">
      <div class="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div class="eyebrow"><span>{{ t('about.bioTitle') }}</span></div>
        <Reveal>
          <div class="space-y-6 text-lg leading-relaxed text-ink-700 text-pretty dark:text-white/80">
            <p v-for="(p, i) in bio.it.split(/\n\n/)" :key="i">{{ p }}</p>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- Roles / Headline -->
    <section class="border-y border-black/5 bg-paper-200 py-10 md:py-14 dark:border-white/10 dark:bg-ink-900">
      <div class="container-x flex flex-wrap items-center gap-3">
        <span
          v-for="r in personal.roles"
          :key="r"
          class="rounded-full border border-black/15 bg-paper/60 px-4 py-2 text-xs uppercase tracking-[0.16em] dark:border-white/15 dark:bg-ink-950/60"
        >
          {{ r }}
        </span>
      </div>
    </section>

    <!-- Experience -->
    <section class="container-x py-20 md:py-28">
      <div class="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div class="eyebrow self-start"><span>{{ t('about.experienceTitle') }}</span></div>
        <div class="space-y-10">
          <Reveal v-for="(exp, i) in experiences" :key="i" :delay="i * 0.06">
            <article class="relative rounded-3xl border border-black/5 bg-paper-200 p-8 md:p-10 dark:border-white/10 dark:bg-ink-900">
              <div class="flex flex-wrap items-baseline justify-between gap-4">
                <h3 class="font-display text-2xl leading-[1.05] tracking-[-0.02em] md:text-3xl">
                  {{ exp.role }}
                </h3>
                <span class="rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-ink-500 dark:border-white/15 dark:text-white/60">
                  {{ exp.period }}
                </span>
              </div>
              <p class="mt-2 text-sm text-ink-500 dark:text-white/60">
                {{ exp.company }} — {{ exp.location }}
              </p>
              <div class="mt-6 space-y-4 text-base text-ink-700 text-pretty dark:text-white/80">
                <p v-for="(par, j) in exp.description.split(/\n\n/)" :key="j">{{ par }}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="border-y border-black/5 bg-paper-200 py-20 md:py-28 dark:border-white/10 dark:bg-ink-900">
      <div class="container-x grid gap-12 md:grid-cols-[1fr_2fr]">
        <div class="eyebrow self-start"><span>{{ t('about.educationTitle') }}</span></div>
        <div class="space-y-10">
          <Reveal v-for="(edu, i) in educations" :key="i" :delay="i * 0.06">
            <article class="relative rounded-3xl border border-black/5 bg-paper p-8 md:p-10 dark:border-white/10 dark:bg-ink-950">
              <div class="flex flex-wrap items-baseline justify-between gap-4">
                <h3 class="font-display text-2xl leading-[1.05] tracking-[-0.02em] md:text-3xl">
                  {{ edu.title }}
                </h3>
                <span class="rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-ink-500 dark:border-white/15 dark:text-white/60">
                  {{ edu.period }}
                </span>
              </div>
              <p class="mt-2 text-sm text-ink-500 dark:text-white/60">
                {{ edu.institution }} — {{ edu.location }}
              </p>
              <div class="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <span class="h-1.5 w-1.5 rounded-full bg-accent" />
                {{ t('about.gradeLabel') }}: {{ edu.grade }}
              </div>
              <div v-if="edu.thesis" class="mt-4 text-sm text-ink-500 dark:text-white/60">
                <span class="font-medium">{{ t('about.thesisLabel') }}:</span> {{ edu.thesis }}
              </div>
              <div class="mt-6 space-y-4 text-base text-ink-700 text-pretty dark:text-white/80">
                <div>
                  <h4 class="mb-2 text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-white/60">
                    {{ t('about.technicalLabel') }}
                  </h4>
                  <p v-for="(par, j) in edu.technical.split(/\n\n/)" :key="`t${j}`" class="mb-3">{{ par }}</p>
                </div>
                <div>
                  <h4 class="mb-2 text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-white/60">
                    {{ t('about.professionalLabel') }}
                  </h4>
                  <p v-for="(par, j) in edu.professional.split(/\n\n/)" :key="`p${j}`" class="mb-3">{{ par }}</p>
                </div>
                <div v-if="edu.activities && edu.activities.length">
                  <h4 class="mb-3 text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-white/60">
                    {{ t('about.activitiesLabel') }}
                  </h4>
                  <ul class="space-y-3 border-l-2 border-accent/40 pl-5">
                    <li v-for="(act, j) in edu.activities" :key="`a${j}`">{{ act }}</li>
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="container-x py-20 md:py-28">
      <div class="eyebrow mb-10"><span>{{ t('about.skillsTitle') }}</span></div>

      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <Reveal>
          <h3 class="font-display text-2xl leading-[1.1] tracking-[-0.02em]">{{ t('about.strengthsTitle') }}</h3>
          <ul class="mt-6 flex flex-wrap gap-2">
            <li
              v-for="s in skills.strengths"
              :key="s"
              class="rounded-full border border-black/15 px-3 py-1.5 text-xs uppercase tracking-[0.16em] dark:border-white/15"
            >
              {{ s }}
            </li>
          </ul>
        </Reveal>

        <Reveal :delay="0.05">
          <h3 class="font-display text-2xl leading-[1.1] tracking-[-0.02em]">{{ t('about.softTitle') }}</h3>
          <ul class="mt-6 flex flex-wrap gap-2">
            <li
              v-for="s in skills.soft"
              :key="s"
              class="rounded-full border border-black/15 px-3 py-1.5 text-xs uppercase tracking-[0.16em] dark:border-white/15"
            >
              {{ s }}
            </li>
          </ul>
        </Reveal>

        <Reveal :delay="0.1">
          <h3 class="font-display text-2xl leading-[1.1] tracking-[-0.02em]">{{ t('about.languagesTitle') }}</h3>
          <ul class="mt-6 space-y-2">
            <li
              v-for="l in skills.languages"
              :key="l.name"
              class="flex items-center justify-between border-b border-black/5 pb-2 text-sm dark:border-white/10"
            >
              <span>{{ l.name }}</span>
              <span class="text-ink-500 dark:text-white/60">{{ l.level }}</span>
            </li>
          </ul>
          <h3 class="mt-10 font-display text-2xl leading-[1.1] tracking-[-0.02em]">{{ t('about.licensesTitle') }}</h3>
          <p class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="d in skills.drivingLicenses"
              :key="d"
              class="rounded-full border border-black/15 px-3 py-1 text-xs font-mono dark:border-white/15"
            >
              {{ d }}
            </span>
          </p>
        </Reveal>
      </div>

      <div class="mt-16 grid gap-12 md:grid-cols-2">
        <Reveal>
          <h3 class="font-display text-2xl leading-[1.1] tracking-[-0.02em]">{{ t('about.softwareTitle') }}</h3>
          <ul class="mt-6 space-y-4">
            <li v-for="s in skills.software" :key="s.name">
              <div class="flex items-center justify-between text-sm">
                <span>{{ s.name }}</span>
                <span class="tabular-nums text-ink-500 dark:text-white/50">{{ s.level }}%</span>
              </div>
              <div class="mt-2 h-[2px] w-full overflow-hidden bg-black/10 dark:bg-white/10">
                <div class="h-full bg-accent transition-[width] duration-1000" :style="{ width: `${s.level}%` }" />
              </div>
            </li>
          </ul>
        </Reveal>
        <Reveal :delay="0.1">
          <h3 class="font-display text-2xl leading-[1.1] tracking-[-0.02em]">{{ t('about.developmentTitle') }}</h3>
          <ul class="mt-6 space-y-4">
            <li v-for="s in skills.development" :key="s.name">
              <div class="flex items-center justify-between text-sm">
                <span>{{ s.name }}</span>
                <span class="tabular-nums text-ink-500 dark:text-white/50">{{ s.level }}%</span>
              </div>
              <div class="mt-2 h-[2px] w-full overflow-hidden bg-black/10 dark:bg-white/10">
                <div class="h-full bg-ink transition-[width] duration-1000 dark:bg-paper" :style="{ width: `${s.level}%` }" />
              </div>
            </li>
          </ul>
        </Reveal>
      </div>

      <Reveal :delay="0.2">
        <div class="mt-16 rounded-3xl border border-black/5 bg-paper-200 p-8 text-base text-ink-700 text-pretty dark:border-white/10 dark:bg-ink-900 dark:text-white/80">
          {{ skills.additional }}
        </div>
      </Reveal>
    </section>

    <!-- Social -->
    <section class="border-t border-black/5 bg-paper-200 py-16 dark:border-white/10 dark:bg-ink-900">
      <div class="container-x grid gap-10 md:grid-cols-[1fr_2fr]">
        <div class="eyebrow"><span>{{ t('about.socialTitle') }}</span></div>
        <ul class="grid gap-4 md:grid-cols-2">
          <li>
            <a :href="links.website" target="_blank" rel="noopener" class="group flex items-center justify-between border-b border-black/10 py-4 dark:border-white/10" data-cursor="link">
              <span class="font-display text-xl">Sito personale</span>
              <span class="text-ink-500 transition-transform group-hover:translate-x-1 dark:text-white/60">↗</span>
            </a>
          </li>
          <li>
            <a :href="links.behance" target="_blank" rel="noopener" class="group flex items-center justify-between border-b border-black/10 py-4 dark:border-white/10" data-cursor="link">
              <span class="font-display text-xl">Behance</span>
              <span class="text-ink-500 transition-transform group-hover:translate-x-1 dark:text-white/60">↗</span>
            </a>
          </li>
          <li>
            <a :href="links.linkedin" target="_blank" rel="noopener" class="group flex items-center justify-between border-b border-black/10 py-4 dark:border-white/10" data-cursor="link">
              <span class="font-display text-xl">LinkedIn</span>
              <span class="text-ink-500 transition-transform group-hover:translate-x-1 dark:text-white/60">↗</span>
            </a>
          </li>
          <li>
            <a :href="links.instagramDesign" target="_blank" rel="noopener" class="group flex items-center justify-between border-b border-black/10 py-4 dark:border-white/10" data-cursor="link">
              <span class="font-display text-xl">Instagram · @andrea.piscioneri_design</span>
              <span class="text-ink-500 transition-transform group-hover:translate-x-1 dark:text-white/60">↗</span>
            </a>
          </li>
          <li>
            <a :href="links.instagramPersonal" target="_blank" rel="noopener" class="group flex items-center justify-between border-b border-black/10 py-4 dark:border-white/10" data-cursor="link">
              <span class="font-display text-xl">Instagram · @andreapiscioneri</span>
              <span class="text-ink-500 transition-transform group-hover:translate-x-1 dark:text-white/60">↗</span>
            </a>
          </li>
          <li>
            <a :href="links.facebook" target="_blank" rel="noopener" class="group flex items-center justify-between border-b border-black/10 py-4 dark:border-white/10" data-cursor="link">
              <span class="font-display text-xl">Facebook</span>
              <span class="text-ink-500 transition-transform group-hover:translate-x-1 dark:text-white/60">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Download CV -->
    <section class="container-x py-16">
      <div class="grid gap-10 md:grid-cols-[1fr_2fr]">
        <div class="eyebrow self-start"><span>Curriculum Vitae</span></div>
        <Reveal>
          <div class="flex flex-wrap gap-4">
            <a
              :href="cvDownload"
              download
              class="btn btn-primary"
              data-cursor="link"
            >
              {{ cvLabel }}
            </a>
            <a
              :href="cvAltDownload"
              download
              class="btn btn-ghost"
              data-cursor="link"
            >
              {{ cvAltLabel }}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>
