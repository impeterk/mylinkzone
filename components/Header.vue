<script lang="ts" setup>

const user = useCurrentUser()
const links = [[], [
  {
    icon: 'lucide:log-in',
    label: 'Log In',
    to: '/login'
  },
  {
    icon: 'lucide:user-plus',
    label: 'Create Account',
    to: '/create'
  }
]]

</script>

<template>
  <header class="border-b border-slate-600 dark:border-gray w-full">
    <UContainer>
      <nav class="flex items-center justify-between py-4 gap-4">
        <ULink to="/" class="flex items-center gap-2 font-mono text-2xl font-semibold tracking-wider">
          <Icon name="mdi:link-box-variant-outline" class="text-4xl" />
          <span>My<span class="text-primary mx-0.5 font-sans">Link</span>Zone</span>
        </ULink>
        <UHorizontalNavigation :links="links" v-if="!user" :ui="{ label: 'max-sm:hidden' }">
          <template #icon="{ link }">
            <Icon :name="link.icon" class="size-5 group-hover:text-black group-hover:dark:invert relative" />
          </template>
        </UHorizontalNavigation>
        <p class="ml-auto max-sm:hidden" v-if="user" >
          <Icon name="twemoji:waving-hand" class="size-6 mx-2"/>
          {{ user?.displayName ?? user?.email }}
        </p>
        <ButtonLogOut v-if="user" />
      </nav>
    </UContainer>
  </header>
</template>

<style scoped></style>
