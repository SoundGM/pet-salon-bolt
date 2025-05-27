// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src',

  // Deployment
  // target: 'static',
  ssr: false,
  css: ['~/assets/css/ui.css'],
   modules: [
     '@nuxt/eslint',
     '@nuxt/image',
     '@nuxtjs/i18n',
     '@nuxt/ui',
     '@vueuse/motion/nuxt',
     '@nuxthub/core',
   ],
  colorMode: {
    preference: 'light',
  },
  i18n: {
    defaultLocale: 'sl',
    locales: [{ code: 'sl', name: 'Slovenian', file: 'sl.ts' }],
  },

  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'info',
        'neutral',
        'pink-red',
        'green-light',
        'orange-shine',
        'blue-sea',
      ],
    },
  },
  fonts: {},
})