<template>
  <div id="top">
    <Navbar
      :menu-left="menuLeft"
      :menu-right="menuRight"
      :title="menuTitle"
    />
    <div class="scene">
      <SceneList />
      <SceneDetail
        v-if="select"
        @close="onCancel"
      />
    </div>
    <Loading v-show="isLoading"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"

import Loading from "~/src/components/Loading"
import Navbar from "~/src/components/Navbar"
import SceneList from "~/src/components/SceneList"
import SceneDetail from "~/src/components/SceneDetail"

export default {
  components: {
    Loading,
    Navbar,
    SceneDetail,
    SceneList
  },
  computed: {
    ...mapState(["isLoading"]),
    ...mapState("entries", ["select"]),
    ...mapGetters("feeds", ["currentFeeds"]),
    menuTitle() {
      return this.select ? "" : "Yomu"
    },
    menuLeft() {
      return this.select
        ? { icon: "times", action: this.onCancel }
        : { icon: "search", action: this.onSearch }
    },
    menuRight() {
      return this.select
        ? { icon: "share-square", action: this.onShare }
        : { icon: "toggle-off", action: this.onToggle }
    }
  },
  created() {
    this.load()
  },
  mounted() {},
  methods: {
    ...mapActions("feeds", ["initFeeds", "togglePrimary"]),
    ...mapActions("entries", ["updateEntries", "setSelect"]),

    async load() {
      await this.initFeeds()
      return this.updateEntries(this.currentFeeds)
    },
    onCancel() {
      this.setSelect(null)
    },
    onShare() {
      alert("In development 📦")
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

<style scoped>
.scene {
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: scroll;
}
</style>
