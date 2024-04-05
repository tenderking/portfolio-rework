// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // app: {
  //   pageTransition: {
  //     name: "fade",
  //     mode: "out-in", // default
  //   },
  //   // layoutTransition: {
  //   //   name: "slide",
  //   //   mode: "out-in", // default
  //   // },
  // },

  modules: ["@vueuse/nuxt", "@nuxt/content", "nuxt-icons"],

  css: ["@/assets/css/base.css", "@/assets/css/utils.css"],

  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: "github-dark",
      },
    },
  },
})
