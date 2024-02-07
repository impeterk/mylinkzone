// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxt/image", "@nuxt/ui", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Inter: {
      wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
      "Fira+Code": {
        wght: [300, 400, 500, 600, 700]
      }
    },
    display: "swap",
  },
});
