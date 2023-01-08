// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  modules: [
    "@vueuse/nuxt",
    '@nuxt/content',
    'nuxt-icons'
  ],

  css: [
    "@/assets/css/base.css",
    // "@/assets/css/utils.css",
  ],

  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)  
        default: 'github-light',
      }
    }
  }

});
