<script setup lang="ts">
import { reactive, watchEffect } from 'vue';
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false
  },
  action: {
    type: String,
    defalt: null
  }
})
const userData = useUserdata()

const state = reactive({
  isOpen: props.showModal,
  name: userData.value.name,
  description: userData.value.description,
  loading: false,
  error: false
})

const emit = defineEmits(['close', 'submit'])

function handleClose() {
  state.isOpen = false
  emit('close')
}
watchEffect(() => {
  state.isOpen = props.showModal
  state.name = userData.value.name
  state.description = userData.value.description
})

const schema = z.object({
  name: z.string().min(3, 'Username must be at least 3 characters').max(20, 'Username must be max 20 characters'),
  description: z.string().max(120, 'Maximum is 120 characters')
})

type Schema = z.output<typeof schema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
  state.loading = true
  state.error = false
  const { name, description } = event.data
  const { available, taken } = await $fetch('/api/getuser', {
    method: 'POST',
    body: {
      username: name
    }
  })
  if (taken && name !== userData.value.name) {
    state.loading = false
    state.error = true
    throw new Error('Unavailable username')
  }
  state.loading = false
  useUserdata().value = { name, description }
  handleClose()
  emit('submit')
}

</script>

<template>
  <div>
    <UModal v-model="state.isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-xl capitalize font-semibold leading-6 text-gray-900 dark:text-white">
              Edit User Info
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="handleClose" />
          </div>
        </template>
        <UForm :schema :state="state" class="space-y-4" @submit="onSubmit">
          <UFormGroup label="Name" name="name">
            <UInput v-model="state.name" :disabled="state.loading" />
          </UFormGroup>
          <p v-if="state.error" class="mt-2 text-red-500 dark:text-red-400 text-base flex gap-1 ">
            Sorry
            <Icon name="solar:sad-square-outline" class="size-5" /> This username is not available
          </p>

          <UFormGroup label="Description" name="description">
            <UTextarea v-model="state.description" :disabled="state.loading" />
          </UFormGroup>

          <UButton type="submit" :disabled="state.loading" :loading="state.loading">
            Submit
          </UButton>
        </UForm>
      </UCard>
    </UModal>
  </div>
</template>
