import Vue from "vue"
import Router from "vue-router"
import Home from "./views/home.vue"

const Search = () =>
  import(/* webpackChunkName: "search" */ "./views/search.vue")

Vue.use(Router)

export default new Router({
  mode: "history",
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
})
