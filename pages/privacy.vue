<script setup lang="ts">
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()
const { getHeroImageBySlug } = useHeroProjectImage()
const heroImage = getHeroImageBySlug('iconic-zine', 4)

useSeoMeta({
  title: `${t('privacy.title')} — Andrea Piscioneri`,
  description: t('privacy.subtitle'),
  robots: 'noindex,follow',
})

const rights = computed(() => tm('privacy.rights') as string[])
</script>

<template>
  <div>
    <section class="relative overflow-hidden pt-40 md:pt-48 lg:pt-56 pb-12 md:pb-16">
      <NuxtImg
        :src="heroImage"
        :alt="t('privacy.title')"
        class="pointer-events-none absolute inset-0 h-full w-full object-cover"
        format="webp"
        sizes="100vw"
        placeholder
      />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/74 via-black/60 to-black/74" />

      <div class="container-x relative z-10">
        <div class="eyebrow mb-4 text-white/70"><span>/ {{ t('privacy.title') }}</span></div>
        <AnimatedText as="h1" split="lines" class="font-display text-display-lg leading-[0.92] tracking-[-0.04em] max-w-3xl text-balance text-paper">
          {{ t('privacy.title') }}
        </AnimatedText>
        <Reveal :delay="0.15">
          <p class="mt-6 max-w-2xl text-base text-white/80 text-pretty md:text-lg">
            {{ t('privacy.subtitle') }}
          </p>
          <p class="mt-2 text-sm text-white/50">{{ t('privacy.lastUpdate') }}</p>
        </Reveal>
      </div>
    </section>

    <section class="container-x pb-24 md:pb-32">
      <div class="mx-auto max-w-3xl space-y-12">

        <Reveal>
          <div class="rounded-3xl border border-black/5 bg-paper-200 p-8 md:p-10 dark:border-white/10 dark:bg-ink-900">
            <h2 class="eyebrow mb-3">{{ t('privacy.ownerTitle') }}</h2>
            <p class="text-base text-ink-700 dark:text-white/80">{{ t('privacy.ownerText') }}</p>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <div>
            <h2 class="font-display text-2xl tracking-[-0.02em] mb-4">{{ t('privacy.dataTitle') }}</h2>
            <p class="text-base leading-relaxed text-ink-600 dark:text-white/70 text-pretty">{{ t('privacy.dataText') }}</p>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <div>
            <h2 class="font-display text-2xl tracking-[-0.02em] mb-4">{{ t('privacy.purposeTitle') }}</h2>
            <p class="text-base leading-relaxed text-ink-600 dark:text-white/70 text-pretty">{{ t('privacy.purposeText') }}</p>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <div>
            <h2 class="font-display text-2xl tracking-[-0.02em] mb-4">{{ t('privacy.basisTitle') }}</h2>
            <p class="text-base leading-relaxed text-ink-600 dark:text-white/70 text-pretty">{{ t('privacy.basisText') }}</p>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <div>
            <h2 class="font-display text-2xl tracking-[-0.02em] mb-4">{{ t('privacy.retentionTitle') }}</h2>
            <p class="text-base leading-relaxed text-ink-600 dark:text-white/70 text-pretty">{{ t('privacy.retentionText') }}</p>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <div>
            <h2 class="font-display text-2xl tracking-[-0.02em] mb-4">{{ t('privacy.rightsTitle') }}</h2>
            <p class="mb-4 text-base text-ink-600 dark:text-white/70">{{ t('privacy.rightsIntro') }}</p>
            <ul class="mb-6 space-y-2">
              <li
                v-for="(right, i) in rights"
                :key="i"
                class="flex items-start gap-3 text-base text-ink-600 dark:text-white/70"
              >
                <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-black/10 text-[10px] font-medium dark:border-white/15">{{ i + 1 }}</span>
                <span>{{ rt(right) }}</span>
              </li>
            </ul>
            <p class="text-base text-ink-600 dark:text-white/70">{{ t('privacy.rightsText') }}</p>
            <p class="mt-2 text-sm text-ink-400 dark:text-white/40 text-pretty">{{ t('privacy.complaintText') }}</p>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <div>
            <h2 class="font-display text-2xl tracking-[-0.02em] mb-4">{{ t('privacy.transferTitle') }}</h2>
            <p class="text-base leading-relaxed text-ink-600 dark:text-white/70 text-pretty">{{ t('privacy.transferText') }}</p>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <div>
            <h2 class="font-display text-2xl tracking-[-0.02em] mb-4">{{ t('privacy.thirdPartyTitle') }}</h2>
            <p class="text-base leading-relaxed text-ink-600 dark:text-white/70 text-pretty">{{ t('privacy.thirdPartyText') }}</p>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <p class="text-sm text-ink-400 dark:text-white/40 text-pretty">
            {{ t('privacy.cookieLinkText') }}
            <NuxtLink :to="localePath('/cookie')" class="underline underline-offset-2 hover:text-ink dark:hover:text-white transition-colors">{{ t('privacy.cookieLinkLabel') }}</NuxtLink>.
          </p>
        </Reveal>

      </div>
    </section>
  </div>
</template>
