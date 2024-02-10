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
  <UButton size="xl" label="Log Out" color="gray" @click.prevent.stop="logOut">
    <Icon name="lucide:log-out" /> <span>Log Out</span>
  </UButton>
</template>

<style scoped></style>
