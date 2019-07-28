<template>
  <div id="home">
    <SceneList />
    <SceneDetail />
  </div>
</template>

<script>
import { homeComputed, homeActions } from "../store/helpers"
import SceneList from "../components/SceneList.vue"
import SceneDetail from "../components/SceneDetail.vue"

export default {
  components: {
    SceneDetail,
    SceneList
  },
  computed: {
    ...homeComputed
  },
  created() {
    this.load()
  },
  mounted() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  },
  methods: {
    ...homeActions,
    async load() {
      await this.initFeeds()
      return this.updateEntries(this.currentFeeds)
    }
  }
}
</script>

<style scoped></style>
