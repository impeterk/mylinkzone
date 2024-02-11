// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "nuxt-vuefire",
  ],
  googleFonts: {
    families: {
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      "Fira+Code": {
        wght: [300, 400, 500, 600, 700],
      },
    },
    display: "swap",
  },
  vuefire: {
    auth: {
      enabled: true,
      sessionCookie: true,
      errorMap: 'debug',
      // disable the poupup redirect resolver dependency
      popupRedirectResolver: 'browser',
    },
    config: {
      apiKey: "AIzaSyAEHDXETOhuKe-AWLfPHCeaAD7CDUE_np8",
      authDomain: "mylinkzone.firebaseapp.com",
      databaseURL:
        "https://mylinkzone-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "mylinkzone",
      storageBucket: "mylinkzone.appspot.com",
      messagingSenderId: "27411252521",
      appId: "1:27411252521:web:d0eb6c6b5e6dba855d2338",
      measurementId: "G-JQ71CEWNJ3",
    },
  },
  runtimeConfig: {
    public: {
      // app: {
      //   baseURL: 'https://mylinkz.one'
      // }
    },
  },
});
