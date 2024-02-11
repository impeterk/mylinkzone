<script lang="ts" setup>
import { signOut } from 'firebase/auth';
const auth = useFirebaseAuth()

async function logOut() {
  await signOut(auth).then(() => {
    navigateTo('/login')
  })
}

</script>

<template>
  <form @submit.prevent="logOut">
  <UButton size="xl" label="Log Out" color="gray" type="submit">
    <Icon name="lucide:log-out" /> <span class="max-sm:hidden">Log Out</span>
  </UButton>
</form >
</template>

<style scoped></style>
