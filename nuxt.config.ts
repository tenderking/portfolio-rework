// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", '@nuxt/content'],
  css: [
    // CSS file in the project
    "@/assets/css/base.css",
    "@/assets/css/utils.css",
    // SCSS file in the project  '@/assets/css/main.scss'
  ],
});
