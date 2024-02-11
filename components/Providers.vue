<script lang="ts" setup>
import ProvidersEmailCreate from './providers/ProvidersEmailCreate.vue';
import ProvidersEmailLogin from './providers/ProvidersEmailLogin.vue';
</script>

<template>
  <div class="space-y-4">
    <ProvidersOAuth/>
    <UDivider label="OR" />
    <component :is="$route.path == '/create' ? ProvidersEmailCreate : ProvidersEmailLogin" />
  </div>
</template>
<style scoped></style>
