
export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await useCurrentUser()
  if (user.value && (to.name === 'create' || to.name === 'login' || to.name === 'index')) {
    return navigateTo({
      path: '/dashboard'
    })
  }

  if (!user.value && to.fullPath.includes('dashboard')) {
    return navigateTo({
      path: '/login',
    })
  }
})
