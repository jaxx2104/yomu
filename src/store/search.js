import { search } from "~/src/services/feeds"
import { search as formatSearch } from "~/src/services/format"
import * as types from "./types"

export const state = () => ({
  queries: []
})

export const getters = {
  isSearch: ({ queries }) => {
    return queries.length !== 0
  }
}

export const mutations = {
  [types.SET_QUERY](state, queries) {
    state.queries = [...queries]
  }
}

export const actions = {
  setQueries({ commit }, queries) {
    commit(types.SET_QUERY, queries)
  },
  async updateQueries({ commit }, query) {
    commit(types.SET_LOADING, true, { root: true })
    try {
      let queries = await search(query)
      queries = formatSearch(queries)
      commit(types.SET_QUERY, queries)
    } catch (e) {
      /* eslint-disable-next-line no-console */
      console.log(e)
    }
    commit(types.SET_LOADING, false, { root: true })
  }
}
