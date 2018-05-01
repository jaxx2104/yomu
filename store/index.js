import { formatEntries, pickEntries } from "~/services/entries"
import feeds from "~/assets/feeds.json"

export const state = () => ({
  isPrimary: true,
  entries: [],
  feeds: feeds
})

export const getters = {
  currentFeeds: ({ feeds, isPrimary }) => {
    return feeds[isPrimary ? 0 : 1]
  }
}

export const mutations = {
  SET_PRIMARY(state, isPrimary) {
    state.isPrimary = isPrimary
  },
  SET_ENTRIES(state, entries) {
    state.entries = entries
  },
  SET_FEEDS(state, feeds) {
    state.feeds = feeds
  }
}

export const actions = {
  togglePrimary({ commit }, isPrimary) {
    commit("SET_PRIMARY", !isPrimary)
  },
  setEntries({ commit }, entries) {
    entries = pickEntries(entries)
    entries = formatEntries(entries)
    commit("SET_ENTRIES", entries)
  },
  setFeeds({ commit }, feeds) {
    commit("SET_FEEDS", feeds)
  }
}
