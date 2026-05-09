<script setup lang="ts">
const props = defineProps<{ question: string; answer: string }>()
const open = ref(false)
</script>

<template>
  <div class="py-5">
    <button
      class="flex w-full items-start justify-between gap-6 text-left"
      :aria-expanded="open"
      data-cursor="link"
      @click="open = !open"
    >
      <span class="text-base font-medium md:text-lg">{{ props.question }}</span>
      <span
        class="mt-0.5 shrink-0 text-accent transition-transform duration-300"
        :class="open ? 'rotate-45' : 'rotate-0'"
        aria-hidden="true"
      >+</span>
    </button>
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <p v-if="open" class="mt-3 max-w-3xl text-sm leading-relaxed text-ink-500 dark:text-white/65">
        {{ props.answer }}
      </p>
    </Transition>
  </div>
</template>
