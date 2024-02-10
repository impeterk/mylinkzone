<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { createUserWithEmailAndPassword } from 'firebase/auth';
const auth = useFirebaseAuth()

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined,
  loading: false
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  state.loading = true
  const { email, password } = event.data
  await createUserWithEmailAndPassword(auth, email, password).then(() => navigateTo('/dashboard'))

}
</script>

<template>
  <UAlert icon="i-heroicons-exclamation-circle" color="yellow" variant="subtle" title="Heads up!"
    description="Please consider not using email and password. There are better options" />
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email" size="lg">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password" size="lg">

      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit" label="Create Account" color="black" block size="xl" :disabled="state.loading"
      :loading="state.loading" />
  </UForm>
</template>


