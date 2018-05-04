<template>
  <div id="top">
    <Navbar
      :menu-left="{icon: 'search', action: onSearch }"
      :menu-right="{icon: 'toggle', action: onToggle }"
      title="Yomu"
    />
    <SceneList />
    <Loading v-show="isLoading"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"

import Loading from "~/components/Loading"
import Navbar from "~/components/Navbar"
import SceneList from "~/components/SceneList"

export default {
  components: {
    Loading,
    Navbar,
    SceneList
  },
  computed: {
    ...mapState(["isLoading"]),
    ...mapGetters(["currentFeeds"])
  },
  created() {
    this.load()
  },
  mounted() {},
  methods: {
    ...mapActions(["togglePrimary", "updateEntries"]),
    load() {
      return this.updateEntries(this.currentFeeds)
    },
    onSearch() {
      alert("In development 📦")
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
