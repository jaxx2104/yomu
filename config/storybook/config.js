/* eslint-disable import/no-extraneous-dependencies */
import { configure } from "@storybook/vue"
import Vue from "vue"
import Vuex from "vuex"
import VueLazyload from "vue-lazyload"

import "../../src/helpers/vue-fontawesome"

Vue.use(Vuex)
Vue.use(VueLazyload)

const req = require.context("../../src/stories", true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
