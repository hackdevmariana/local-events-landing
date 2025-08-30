// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/eslint'],
  app: {
    head: {
      title: 'Local events landing',
      meta: [{ name: 'description', content: 'Local events landing' }],
    },
  },
})
