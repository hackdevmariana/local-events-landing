// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@sidebase/nuxt-auth',
    '@nuxt/content',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxt/ui',
  ],



  // Configuración de PWA
  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },

  // Configuración de UI
  ui: {
    icons: ['heroicons'],
  },

  // Configuración de ESLint
  eslint: {
    config: {
      extends: ['@nuxt/eslint-config'],
    },
  },

  // Configuración de Content
  content: {
    highlight: {
      theme: 'github-dark',
    },
  },

  // Configuración de Pinia
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },

  app: {
    head: {
      title: 'Local events landing',
      meta: [{ name: 'description', content: 'Local events landing' }],
    },
  },

  // Configuración de build
  build: {
    transpile: ['@headlessui/vue'],
  },

  // Configuración de runtime
  runtimeConfig: {
    public: {
      // Variables públicas aquí
    },
    // Variables privadas aquí
  },
})