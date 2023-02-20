// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/strapi'],
  css: ['~/assets/css/main.scss'],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
  runtimeConfig: {
    // Private config that is only available on the server
    apiBase: 'http://localhost:1337',
    // Config within public will be also exposed to the client
  },
})
