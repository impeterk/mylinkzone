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
      <nav class="flex items-center justify-between py-4">
        <ULink to="/" class="flex items-center gap-2 font-mono text-2xl font-semibold tracking-wider">
          <Icon name="mdi:link-box-variant-outline" class="text-4xl" />
          <span>My<span class="text-primary mx-0.5 font-sans">Link</span>Zone</span>
        </ULink>
        <UHorizontalNavigation :links="links" v-if="!user">
          <template #icon="{ link }">
            <Icon :name="link.icon" class="size-5" />
          </template>
        </UHorizontalNavigation>
        <ButtonLogOut v-if="user" />
        <!-- <ul class="flex gap-4 items-center "> -->
        <!--   <li v-for="{label, to, icon} in links" :key="label"> -->
        <!--     <ULink  :to="to" active-class="underline underline-offset-8 decoration-primary" class="flex items-center gap-2"  > -->
        <!--       <Icon :name="icon" class="text-2xl" /> -->
        <!--       {{ label }} -->
        <!--     </ULink> -->
        <!--   </li> -->
        <!-- </ul> -->
      </nav>
    </UContainer>
  </header>
</template>

<style scoped></style>
