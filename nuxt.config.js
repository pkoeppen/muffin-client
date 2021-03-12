export default {
  env: {
    STRIPE_API_KEY: 'pk_test_6sCcqrw2FLodj7pYVC2zH3ai',
  },
  head: {
    title: 'Maus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [
    '~/plugins/init',
    '~/plugins/catch',
    '~/plugins/auth',
    '~/plugins/events',
  ],
  loading: {
    color: '#10b981',
    height: '4px',
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/recaptcha'],
  recaptcha: {
    hideBadge: false,
    siteKey:
      '6LcD-tcUAAAAAGDzZoPmqTrPkXLQgixHGIWhc5v1' ||
      process.env.RECAPTCHA_PUBLIC_KEY, // todo
    version: 3,
  },
  axios: {
    baseURL: 'http://localhost:3001',
    credentials: true,
    init(axios) {
      axios.defaults.withCredentials = true;
    },
  },
  content: {},
  build: {},
};
