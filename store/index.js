import { getFeed, getFeedDummy } from "~/services/feeds"
import { formatEntries } from "~/services/entries"
import feeds from "~/assets/feeds.json"

export const state = () => ({
  isPrimary: true,
  isLoading: false,
  entries: [],
  feeds: feeds
})

export const getters = {
  isLoadEntries: ({ entries }) => {
    return entries.length === 0
  },
  currentFeeds: ({ feeds, isPrimary }) => {
    return feeds[isPrimary ? 0 : 1]
  }
}

export const mutations = {
  SET_PRIMARY(state, isPrimary) {
    state.isPrimary = isPrimary || !state.isPrimary
  },
  SET_LOADING(state, isLoading) {
    state.isLoading = isLoading || !state.isLoading
  },
  SET_ENTRIES(state, entries) {
    state.entries = entries
  },
  SET_FEEDS(state, feeds) {
    state.feeds = feeds
  }
}

export const actions = {
  togglePrimary({ commit }) {
    commit("SET_PRIMARY")
  },
  setLoading({ commit }, isLoading) {
    commit("SET_LOADING", isLoading)
  },
  async updateEntries({ commit }, currentFeeds) {
    commit("SET_LOADING", true)
    const promiseList = currentFeeds.map(
      ({ url }) => (process.env.DEBUG_MODE ? getFeedDummy() : getFeed(url))
    )
    let entries = await Promise.all(promiseList)
    entries = formatEntries(entries)
    commit("SET_ENTRIES", entries)
    commit("SET_LOADING", false)
  },
  setEntries({ commit }, entries) {
    entries = formatEntries(entries)
    commit("SET_ENTRIES", entries)
  },
  setFeeds({ commit }, feeds) {
    commit("SET_FEEDS", feeds)
  }
}
