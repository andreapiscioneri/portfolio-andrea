<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="relative flex min-h-screen flex-col bg-paper text-ink dark:bg-ink-950 dark:text-paper">
    <AppNavbar />
    <main class="relative flex-1 overflow-hidden">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
