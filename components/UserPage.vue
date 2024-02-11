<script lang="ts" setup>
import { collection, query, where, getDocs } from "firebase/firestore";
const db = useFirestore()
const route = useRoute()
let pageData = ref(null)

async function loadPageData() {
  const {docs} = await getDocs(query(collection(db, "pages"), where("name", "==", route.params.username)))
if (docs.length === 0) navigateTo('/')
pageData.value = docs[0].data()
}
await loadPageData()
</script>

<template>
    <UContainer >
      <UserpageHero :name="pageData?.name" :userImg="pageData?.userImg ?? null" />
      
      <ul class="space-y-4 mt-32">
          <UserpageLink v-for="{icon, url} in pageData?.value?.links" :key="url" :icon :url />
        </ul>
    </UContainer>
</template>

<style scoped></style>