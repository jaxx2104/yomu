<template>
  <div id="inspire">
    <Navbar />
    <Content />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

import Navbar from "~/components/Navbar"
import Content from "~/components/Content"
import { getFeed, getFeedDummy } from "~/services/feeds"

export default {
  components: {
    Content,
    Navbar
  },
  computed: {
    ...mapGetters(["currentFeeds"])
  },
  created() {
    this.load()
  },
  methods: {
    ...mapActions(["setEntries", "setFeeds"]),
    async load() {
      const promiseList = this.currentFeeds.map(
        ({ url }) =>
          process.env.DEBUG !== true
            ? getFeed(this.$axios, url)
            : getFeedDummy()
      )
      const entries = await Promise.all(promiseList)
      this.setEntries(entries)
    }
  }
}
</script>

<style>
</style>
