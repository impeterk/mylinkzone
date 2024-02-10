<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { signInWithEmailAndPassword } from 'firebase/auth';
const auth = useFirebaseAuth()

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string()
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined,
  loading: false,
  error: false
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  state.loading = true
  state.error = false
  const { email, password } = event.data
  await signInWithEmailAndPassword(auth, email, password).then(() => {
    state.loading = false
    navigateTo('/dashboard')
  }).catch((e: any) => {
    state.error = e.code
    state.loading = false
  })

}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email" size="lg">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password" size="lg">

      <UInput v-model="state.password" type="password" />
    </UFormGroup>
    <p v-if="Boolean(state.error)" class="mt-2 text-red-500 dark:text-red-400 text-base text-center">
      {{ state.error }}
    </p>

    <UButton type="submit" label="Log In" color="black" block size="xl" :disabled="state.loading"
      :loading="state.loading" />
  </UForm>
</template>


