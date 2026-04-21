<script setup lang="ts">
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()
const { getHeroImageBySlug } = useHeroProjectImage()
const heroImage = getHeroImageBySlug('none-club', 5)

useSeoMeta({
  title: `${t('cookie.title')} — Andrea Piscioneri`,
  description: t('cookie.subtitle'),
  robots: 'noindex,follow',
})

interface CookieRow { name: string; purpose: string; duration: string }
interface BrowserLink { name: string; url: string }

const cookieRows = computed(() => tm('cookie.cookies') as CookieRow[])
const browsers = computed(() => tm('cookie.browsers') as BrowserLink[])
</script>

<template>
  <div>
    <section class="relative overflow-hidden pt-40 md:pt-48 lg:pt-56 pb-12 md:pb-16">
      <NuxtImg
        :src="heroImage"
        :alt="t('cookie.title')"
        class="pointer-events-none absolute inset-0 h-full w-full object-cover"
        format="webp"
        sizes="100vw"
        placeholder
      />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/74 via-black/60 to-black/74" />

      <div class="container-x relative z-10">
        <div class="eyebrow mb-4 text-white/70"><span>/ {{ t('cookie.title') }}</span></div>
        <AnimatedText as="h1" split="lines" class="font-display text-display-lg leading-[0.92] tracking-[-0.04em] max-w-3xl text-balance text-paper">
          {{ t('cookie.title') }}
        </AnimatedText>
        <Reveal :delay="0.15">
          <p class="mt-6 max-w-2xl text-base text-white/80 text-pretty md:text-lg">
            {{ t('cookie.subtitle') }}
          </p>
          <p class="mt-2 text-sm text-white/50">{{ t('cookie.lastUpdate') }}</p>
        </Reveal>
      </div>
    </section>

    <section class="container-x pb-24 md:pb-32">
      <div class="mx-auto max-w-3xl space-y-12">

        <Reveal>
          <div>
            <h2 class="font-display text-2xl tracking-[-0.02em] mb-4">{{ t('cookie.introTitle') }}</h2>
            <p class="text-base leading-relaxed text-ink-600 dark:text-white/70 text-pretty">{{ t('cookie.introText') }}</p>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <div>
            <h2 class="font-display text-2xl tracking-[-0.02em] mb-4">{{ t('cookie.usageTitle') }}</h2>
            <p class="text-base leading-relaxed text-ink-600 dark:text-white/70 text-pretty">{{ t('cookie.usageText') }}</p>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <div>
            <h2 class="font-display text-2xl tracking-[-0.02em] mb-4">{{ t('cookie.technicalTitle') }}</h2>
            <p class="mb-6 text-base leading-relaxed text-ink-600 dark:text-white/70 text-pretty">{{ t('cookie.technicalText') }}</p>

            <!-- Cookie table — responsive -->
            <div class="overflow-x-auto rounded-2xl border border-black/5 dark:border-white/10">
              <table class="w-full min-w-[480px] text-sm">
                <thead>
                  <tr class="border-b border-black/5 bg-paper-200 dark:border-white/10 dark:bg-ink-900">
                    <th class="px-5 py-3 text-left font-medium eyebrow text-[10px]">{{ t('cookie.tableNameHeader') }}</th>
                    <th class="px-5 py-3 text-left font-medium eyebrow text-[10px]">{{ t('cookie.tablePurposeHeader') }}</th>
                    <th class="px-5 py-3 text-left font-medium eyebrow text-[10px]">{{ t('cookie.tableDurationHeader') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, i) in cookieRows"
                    :key="i"
                    class="border-b border-black/5 last:border-0 dark:border-white/10"
                  >
                    <td class="px-5 py-4 font-mono text-xs text-ink dark:text-paper">{{ row.name }}</td>
                    <td class="px-5 py-4 text-ink-600 dark:text-white/70">{{ rt(row.purpose) }}</td>
                    <td class="px-5 py-4 text-ink-500 dark:text-white/50 whitespace-nowrap">{{ rt(row.duration) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <div class="rounded-3xl border border-black/5 bg-paper-200 p-8 md:p-10 dark:border-white/10 dark:bg-ink-900">
            <h2 class="font-display text-xl tracking-[-0.02em] mb-3">{{ t('cookie.noTrackingTitle') }}</h2>
            <p class="text-base text-ink-600 dark:text-white/70 text-pretty">{{ t('cookie.noTrackingText') }}</p>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <div>
            <h2 class="font-display text-2xl tracking-[-0.02em] mb-4">{{ t('cookie.thirdPartyTitle') }}</h2>
            <p class="text-base leading-relaxed text-ink-600 dark:text-white/70 text-pretty">{{ t('cookie.thirdPartyText') }}</p>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <div>
            <h2 class="font-display text-2xl tracking-[-0.02em] mb-4">{{ t('cookie.manageTitle') }}</h2>
            <p class="mb-5 text-base leading-relaxed text-ink-600 dark:text-white/70 text-pretty">{{ t('cookie.manageText') }}</p>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="b in browsers"
                :key="b.name"
                :href="rt(b.url)"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full border border-black/10 px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-paper dark:border-white/15 dark:hover:bg-paper dark:hover:text-ink"
                data-cursor="link"
              >
                {{ b.name }} ↗
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <div>
            <h2 class="font-display text-2xl tracking-[-0.02em] mb-4">{{ t('cookie.contactTitle') }}</h2>
            <p class="text-base text-ink-600 dark:text-white/70">{{ t('cookie.contactText') }}</p>
          </div>
        </Reveal>

        <Reveal :delay="0.05">
          <p class="text-sm text-ink-400 dark:text-white/40 text-pretty">
            {{ t('cookie.privacyLinkText') }}
            <NuxtLink :to="localePath('/trattamento-dati')" class="underline underline-offset-2 hover:text-ink dark:hover:text-white transition-colors">{{ t('footer.dataProcessing') }}</NuxtLink>.
          </p>
        </Reveal>

      </div>
    </section>
  </div>
</template>
