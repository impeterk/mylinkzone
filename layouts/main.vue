<script lang="ts" setup>
const route = useRoute()
const url = useRequestURL()
const description = 'Elevate your digital identity with Your one link. Unleash creativity, effortlessly share your story. Your connections, your canvas.'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk || route.meta.title ? `${titleChunk || route.meta.title} - My Link Zone` : 'My Link Zone';
  }
})

useSeoMeta({
  ogTitle: () => `${route.meta.title ?? 'Your One Link'} - My Link Zone`,
  description,
  ogDescription: description,
  ogUrl: () => `${url.href}`,
  ogType: 'website'
})
</script>

<template>
  <div class="layout">
    <Header />
    <main>
      <UContainer>

        <slot />
      </UContainer>
    </main>
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
