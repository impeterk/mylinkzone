<script lang="ts" setup>

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
