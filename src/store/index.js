import { getFeed, getFeedDummy } from "~/src/services/feeds"
import { formatEntries } from "~/src/services/entries"
import feeds from "~/src/assets/feeds.json"

export const state = () => ({
  entries: [],
  feeds: feeds,
  isLoading: false,
  isPrimary: true,
  selected: null
})

export const getters = {
  countEntries: ({ entries }) => {
    return entries.length === 0
  },
  currentFeeds: ({ feeds, isPrimary }) => {
    return feeds[isPrimary ? 0 : 1]
  },
  currentEntry: ({ entries, selected }) => {
    return selected ? entries[selected.row].entry[selected.column] : null
  }
}

export const mutations = {
  SET_PRIMARY(state, isPrimary) {
    state.isPrimary = isPrimary || !state.isPrimary
  },
  SET_LOADING(state, isLoading) {
    state.isLoading = isLoading || !state.isLoading
  },
  SET_SELECTED(state, selected) {
    state.selected = selected
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
  setSelected({ commit }, selected) {
    commit("SET_SELECTED", selected)
  },
  async updateEntries({ commit }, currentFeeds) {
    commit("SET_LOADING", true)
    const promiseList = currentFeeds.map(
      ({ url }) => (process.env.DEBUG_MODE ? getFeedDummy() : getFeed(url))
    )
    try {
      let entries = await Promise.all(promiseList)
      entries = formatEntries(entries)
      commit("SET_ENTRIES", entries)
    } catch (e) {
      /* eslint-disable-next-line no-console */
      console.log(e)
    }
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
