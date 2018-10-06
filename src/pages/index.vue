<template>
  <div id="top">
    <Navbar
      :menu-left="{icon: 'search', action: onSearch }"
      :menu-right="{icon: 'toggle-off', action: onToggle }"
      title="Yomu"
    />
    <SceneList />
    <Loading v-show="isLoading"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"

import Loading from "~/src/components/Loading"
import Navbar from "~/src/components/Navbar"
import SceneList from "~/src/components/SceneList"

export default {
  components: {
    Loading,
    Navbar,
    SceneList
  },
  computed: {
    ...mapState(["isLoading"]),
    ...mapGetters("feeds", ["currentFeeds"])
  },
  created() {
    this.load()
  },
  mounted() {},
  methods: {
    ...mapActions("feeds", ["initFeeds", "togglePrimary"]),
    ...mapActions("entries", ["updateEntries"]),
    async load() {
      await this.initFeeds()
      return this.updateEntries(this.currentFeeds)
    },
    onSearch() {
      this.$router.push("search")
    },
    onToggle() {
      this.togglePrimary()
      this.updateEntries(this.currentFeeds)
    }
  }
}
</script>

<style>
</style>
