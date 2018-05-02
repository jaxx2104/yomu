module.exports = {
  env: {
    DEBUG_MODE: process.env.DEBUG_MODE || false
  },

  /*
  ** Headers of the page
  */
  head: {
    title: "yomu",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-startup-image", href: "/icon.png" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#E91E63" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],
  manifest: {
    name: "yomu",
    lang: "ja"
  },
  meta: {
    mobileAppIOS: true,
    appleStatusBarStyle: "default"
  },
  plugins: ["~/plugins/vue-lazyload"]
}
