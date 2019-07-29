import { configure } from "@storybook/vue"
import Vue from "vue"
import Vuex from "vuex"

import "../../src/helpers/vue-lazyload"
import "../../src/helpers/vue-fontawesome"

Vue.use(Vuex)

const req = require.context("../../src/stories", true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
