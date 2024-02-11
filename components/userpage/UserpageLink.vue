<script lang="ts" setup>

const props = defineProps({
  icon: {
    type: String
  },
  url: {
    type:String
  }
})

</script>

<template>
  <UCard class="max-w-xl mx-auto ">
    <div class="flex items-center gap-4">

      <Icon :name="`simple-icons:${props.icon}`" class="size-8" />
      <p class="text-xl">{{ props.url }}</p>
    </div>
  </UCard>

</template>

<style scoped></style>
