<script setup lang="ts">
export interface MarqueeItem {
  name: string
  logo?: string
}
defineProps<{ items: MarqueeItem[]; speed?: number }>()
</script>

<template>
  <div class="relative w-full overflow-hidden" aria-hidden="true">
    <div class="flex w-max animate-marquee items-center gap-16 py-4">
      <template v-for="(loop, i) in 2" :key="i">
        <template v-for="(item, idx) in items" :key="`${i}-${idx}`">
          <span class="inline-flex items-center">
            <img
              v-if="item.logo"
              :src="item.logo"
              :alt="item.name"
              class="h-10 w-auto object-contain opacity-80"
              loading="lazy"
            />
            <span
              v-else
              class="font-display text-[clamp(1.5rem,3vw,3rem)] leading-[0.9] tracking-[-0.03em] opacity-80"
            >
              {{ item.name }}
            </span>
          </span>
          <span class="text-accent text-2xl">·</span>
        </template>
      </template>
    </div>
  </div>
</template>
