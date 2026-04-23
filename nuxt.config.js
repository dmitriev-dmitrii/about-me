export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dmitriev-dmitrii portfolio',
    htmlAttrs: {
      lang: 'ru',

    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/gitlab-ui.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    '@/assets/scss/index.scss',
  ],

  plugins: [
    { src: '@/plugins/gitlab-ui', mode: 'client' }
  ],

  // https://image.nuxtjs.org/
  image: {
    dir: 'static/img/',
    staticFilename: 'img/[name]-[hash][ext]'
  },

  // https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: [
        '@/assets/scss/settings/vars.scss',
        // пушиться в каждый компонент поэтому импортируем отдельно
    ]
},
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: ['@plugins/phone.js'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    '@nuxt/image',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend (config) {
      config.resolve.alias['@gitlab/ui'] = '@gitlab/ui/dist'
      config.resolve.alias['@gitlab/ui/components'] = '@gitlab/ui/dist/components'
    }
  }
}
