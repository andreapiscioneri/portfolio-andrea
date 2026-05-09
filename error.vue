<script setup lang="ts">
interface NuxtError {
  statusCode?: number
  statusMessage?: string
  message?: string
}

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error?.statusCode === 404)

const title = computed(() => is404.value ? 'Pagina non trovata' : 'Qualcosa è andato storto')
const description = computed(() => is404.value
  ? 'La pagina che cerchi non esiste o è stata spostata.'
  : 'Si è verificato un problema imprevisto. Riprova tra qualche istante.')

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="relative flex min-h-screen flex-col items-start justify-center overflow-hidden bg-ink px-8 text-paper">
    <!-- Glow -->
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(57,255,20,0.1),transparent_60%)]" />

    <!-- Nav -->
    <a href="/" class="absolute left-8 top-8 flex items-center gap-3" @click.prevent="handleError">
      <span class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-paper">
        <img src="/logo.png" alt="AP" class="h-5 w-5 object-contain invert" />
      </span>
      <span class="hidden text-sm font-medium sm:inline">Andrea Piscioneri</span>
    </a>

    <!-- Content -->
    <div class="relative max-w-3xl">
      <div class="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent">
        <span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
        <span>{{ error?.statusCode || 500 }}</span>
      </div>

      <h1 class="mb-8 font-display text-[clamp(3rem,10vw,8rem)] leading-[0.88] tracking-[-0.04em]">
        {{ title }}
      </h1>

      <p class="mb-12 max-w-xl text-base text-white/60 md:text-lg">
        {{ description }}
      </p>

      <button
        class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent hover:border-accent"
        @click="handleError"
      >
        Torna alla home <span aria-hidden="true">→</span>
      </button>
    </div>

    <!-- Watermark -->
    <div aria-hidden="true" class="pointer-events-none absolute bottom-0 right-0 select-none overflow-hidden">
      <span class="block font-display text-[clamp(8rem,30vw,22rem)] leading-[0.85] tracking-[-0.05em] text-white/5">
        {{ error?.statusCode || 500 }}
      </span>
    </div>
  </div>
</template>
