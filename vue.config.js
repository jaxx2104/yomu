const configureWebpack = require("./webpack.config")
const path = require("path")

module.exports = {
  configureWebpack,
  devServer: {
    proxy: {
      "/api": {
        target: "http://cloud.feedly.com",
        pathRewrite: { "^/api": "" },
        changeOrigin: true
      }
    }
  },
  pwa: {
    // configure the workbox plugin
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      swDest: path.join(__dirname, "/dist/service-worker.js"),
      globDirectory: path.join(__dirname, "/dist/"),
      globPatterns: [
        "*.{html,js,css}",
        "images/**/*.{jpg,jpeg,png,gif,webp,svg}"
      ],
      runtimeCaching: [
        {
          urlPattern: /api/,
          handler: "networkFirst",
          options: {
            cacheName: "api"
          }
        },
        {
          urlPattern: /.+\.(png|gif|jpg|jpeg|svg)$/,
          handler: "cacheFirst",
          options: {
            cacheName: "assets",
            expiration: {
              maxAgeSeconds: 60 * 60 * 24 * 30
            }
          }
        }
      ]
    }
  },
  lintOnSave: false
}
