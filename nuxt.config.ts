// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src',
  css: ['~/assets/css/ui.css'],
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/i18n', '@nuxt/ui'],
  colorMode: {
    preference: 'light',
  },
  i18n: {
    defaultLocale: 'sl',
    locales: [{ code: 'sl', name: 'Slovenian', file: 'sl.ts' }],
  },
})
