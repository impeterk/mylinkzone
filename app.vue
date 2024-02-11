<script setup lang="ts">
const db = useFirestore()
</script>

<template>

<div>
  <NuxtLoadingIndicator />
  <NuxtLayout name="main">
    <NuxtPage />
  </NuxtLayout>
</div>
</template>
<style>
@import '@fontsource/geist-mono';
@import '@fontsource/geist-sans';

body, html, #__nuxt {
  @apply min-h-dvh bg-gradient-to-t from-slate-300 to-slate-100 dark:from-slate-950 dark:to-slate-900;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(0.5rem); */
}
</style>