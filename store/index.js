import { getFeed, getFeedDummy } from "~/services/feeds"
import { formatEntries } from "~/services/entries"
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
  async updateEntries({ commit }, currentFeeds) {
    /* eslint-disable */
    console.log(process.env.DEBUG_MODE)
    const promiseList = currentFeeds.map(
      ({ url }) => (process.env.DEBUG_MODE ? getFeedDummy() : getFeed(url))
    )
    let entries = await Promise.all(promiseList)
    entries = formatEntries(entries)
    commit("SET_ENTRIES", entries)
  },
  setEntries({ commit }, entries) {
    entries = formatEntries(entries)
    commit("SET_ENTRIES", entries)
  },
  setFeeds({ commit }, feeds) {
    commit("SET_FEEDS", feeds)
  }
}
