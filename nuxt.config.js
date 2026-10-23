export default {
  target: 'static',
  loading: false,
  router: {
    base: process.env.NODE_ENV === 'production' ? '/about-me/' : '/',
    prefetchLinks: false,
  },
  generate: {
    fallback: true,
  },
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dmitriev dmitrii about',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // GitLab UI подключается до стилей сайта, чтобы собственные стили имели приоритет
  css: [
    'normalize.css/normalize.css',
    '@gitlab/ui/dist/index.css',
    '@gitlab/ui/dist/tailwind.css',
    '@/assets/css/index.css',
  ],

  // https://image.nuxtjs.org/
  image: {
    dir: 'static/img/',
    staticFilename: 'img/[name]-[hash][ext]',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: ['@plugins/phone.js'],
  plugins: ['~/plugins/gitlab-ui.js'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/image'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    '@nuxt/image',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // @gitlab/ui поставляется как ES-модули с современным синтаксисом — webpack 4 нужна транспиляция
    transpile: ['@gitlab/ui', 'lodash-es', 'gridstack'],
  },
}
