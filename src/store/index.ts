import Vue from "vue"
import Vuex, { StoreOptions, MutationTree } from "vuex"

import { entries } from "./entries"
import { feeds } from "./feeds"
import { search } from "./search"
import { RootState } from "./types"
import * as types from "./mutation-types"

Vue.use(Vuex)

const state: RootState = {
  isLoading: false
}
const getters = {}

const mutations: MutationTree<RootState> = {
  [types.SET_LOADING](state: RootState, isLoading: boolean) {
    state.isLoading = isLoading || !state.isLoading
  }
}

const actions = {}

export const store: StoreOptions<RootState> = {
  state,
  getters,
  mutations,
  actions,
  modules: {
    entries,
    feeds,
    search
  }
}

export default new Vuex.Store<RootState>(store)
