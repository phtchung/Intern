
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'week1',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-tooltip.js',  '~/plugins/vuelidate.js'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/i18n',
  ],axios: {
    // Cấu hình các tùy chọn của axios
  },i18n: {
    /* module options */
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file:"en.json",
      },
      {
        code: 'vi',
        iso: 'vi',
        name: 'Tiếng Việt',
        file:"vi.json",

      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    },
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-tooltip']
  }
}
