<script setup lang="ts">
import { computed } from 'vue'

interface NuxtError {
  statusCode?: number
  statusMessage?: string
  message?: string
}

const props = defineProps<{ error: NuxtError }>()

const title = computed(() => (props.error?.statusCode === 404 ? 'Pagina non trovata' : 'Qualcosa è andato storto'))
const description = computed(() =>
  props.error?.statusCode === 404
    ? "La pagina che cerchi non esiste o è stata spostata. Torna alla home e ripartiamo da lì."
    : props.error?.message || "C'è stato un problema imprevisto. Riprova tra poco.",
)

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-paper px-6 text-ink dark:bg-ink-950 dark:text-paper">
    <div class="max-w-xl text-center">
      <div class="eyebrow mb-6 justify-center">
        <span>{{ error?.statusCode || 500 }}</span>
      </div>
      <h1 class="font-display text-display-md mb-6 text-balance">{{ title }}</h1>
      <p class="mb-10 text-ink-500 dark:text-white/70 text-pretty">{{ description }}</p>
      <button class="btn btn-primary" @click="handleError">Torna alla home</button>
    </div>
  </div>
</template>
