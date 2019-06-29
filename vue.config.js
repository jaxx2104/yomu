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
          urlPattern: /.*firebase.*/,
          handler: "networkFirst",
          options: {
            cacheName: "api"
          }
        },
        {
          urlPattern: /\.(png|svg|jpg|gif|svg|woff|ttf|eot)/,
          handler: "cacheFirst",
          options: {
            cacheName: "assets",
            cacheExpiration: {
              maxAgeSeconds: 86400 * 7,
              maxEntries: 1000
            }
          }
        }
      ]
    }
  },
  lintOnSave: false
}
