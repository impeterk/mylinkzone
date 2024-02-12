<script lang="ts" setup>
const route = useRoute()
useHead({ title: route.params.username ?? '' })
</script>


<template>
  <section>
    <Suspense>
      <template #default>
        <UserPage />
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </section>
</template>

<style scoped></style>
