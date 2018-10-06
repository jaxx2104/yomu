import * as types from "./types"
import defaultFeeds from "~/src/assets/feeds.json"
import storage from "~/src/services/storage"

export const state = () => ({
  isPrimary: true,
  feeds: []
})

export const getters = {
  currentFeeds: ({ feeds, isPrimary }) => {
    if (!feeds) return
    return feeds[isPrimary ? 0 : 1]
  }
}

export const mutations = {
  [types.SET_PRIMARY](state) {
    state.isPrimary = !state.isPrimary
  },
  [types.SET_FEEDS](state, { feeds }) {
    state.feeds = feeds
  }
}

export const actions = {
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
