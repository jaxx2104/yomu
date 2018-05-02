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
      {
        rel: "apple-touch-startup-image",
        href: "/images/splash/launch-640x1136.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "/images/splash/launch-750x1294.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "/images/splash/launch-1242x2148.png",
        media:
          "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "/images/splash/launch-1125x2436.png",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "/images/splash/launch-1536x2048.png",
        media:
          "(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "/images/splash/launch-1668x2224.png",
        media:
          "(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "/images/splash/launch-2048x2732.png",
        media:
          "(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
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
