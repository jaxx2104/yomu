import { GetterTree, MutationTree, ActionTree, Module } from "vuex"

import { RootState } from "../types"
import { State } from "./types"
import * as types from "../mutation-types"
import defaultFeeds from "../../assets/feeds.json"
import storage from "../../helpers/storage"

const state: State = {
  isPrimary: true,
  feeds: []
}

const getters: GetterTree<State, RootState> = {
  currentFeeds: ({ feeds, isPrimary }) => {
    if (!feeds) return
    return feeds[+isPrimary]
  }
}

const mutations: MutationTree<State> = {
  [types.SET_PRIMARY](state) {
    state.isPrimary = !state.isPrimary
  },
  [types.SET_FEEDS](state, { feeds }) {
    state.feeds = feeds
  }
}

const actions: ActionTree<State, RootState> = {
  async initFeeds({ commit }) {
    const feeds = (await storage.getItem("feeds")) || defaultFeeds
    commit(types.SET_FEEDS, { feeds })
    await storage.setItem("feeds", feeds)
  },
  async setFeeds({ commit }, { feeds }) {
    commit(types.SET_FEEDS, { feeds })
    await storage.setItem("feeds", feeds)
  },
  togglePrimary({ commit }) {
    commit(types.SET_PRIMARY)
  }
}

export const feeds: Module<State, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
