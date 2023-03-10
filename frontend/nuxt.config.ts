// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  runtimeConfig: {
    public: {
      strapiToken: process.env.STRAPI_API_TOKEN,
      strapiAssetsURL: process.env.STRAPI_URL || 'http://localhost:1337',
    },
  },
  modules: ['@nuxtjs/strapi'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },
})
