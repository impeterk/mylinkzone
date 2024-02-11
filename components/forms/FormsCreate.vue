<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
const route = useRoute()

const schema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters long').max(20, 'Username must be max 20 characters long')
})

type Schema = z.output<typeof schema>
const state = reactive({
  username: String(route.query.username ?? useUsername().value ?? ''),
  unavailable: false,
  loading: false
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await checkUsername(event.data.username)
}

async function checkUsername(username: string) {
  state.unavailable = false
  state.loading = true
  const { available, taken } = await $fetch('/api/getuser', {
    method: 'post',
    body: { username }
  })
  if (taken) state.unavailable = true
  if (available) useUsername().value = username
  state.loading = false
}

if (state.username && !useUsername().value) checkUsername(state.username)
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4 my-4" @submit="onSubmit">
    <UFormGroup label="UserName" name="username" size="xl" color="slate">
      <UInput v-model="state.username" class="text-center" placeholder="Enter desired username"
        :disabled="Boolean(useUsername().value)" :ui="{ base: 'text-center !text-xl' }" />
      <p v-if="state.unavailable" class="mt-2 text-red-500 dark:text-red-400 text-base flex gap-1 ">
        Sorry
        <Icon name="solar:sad-square-outline" class="size-5" /> This username is not available
      </p>
    </UFormGroup>

    <UButton type="submit" :color="Boolean(useUsername().value) ? 'gray' : 'primary'" block size="xl"
      :disabled="Boolean(useUsername().value)" :loading="state.loading">
      {{ state.loading ? 'Claiming your Username' : 'Claim Your Username' }}
      <Icon v-if="Boolean(useUsername().value)" name="material-symbols:check-circle-outline-rounded"
        class="text-green-500 dark:text-green-400 size-5" />

    </UButton>
  </UForm>
</template>



<style scoped></style>
