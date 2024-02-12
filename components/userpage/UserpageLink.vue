<script lang="ts" setup>

const props = defineProps({
  service: {
    type: String
  },
  link: {
    type: String
  }
})
const route = useRoute()
</script>

<template>
  <li>
    <ULink :to="props.link" target="_blank" :disabled="route.name === 'dashboard'">
      <UCard class="max-w-2xl mx-auto ">
        <div class="flex items-center gap-4">
          <Icon :name="`mdi:${props.service}`" class="size-8" />
          <a :href="props.link" class="text-xl" target="_blank">{{ props.service }}</a>
          <div class="ml-auto">
            <slot />
          </div>
        </div>
      </UCard>
    </ULink>
  </li>
</template>

<style scoped></style>
