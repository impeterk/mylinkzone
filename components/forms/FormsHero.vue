<script setup lang="ts">
const router = useRouter()

import type {  FormSubmitEvent } from '#ui/types'
const state = reactive({
  username: null
})


async function onSubmit (event: FormSubmitEvent<any>) {
  const {username} = event.data

  router.push(`/create?username=${username ?? ''}`)
}

</script>

<template>
  <UCard class="mt-20 max-w-lg w-full py-6 px-4 bg-slate-100 border border-slate-300 dark:border-slate-700">
    <UForm @submit="onSubmit" :state="state">
      <div class="inline-flex w-full flex-col items-center justify-center text-xl shadow md:flex-row bg-white dark:bg-inherit">
        <p class=" ml-2 text-center max-md:w-full md:text-right">mylinkz.one/</p>
        <input class="w-full max-md:text-center bg-inherit outline-none" placeholder="YourUsername" name="userName"  v-model="state.username"/>
        <UButton type="submit" class="rounded-none p-4 text-xl" >
          Join for Free!
        </UButton>
      </div>
    </UForm>
  </UCard>
</template>


<style scoped></style>
