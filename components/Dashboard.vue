<script lang="ts" setup>
import {doc} from 'firebase/firestore'
let pageData = ref(null)

const user = await useCurrentUser()
async function loadPageData() {
    const {data, pending} = await useDocument(doc(useFirestore(), 'pages', user.value.uid))
    pageData.value = data
}

await loadPageData()
</script>

<template>
    <UContainer >
      <UserpageHero :name="pageData?.value?.name" :userImg="pageData?.value?.userImg ?? null" />
      
      <ul class="space-y-4 mt-32">
          <UserpageLink v-for="{icon, url} in pageData?.value?.links" :key="url" :icon :url />
        </ul>
    </UContainer>
</template>

<style scoped></style>