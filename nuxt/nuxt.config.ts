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
    public: {
      // default or private useRuntimeConfig will return undefined after changing the route by NuxtLink ... it works only on the first page load or refresh.
      // Private config only available on the server...
      apiBase: '',
      // Config within public will be also exposed to the client
    }

  },
})
