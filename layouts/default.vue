<script lang="ts" setup>
const route = useRoute()

// useHead({
//   titleTemplate: '%s - Site Title',
// })

useSeoMeta({
  title: () => `${route.meta.title ?? 'Your One Link'} - My Link Zone`,
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="layout">
    <Header />
    <UContainer>
      <main>
        
        <slot />
      </main>
    </UContainer>
      <Footer />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 2rem;
}
</style>
