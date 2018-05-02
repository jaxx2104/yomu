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
    ...mapActions(["updateEntries", "setEntries", "setFeeds"]),
    load() {
      this.updateEntries(this.currentFeeds)
    }
  }
}
</script>

<style>
</style>
