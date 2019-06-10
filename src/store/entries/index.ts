import { GetterTree, MutationTree, ActionTree, Module } from "vuex"
import sanitize from "sanitize-html"

import { entries as formatEntries } from "@/helpers/format"
import { fetch } from "@/helpers/feeds"
import { FetchResults } from "@/helpers/interface/feeds"
import { RootState } from "../types"
import { State, Feed } from "./types"
import * as types from "../mutation-types"

const state: State = {
  entries: [],
  select: null
}

const getters: GetterTree<State, RootState> = {
  isEntries: ({ entries }) => {
    return entries.length !== 0
  },
  currentEntry: ({ entries, select }) => {
    if (!select) return null
    const { row, column } = select
    return entries[row].items[column]
  },
  currentThumb: (_, { currentEntry }) => {
    return currentEntry ? currentEntry.image : ""
  },
  currentContent: (_, { currentEntry }) => {
    const content = currentEntry ? currentEntry.content : ""
    const options = {
      allowedTags: ["p", "a", "img"],
      allowedAttributes: { a: ["href"], img: ["src"] },
      allowedIframeHostnames: ["www.youtube.com"]
    }
    const clean = sanitize(content, options)
    return clean
  }
}

const mutations: MutationTree<State> = {
  [types.SET_SELECT](state, select) {
    state.select = select
  },
  [types.SET_ENTRIES](state, entries) {
    state.entries = entries
  }
}

const actions: ActionTree<State, RootState> = {
  setEntries({ commit }, entries) {
    commit(types.SET_ENTRIES, entries)
  },
  setSelect({ commit }, select) {
    commit(types.SET_SELECT, select)
  },
  async updateEntries({ commit }, currentFeeds: Feed[]) {
    commit(types.SET_LOADING, true, { root: true })
    const promiseList = (currentFeeds || []).map(({ url }) => fetch(url))
    try {
      const entries: FetchResults[] = await Promise.all(promiseList)
      commit(types.SET_ENTRIES, formatEntries(entries))
    } catch (e) {
      /* eslint-disable-next-line no-console */
      console.log(e)
      commit(types.SET_LOADING, false, { root: true })
    }
    commit(types.SET_LOADING, false, { root: true })
  }
}

export const entries: Module<State, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
