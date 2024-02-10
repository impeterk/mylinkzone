export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await useCurrentUser()
  if (user && to.path == '/create') {
    return
  }

  if (!user.value && to.fullPath.includes('dashboard')) {
    return navigateTo({
      path: '/login',
    })
  }
})
