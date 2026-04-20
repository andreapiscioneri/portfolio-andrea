<script setup lang="ts">
interface NuxtError {
  statusCode?: number
  statusMessage?: string
  message?: string
}

const props = defineProps<{ error: NuxtError }>()
const { t } = useI18n()
const localePath = useLocalePath()

const is404 = computed(() => props.error?.statusCode === 404)

const title = computed(() => is404.value ? t('notFound.title') : t('serverError.title'))
const description = computed(() => is404.value ? t('notFound.description') : t('serverError.description'))
const cta = computed(() => is404.value ? t('notFound.cta') : t('serverError.cta'))

const handleError = () => clearError({ redirect: localePath('/') })
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-paper px-6 py-20 text-ink dark:bg-ink-950 dark:text-paper">
    <div class="w-full max-w-lg text-center">

      <!-- Status code -->
      <div class="eyebrow mb-8 justify-center">
        <span>{{ error?.statusCode || 500 }}</span>
      </div>

      <!-- Heading -->
      <h1 class="font-display text-display-md leading-[0.95] tracking-[-0.04em] mb-6 text-balance">
        {{ title }}
      </h1>

      <!-- Description -->
      <p class="mb-10 text-base text-ink-500 dark:text-white/60 text-pretty md:text-lg">
        {{ description }}
      </p>

      <!-- CTA -->
      <button
        class="btn btn-primary"
        @click="handleError"
      >
        {{ cta }}
      </button>
    </div>
  </div>
</template>
