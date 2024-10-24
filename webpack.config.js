const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  // ... outras configurações
  plugins: [
    // ... outros plugins
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: './src/service-worker.ts', // seu arquivo de Service Worker
    }),
  ],
};
