<script lang="ts" setup>
definePageMeta({
  title: 'Create New Account'
})
const avalable = useUsername()

</script>

<template>
  <div class="max-w-lg mx-auto">
    <UCard  >
      <section class="prose dark:prose-invert text-center text-pretty my-8">
        <h1>Create New Account</h1>
        <p class="text-balance">Claim your UNIQUE user name and create new account in moments with preffered provider</p>
      </section>
      <FormsCreate />
      <p v-if="avalable">Your username can be added</p>
    </UCard>    
  </div>
</template>

<style scoped></style>
