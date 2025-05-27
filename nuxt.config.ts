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

  app: {
    head: {
      script: [
        {
          type: 'text/javascript',
          innerHTML: `
            (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                window.voiceflow.chat.load({
                  verify: { projectID: '682c267b8dbed7819154fd9a' },
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production',
                });
              }
              v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `,
        },
      ],
    },
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
  nitro: {
    preset: 'cloudflare-pages',
  },
  fonts: {},
})
