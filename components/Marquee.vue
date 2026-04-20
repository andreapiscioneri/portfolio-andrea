<script setup lang="ts">
defineProps<{ items: string[]; speed?: number }>()
</script>

<template>
  <div class="relative w-full overflow-hidden" aria-hidden="true">
    <div class="flex w-max animate-marquee gap-12 whitespace-nowrap py-2">
      <template v-for="(loop, i) in 2" :key="i">
        <span
          v-for="(item, idx) in items"
          :key="`${i}-${idx}`"
          class="inline-flex items-center gap-12 font-display text-[clamp(2.5rem,6vw,7rem)] leading-[0.9] tracking-[-0.03em]"
        >
          <span>{{ item }}</span>
          <span class="text-accent">·</span>
        </span>
      </template>
    </div>
  </div>
</template>
