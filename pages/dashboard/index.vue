<script lang="ts" setup>
const user = await useFirebaseAuth()

if (!user) navigateTo('/login')

definePageMeta({
  title: 'Dashboard'
})
</script>

<template>
  <section>
    <Suspense>
      <template #default>
        <Dashboard />
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </section>
</template>

<style scoped></style>
