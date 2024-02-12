<script lang="ts" setup>
import { collection, query, where, getDocs } from "firebase/firestore";
const db = useFirestore()
const route = useRoute()
const state = reactive({
  pageData: undefined
})

async function loadPageData() {
  const { docs } = await getDocs(query(collection(db, "pages"), where("name", "==", route.params.username)))
  if (docs.length === 0) navigateTo('/')
  state.pageData = docs[0].data()
}
await loadPageData()
</script>

<template>
  <UContainer>
    <UserpageHero :name="state.pageData?.name" :userImg="state.pageData?.userImg ?? null"
      :description="state.pageData?.description" />

    <ul class="space-y-4 mt-32">
      <UserpageLink v-for="{ service, link } in state.pageData?.links" :key="link" :service :link />
    </ul>
  </UContainer>
</template>

<style scoped></style>
