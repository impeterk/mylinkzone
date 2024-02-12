<script lang="ts">
</script>

<script lang="ts" setup>
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, type AuthProvider } from 'firebase/auth'
import { doc } from 'firebase/firestore';
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider()
const auth = useFirebaseAuth()

const state = reactive({
  error: false,
  loading: false,
  activeProvider: ''
})

async function handleProviderSignIn(provider: AuthProvider) {
  state.activeProvider = provider.providerId
  state.loading = true
  state.error = false
  try {

    const { user } = await signInWithPopup(auth, provider)
    // const userPage = await useDocument(doc(useFirestore(), 'pages', user.uid))
    const { available } = await $fetch('/api/getuser', {
      method: 'POST',
      body: {
        username: useState('username').value ?? user.email
      }
    })
    if (available) {
      await $fetch('/api/createpage', {
        method: "POST",
        body: {
          user,
          name: useState('username').value ?? user.email
        }
      })
    }
    state.loading = false
    navigateTo('/dashboard')
  } catch (error) {
    state.loading = false
    state.error = error.code
    console.log(error)
  }
  state.activeProvider = ''
}
</script>

<template>
  <div class="space-y-4">
    <form @submit.prevent="handleProviderSignIn(googleProvider)">
      <UButton color="primary" size="xl" block type="submit" :loading="state.activeProvider === 'google.com'"
        :disabled="state.loading">
        <Icon name="simple-icons:google" class="size-6" />
        <span>Continue with Google</span>
      </UButton>
    </form>
    <form @submit.prevent="handleProviderSignIn(githubProvider)">
      <UButton color="primary" size="xl" block type="submit" :loading="state.activeProvider === 'github.com'"
        :disabled="state.loading">
        <Icon name="simple-icons:github" class="size-6" />
        <span>Continue with Github</span>
      </UButton>
    </form>
    <p v-if="Boolean(state.error)" class="mt-2 text-red-500 dark:text-red-400 text-base text-center">
      {{ state.error }}
    </p>

  </div>
</template>

<style scoped></style>
