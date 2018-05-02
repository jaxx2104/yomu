<template>
  <div id="inspire">
    <Navbar />
    <Content />
    <Loading v-show="isLoading"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"

import Content from "~/components/Content"
import Loading from "~/components/Loading"
import Navbar from "~/components/Navbar"

export default {
  components: {
    Content,
    Navbar,
    Loading
  },
  computed: {
    ...mapState(["isLoading"]),
    ...mapGetters(["currentFeeds", "countEntries"])
  },
  created() {
    this.setLoading(true)
    this.load().then(() => {
      this.setLoading(false)
    })
  },
  mounted() {},
  methods: {
    ...mapActions(["updateEntries", "setEntries", "setFeeds", "setLoading"]),
    load() {
      return this.updateEntries(this.currentFeeds)
    }
  }
}
</script>

<style>
</style>
