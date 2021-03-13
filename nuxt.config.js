export default {
  env: {
    STRIPE_API_KEY:
      process.env.NODE_ENV === 'production'
        ? 'pk_live_y0PzykXKvY30Xx7fTPh4dpbH'
        : 'pk_test_6sCcqrw2FLodj7pYVC2zH3ai',
  },
  head: {
    title: 'Muffin Quest - Gourmet Muffin Delivery',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'apple-mobile-web-app-title',
        property: 'apple-mobile-web-app-title',
        content: 'Muffin Quest',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Muffin Quest',
      },
      { hid: 'og:title', property: 'og:title', content: 'Muffin Quest' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Delicious, homemade muffin delivery.',
      },
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
    height: '3px',
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://api.muffin.quest'
        : 'http://localhost:3002',
    credentials: true,
    init(axios) {
      axios.defaults.withCredentials = true;
    },
  },
  content: {},
  build: {},
};
