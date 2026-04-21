<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { getHeroImageBySlug } = useHeroProjectImage()

const heroImage = getHeroImageBySlug('lumyn', 0)
</script>

<template>
  <section class="relative overflow-hidden pt-40 md:pt-48 lg:pt-56">
    <NuxtImg
      :src="heroImage"
      :alt="t('home.heroLine1')"
      class="pointer-events-none absolute inset-0 h-full w-full object-cover"
      format="webp"
      sizes="100vw"
      placeholder
    />
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/75" />
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(57,255,20,0.22),transparent_52%)]" />

    <div class="container-x relative z-10">
      <div class="flex flex-col gap-8">
        <Reveal :y="12" :duration="0.7">
          <div class="eyebrow text-white/70">
            <span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{{ t('home.heroEyebrow') }}</span>
          </div>
        </Reveal>

        <h1 class="font-display text-display-xl leading-[0.88] tracking-[-0.04em] text-balance text-paper">
          <AnimatedText as="span" split="lines" class="block">
            <span class="block">{{ t('home.heroLine1') }}</span>
            <span class="block">{{ t('home.heroLine2') }}</span>
            <span class="block italic">{{ t('home.heroLine3') }}</span>
            <span class="block">{{ t('home.heroLine4') }}</span>
          </AnimatedText>
        </h1>

        <div class="grid gap-10 pt-6 md:grid-cols-[2fr_1fr] md:items-end">
          <Reveal :delay="0.3">
            <p class="max-w-2xl text-base text-white/80 text-pretty md:text-lg">
              {{ t('home.heroDescription') }}
            </p>
          </Reveal>
          <Reveal :delay="0.5">
            <div class="flex flex-wrap items-center gap-3 md:justify-end">
              <NuxtLink :to="localePath('/work')" class="btn btn-primary" data-cursor="link">
                {{ t('home.ctaWork') }} <span aria-hidden="true">→</span>
              </NuxtLink>
              <NuxtLink :to="localePath('/contact')" class="btn btn-ghost" data-cursor="link">
                {{ t('home.ctaContact') }}
              </NuxtLink>
            </div>
          </Reveal>
        </div>
      </div>
    </div>

    <!-- decorative orbit -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-40 top-32 h-[650px] w-[650px] rounded-full border border-white/20 animate-spin-slow"
    >
      <span
        class="absolute -left-2 top-1/2 -translate-y-1/2 inline-block h-3 w-3 rounded-full bg-accent"
      />
    </div>
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-10 h-[300px] w-[300px] rounded-full border border-white/20"
    />

    <!-- scroll cue -->
    <div class="container-x relative z-10 mt-24 flex items-center justify-between pb-10 md:pb-14 text-xs uppercase tracking-[0.3em] text-white/60">
      <span>{{ t('home.scroll') }} ↓</span>
      <span>Lombardia · Italia</span>
    </div>
  </section>
</template>
