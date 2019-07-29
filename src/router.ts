import Vue from "vue"
import Router, { RouterMode, RouterOptions } from "vue-router"

import Home from "./views/home.vue"

const Search = () =>
  import(/* webpackChunkName: "search" */ "./views/search.vue")

Vue.use(Router)

const options: RouterOptions = {
  mode: "history" as RouterMode,
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/search",
      name: "search",
      component: Search
    }
  ]
}

export default new Router(options)
