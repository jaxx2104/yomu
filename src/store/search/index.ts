import { Module, GetterTree, MutationTree, ActionTree } from "vuex"

import { RootState } from "../types"
import { search as fetchSearch } from "../../helpers/feeds"
import { search as formatSearch } from "../../helpers/format"
import { State } from "./types"
import * as types from "../mutation-types"

const state: State = {
  queries: []
}

const getters: GetterTree<State, RootState> = {
  isSearch: ({ queries }) => {
    return queries.length !== 0
  }
}

const mutations: MutationTree<State> = {
  [types.SET_QUERY](state, queries) {
    state.queries = [...queries]
  }
}

const actions: ActionTree<State, RootState> = {
  setQueries({ commit }, queries) {
    commit(types.SET_QUERY, queries)
  },
  async updateQueries({ commit }, query) {
    commit(types.SET_LOADING, true, { root: true })
    try {
      const searchResults = await fetchSearch(query)
      const formatResults = formatSearch(searchResults)
      commit(types.SET_QUERY, formatResults)
    } catch (e) {
      /* eslint-disable-next-line no-console */
      console.log(e)
      commit(types.SET_LOADING, false, { root: true })
    }
    commit(types.SET_LOADING, false, { root: true })
  }
}

export const search: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
