<script setup lang="ts">
const route = useRoute()
import type { FormError, FormSubmitEvent } from '#ui/types'
import { useDocument } from 'vuefire'
import { collection, query, where, getDocs } from "firebase/firestore";
const db = useFirestore()

const state = reactive({
  username: route.query.username
})

const avalable = useUsername()

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.username) errors.push({ path: 'username', message: 'Required' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  const {docs}= await getDocs(query(collection(db, "users"), where("name", "==", state.username)));
  if (!docs.length) avalable.value = true
  console.log(avalable.value)
}
</script>

<template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="UserName" name="username" size="xl" color="slate">
      <UInput v-model="state.username"  class="text-center" placeholder="Enter desired username" :ui="{base: 'text-center !text-xl'}"  />
    </UFormGroup>

    <UButton type="submit" block size="xl">
      Claim Your Username
    </UButton>
  </UForm>
</template>



<style scoped></style>
