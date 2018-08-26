import { configure } from '@storybook/vue'

import Vue from 'vue'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'

Vue.use(Vuex)
Vue.use(VueLazyload)

const req = require.context('../src/components', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
