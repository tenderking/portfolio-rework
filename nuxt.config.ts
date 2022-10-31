// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  modules: ["@vueuse/nuxt", '@nuxt/content', 'nuxt-icons'],

  css: [
    // CSS file in the project
    "@/assets/css/base.css",
    "@/assets/css/utils.css",
    // SCSS file in the project  '@/assets/css/main.scss'
  ],

  content: {
    navigation: { fields: ['author', 'publishedAt'] },
    markdown: {
      toc: {
        depth: 2,
        searchDepth: 2
      },
      anchorLinks: true,

    },
    highlight: {
      theme: {
        // Default theme (same as single string)  
        default: 'github-light',
        // Theme used if `html.dark`    
        dark: 'github-dark',
        // Theme used if `html.sepia`      
        sepia: 'monokai'
      }
    }


  }

});
