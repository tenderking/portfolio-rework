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

  modules: [
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxt/image",
  ],

  css: ["@/assets/css/base.css", "@/assets/css/utils.css"],

  compatibilityDate: "2025-01-23",

  // Add Vite configuration to handle source maps for WASM files
  vite: {
    build: {
      sourcemap: false, // Disable source maps in production builds
    },
    optimizeDeps: {
      exclude: ['@sqlite.org/sqlite-wasm'], // Exclude SQLite WASM from optimization
    },
    // Adjust how Nuxt handles source maps for WebAssembly files
    worker: {
      format: 'es', // Use ES modules format
      plugins: []
    }
  },

  // Configure Content module
  content: {
    // Disable source maps for the content module
    experimental: {
      stripQueryParameters: true
    }
  }
})