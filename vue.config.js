module.exports = {
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
