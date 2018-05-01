import Vue from "vue"
import VueLazyload from "vue-lazyload"
Vue.use(VueLazyload, {
  preload: 10,
  error: "load.jpg",
  loading: "load.jpg",
  attempt: 3
})
