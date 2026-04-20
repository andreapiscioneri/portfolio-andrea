<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="relative overflow-hidden pt-40 md:pt-48 lg:pt-56">
    <div class="container-x relative z-10">
      <div class="flex flex-col gap-8">
        <Reveal :y="12" :duration="0.7">
          <div class="eyebrow">
            <span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{{ t('home.heroEyebrow') }}</span>
          </div>
        </Reveal>

        <h1 class="font-display text-display-xl leading-[0.88] tracking-[-0.04em] text-balance">
          <AnimatedText as="span" split="lines" class="block">
            <span class="block">{{ t('home.heroLine1') }}</span>
            <span class="block">{{ t('home.heroLine2') }}</span>
            <span class="block italic">{{ t('home.heroLine3') }}</span>
            <span class="block">{{ t('home.heroLine4') }}</span>
          </AnimatedText>
        </h1>

        <div class="grid gap-10 pt-6 md:grid-cols-[2fr_1fr] md:items-end">
          <Reveal :delay="0.3">
            <p class="max-w-2xl text-base text-ink-600 dark:text-white/70 text-pretty md:text-lg">
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
      class="pointer-events-none absolute -right-40 top-32 h-[650px] w-[650px] rounded-full border border-black/5 dark:border-white/10 animate-spin-slow"
    >
      <span
        class="absolute -left-2 top-1/2 -translate-y-1/2 inline-block h-3 w-3 rounded-full bg-accent"
      />
    </div>
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-10 h-[300px] w-[300px] rounded-full border border-black/5 dark:border-white/10"
    />

    <!-- scroll cue -->
    <div class="container-x mt-24 flex items-center justify-between pb-10 md:pb-14 text-xs uppercase tracking-[0.3em] text-ink-500 dark:text-white/50">
      <span>{{ t('home.scroll') }} ↓</span>
      <span>Lombardia · Italia</span>
    </div>
  </section>
</template>
