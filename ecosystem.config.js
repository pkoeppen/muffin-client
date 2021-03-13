module.exports = {
  apps: [
    {
      name: 'muffin-client',
      exec_mode: 'cluster',
      instances: 1,
      maxMemoryRestart: '512M',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      watch: false,
    },
  ],
};
