module.exports = {
  apps: [
    {
      name: 'muffin-client',
      instances: 1,
      maxMemoryRestart: '512M',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
};
