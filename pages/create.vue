<script lang="ts" setup>
definePageMeta({
  title: 'Create New Account'
})

</script>

<template>
  <div class="max-w-lg text-pretty mx-auto">
    <UCard>
      <section class="prose dark:prose-invert text-center">
        <h1>Create New Account</h1>
        <p class="text-balance">Claim your UNIQUE user name and create new account in moments with preffered provider</p>
      </section>
      <FormsCreate />
      <section class="space-y-4" v-if="useState('username').value">
        <div class="prose dark:prose-invert text-center">
          <h4 class="">Continue to create your account with one of our supported providers</h4>
        </div>
        <Providers />
      </section>
    </UCard>
  </div>
</template>

<style scoped></style>
