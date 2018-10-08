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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/pwacompat@2.0.6/pwacompat.min.js",
        integrity:
          "sha384-GOaSLecPIMCJksN83HLuYf9FToOiQ2Df0+0ntv7ey8zjUHESXhthwvq9hXAZTifA",
        crossorigin: "anonymous"
      }
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
    babel: {
      plugins: ["root-import"]
    },
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
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/localforage",
    "@nuxtjs/proxy",
    "@nuxtjs/pwa",
    "@nuxtjs/sentry"
  ],
  manifest: {
    name: "yomu",
    lang: "ja"
  },
  meta: {
    mobileAppIOS: true,
    appleStatusBarStyle: "default"
  },
  proxy: {
    "/api": {
      target: "http://cloud.feedly.com",
      pathRewrite: { "^/api": "" }
    }
  },
  plugins: ["~/plugins/vue-fontawesome", "~/plugins/vue-lazyload"],
  sentry: {
    dsn:
      process.env.NODE_ENV === "production"
        ? "https://00d0e618cb21449ba08d70198c2544e1@sentry.io/1214387"
        : ""
  },
  srcDir: "src"
}
