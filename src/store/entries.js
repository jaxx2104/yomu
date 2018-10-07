import { get } from "~/src/services/feeds"
import { entries as formatEntries } from "~/src/services/format"
import * as types from "./types"

export const state = () => ({
  entries: [],
  select: null
})

export const getters = {
  isEntries: ({ entries }) => {
    return entries.length !== 0
  },
  currentEntry: ({ entries, select }) => {
    if (!select) return
    const { row, column } = select
    const entry = entries[row]
    if (!entry) return
    const item = entry.items[column]
    return item
  }
}

export const mutations = {
  [types.SET_SELECT](state, select) {
    state.select = select
  },
  [types.SET_ENTRIES](state, entries) {
    state.entries = entries
  }
}

export const actions = {
  setEntries({ commit }, entries) {
    commit(types.SET_ENTRIES, entries)
  },
  setSelect({ commit }, select) {
    commit(types.SET_SELECT, select)
  },
  async updateEntries({ commit }, currentFeeds) {
    commit(types.SET_LOADING, true, { root: true })
    const promiseList = (currentFeeds || []).map(({ url }) => get(url))
    try {
      let entries = await Promise.all(promiseList)
      entries = formatEntries(entries)
      commit(types.SET_ENTRIES, entries)
    } catch (e) {
      /* eslint-disable-next-line no-console */
      console.log(e)
    }
    commit(types.SET_LOADING, false, { root: true })
  }
}
