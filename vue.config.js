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
  lintOnSave: false
}
