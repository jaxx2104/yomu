const path = require("path")

const configureWebpack = require("./webpack.config")

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
          handler: "cacheFirst",
          options: {
            cacheName: "api",
            expiration: {
              maxAgeSeconds: 60 * 60 * 1
            }
          }
        },
        {
          urlPattern: /\.(png|gif|jpg|jpeg|svg)/,
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
