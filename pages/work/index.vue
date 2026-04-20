<script setup lang="ts">
import { computed, ref } from 'vue'

const { t } = useI18n()
const { all, categories } = useProjects()
const selected = ref<string>('__all')

const filtered = computed(() =>
  selected.value === '__all'
    ? all
    : all.filter((p) => p.category.includes(selected.value)),
)

useSeoMeta({
  title: `${t('work.title')} — Andrea Piscioneri`,
  description: t('work.subtitle'),
  ogTitle: `${t('work.title')} — Andrea Piscioneri`,
  ogDescription: t('work.subtitle'),
})
</script>

<template>
  <div>
    <section class="container-x pt-40 md:pt-48 lg:pt-56">
      <div class="eyebrow mb-4"><span>/ {{ t('nav.work') }}</span></div>
      <AnimatedText as="h1" split="lines" class="font-display text-display-xl leading-[0.88] tracking-[-0.04em] text-balance max-w-5xl">
        {{ t('work.title') }}
      </AnimatedText>
      <Reveal :delay="0.3">
        <p class="mt-6 max-w-2xl text-base text-ink-500 text-pretty dark:text-white/70 md:text-lg">
          {{ t('work.subtitle') }}
        </p>
      </Reveal>
    </section>

    <!-- Filter -->
    <section class="container-x pt-16 md:pt-20">
      <div class="flex flex-wrap items-center gap-2">
        <button
          type="button"
          class="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors duration-300"
          :class="selected === '__all' ? 'border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink' : 'border-black/15 text-ink-500 hover:bg-ink hover:text-paper dark:border-white/15 dark:text-white/60 dark:hover:bg-paper dark:hover:text-ink'"
          data-cursor="link"
          @click="selected = '__all'"
        >
          {{ t('work.all') }}
        </button>
        <button
          v-for="c in categories"
          :key="c"
          type="button"
          class="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors duration-300"
          :class="selected === c ? 'border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink' : 'border-black/15 text-ink-500 hover:bg-ink hover:text-paper dark:border-white/15 dark:text-white/60 dark:hover:bg-paper dark:hover:text-ink'"
          data-cursor="link"
          @click="selected = c"
        >
          {{ c }}
        </button>
      </div>
    </section>

    <section class="container-x py-16 md:py-24">
      <TransitionGroup
        tag="div"
        name="cards"
        class="grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3"
      >
        <ProjectCard v-for="(p, i) in filtered" :key="p.slug" :project="p" :index="i" />
      </TransitionGroup>
    </section>
  </div>
</template>

<style scoped>
.cards-enter-active,
.cards-leave-active {
  transition: all 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}
.cards-enter-from,
.cards-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
