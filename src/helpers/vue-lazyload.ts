import Vue from "vue"
import VueLazyload from "vue-lazyload"
Vue.use(VueLazyload, {
  // preload: 10,
  // attempt: 3
  error: "/img/load.jpg",
  loading: "/img/load.jpg",
  observer: true,
  observerOptions: {
    rootMargin: "100px",
    threshold: 0.3
  }
})
