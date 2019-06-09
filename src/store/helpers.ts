import { mapState, mapGetters, mapActions } from "vuex"

export const commonComputed = {
  ...mapState(["isLoading"]),
  ...mapGetters("feeds", ["currentFeeds"])
}

export const commonActions = {
  ...mapActions("feeds", ["togglePrimary"]),
  ...mapActions("entries", ["updateEntries", "setSelect"])
}

export const homeComputed = {
  ...mapState(["isLoading"]),
  ...mapState("entries", ["select"]),
  ...mapGetters("feeds", ["currentFeeds"]),
  ...mapGetters("entries", {
    detail: "currentEntry"
  })
}

export const homeActions = {
  ...mapActions("feeds", ["initFeeds"]),
  ...mapActions("entries", ["updateEntries"])
}

export const searchComputed = {
  ...mapGetters("feeds", ["currentFeeds"]),
  ...mapGetters("search", ["isSearch"]),
  ...mapState("entries", ["isPrimary"]),
  ...mapState("feeds", ["feeds"]),
  ...mapState("search", ["queries"])
}

export const searchActions = {
  ...mapActions("feeds", ["initFeeds", "setFeeds"]),
  ...mapActions("search", ["setQueries", "updateQueries"])
}
