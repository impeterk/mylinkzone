<script lang="ts" setup>
// useHead({
//   title: 'Sign in to your account'
// })

definePageMeta({
  title: 'Sign in to your account'
})

</script>

<template>
  <div class="w-full max-w-lg mx-auto">
    <UCard>
      <section class="text-center text-pretty prose my-4 dark:prose-invert">
        <h1>Log In</h1>
        <h3>Log in to your account </h3>
      </section>
      <Providers />
    </UCard>
  </div>
</template>

<style scoped></style>
