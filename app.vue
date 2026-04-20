<script setup lang="ts">
import { computed } from 'vue'
import { useHead, useRoute } from '#imports'

const colorMode = useColorMode()
const route = useRoute()

const htmlClass = computed(() =>
  [colorMode.value === 'dark' ? 'dark' : '', 'cursor-custom'].filter(Boolean).join(' '),
)

useHead({
  htmlAttrs: { class: htmlClass },
})

// Ensure i18n updates <html lang>
const { locale } = useI18n()
useHead({ htmlAttrs: { lang: locale } })
</script>

<template>
  <div class="app-shell">
    <AppLoader />
    <AppCursor />
    <SmoothScroll />
    <NuxtLayout>
      <NuxtPage :key="route.fullPath" />
    </NuxtLayout>
  </div>
</template>

<style>
.app-shell {
  min-height: 100vh;
  position: relative;
  isolation: isolate;
}
</style>
