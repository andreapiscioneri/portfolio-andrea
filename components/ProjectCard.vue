<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '~/content/projects'

const props = defineProps<{
  project: Project
  index?: number
  layout?: 'grid' | 'row'
}>()

const { t } = useI18n()
const localePath = useLocalePath()

const categories = computed(() => props.project.category.join(' · '))
const href = computed(() => localePath(`/work/${props.project.slug}`))
</script>

<template>
  <NuxtLink
    :to="href"
    class="group relative block overflow-hidden rounded-3xl border border-black/5 bg-paper-200 dark:border-white/10 dark:bg-ink-900 transition-transform duration-700 ease-smooth"
    data-cursor="link"
    data-cursor-label="↗"
  >
    <div class="relative aspect-[4/3] overflow-hidden bg-ink/5 dark:bg-white/5">
      <NuxtImg
        :src="project.cover"
        :alt="project.title"
        loading="lazy"
        format="webp"
        class="h-full w-full object-cover transition-transform duration-[1600ms] ease-out will-change-transform group-hover:scale-[1.05]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        placeholder
      />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
      />
      <span
        v-if="project.featured"
        class="absolute left-4 top-4 rounded-full border border-white/40 bg-ink/40 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md"
      >
        {{ t('common.selectedWorks') }}
      </span>
      <span
        class="absolute right-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-ink shadow-sm"
      >
        {{ project.year }}
      </span>
    </div>

    <div class="relative flex flex-col gap-3 p-6 md:p-7">
      <span class="eyebrow">{{ categories }}</span>
      <h3 class="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.05] tracking-[-0.02em] text-balance">
        {{ project.title }}
      </h3>
      <p class="text-sm text-ink-500 dark:text-white/70 text-pretty line-clamp-3">
        {{ project.excerpt }}
      </p>
      <div class="mt-3 flex items-center justify-between text-xs text-ink-500 dark:text-white/60">
        <span>{{ project.client }}</span>
        <span class="flex items-center gap-2 transition-transform duration-500 ease-smooth group-hover:translate-x-1">
          {{ t('work.viewProject') }} <span aria-hidden="true">→</span>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
