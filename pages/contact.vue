<script setup lang="ts">
import { ref, computed } from 'vue'
import { personal, links } from '~/content/about'

const { t } = useI18n()

useSeoMeta({
  title: `${t('contact.title')} — Andrea Piscioneri`,
  description: t('contact.subtitle'),
})

const form = ref({ name: '', email: '', message: '' })
const copied = ref(false)

const mailto = computed(() => {
  const subject = encodeURIComponent(`Nuovo contatto da ${form.value.name || 'portfolio'}`)
  const body = encodeURIComponent(
    `Nome: ${form.value.name}\nEmail: ${form.value.email}\n\n${form.value.message}`,
  )
  return `mailto:${personal.email}?subject=${subject}&body=${body}`
})

const copyEmail = async () => {
  if (!process.client) return
  try {
    await navigator.clipboard.writeText(personal.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2500)
  } catch {
    /* noop */
  }
}
</script>

<template>
  <div>
    <section class="container-x pt-40 md:pt-48 lg:pt-56 pb-20 md:pb-28">
      <div class="eyebrow mb-4"><span>/ {{ t('nav.contact') }}</span></div>
      <div class="grid gap-16 md:grid-cols-[1.3fr_1fr] md:items-end">
        <AnimatedText as="h1" split="lines" class="font-display text-display-xl leading-[0.88] tracking-[-0.04em] text-balance">
          {{ t('contact.title') }}
        </AnimatedText>
        <Reveal :delay="0.2">
          <p class="max-w-md text-base text-ink-600 text-pretty dark:text-white/70 md:text-lg">
            {{ t('contact.subtitle') }}
          </p>
        </Reveal>
      </div>
    </section>

    <section class="container-x pb-24 md:pb-32">
      <div class="grid gap-10 md:grid-cols-[1.2fr_1fr] lg:gap-16">
        <!-- Form / mailto -->
        <Reveal>
          <form class="space-y-6 rounded-3xl border border-black/5 bg-paper-200 p-8 md:p-10 dark:border-white/10 dark:bg-ink-900" @submit.prevent>
            <label class="block">
              <span class="eyebrow mb-2">{{ t('contact.formName') }}</span>
              <input
                v-model="form.name"
                type="text"
                required
                class="mt-2 w-full rounded-xl border border-black/10 bg-paper px-5 py-4 text-base outline-none transition-colors focus:border-ink dark:border-white/15 dark:bg-ink-950 dark:focus:border-paper"
              />
            </label>
            <label class="block">
              <span class="eyebrow mb-2">{{ t('contact.formEmail') }}</span>
              <input
                v-model="form.email"
                type="email"
                required
                class="mt-2 w-full rounded-xl border border-black/10 bg-paper px-5 py-4 text-base outline-none transition-colors focus:border-ink dark:border-white/15 dark:bg-ink-950 dark:focus:border-paper"
              />
            </label>
            <label class="block">
              <span class="eyebrow mb-2">{{ t('contact.formMessage') }}</span>
              <textarea
                v-model="form.message"
                rows="5"
                required
                class="mt-2 w-full rounded-xl border border-black/10 bg-paper px-5 py-4 text-base outline-none transition-colors focus:border-ink dark:border-white/15 dark:bg-ink-950 dark:focus:border-paper"
              />
            </label>
            <div class="flex flex-wrap gap-3 pt-2">
              <a :href="mailto" class="btn btn-primary" data-cursor="link">
                {{ t('contact.formSend') }} <span aria-hidden="true">→</span>
              </a>
              <button type="button" class="btn btn-ghost" @click="copyEmail" data-cursor="link">
                {{ copied ? t('contact.copiedEmail') : t('contact.copyEmail') }}
              </button>
            </div>
          </form>
        </Reveal>

        <!-- Info -->
        <Reveal :delay="0.1">
          <div class="space-y-10">
            <div>
              <div class="eyebrow mb-3">{{ t('contact.emailLabel') }}</div>
              <a :href="`mailto:${personal.email}`" class="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.02em] link-hover" data-cursor="link">
                {{ personal.email }}
              </a>
            </div>
            <div>
              <div class="eyebrow mb-3">{{ t('contact.phoneLabel') }}</div>
              <a :href="`tel:${personal.phoneRaw}`" class="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.02em] link-hover" data-cursor="link">
                {{ personal.phone }}
              </a>
            </div>
            <div>
              <div class="eyebrow mb-3">{{ t('contact.locationLabel') }}</div>
              <p class="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.02em]">
                {{ personal.city }}, {{ personal.region }}
              </p>
              <p class="mt-1 text-sm text-ink-500 dark:text-white/60">{{ personal.country }}</p>
            </div>
            <div>
              <div class="eyebrow mb-3">{{ t('contact.availableTitle') }}</div>
              <ul class="flex flex-wrap gap-2">
                <li
                  v-for="a in personal.availableFor"
                  :key="a"
                  class="rounded-full border border-black/15 px-3 py-1.5 text-xs uppercase tracking-[0.16em] dark:border-white/15"
                >
                  {{ a }}
                </li>
              </ul>
            </div>
            <div>
              <div class="eyebrow mb-3">{{ t('contact.hoursLabel') }}</div>
              <p class="text-base">{{ t('contact.hoursValue') }}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>
