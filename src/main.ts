import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import "./helpers/firebase"
import "./helpers/serviceworker"
import "./helpers/vue-fontawesome"
import "./helpers/vue-lazyload"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
