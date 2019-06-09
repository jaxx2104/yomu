<template>
  <div id="home">
    <SceneList />
    <SceneDetail />
  </div>
</template>

<script>
import { homeComputed, homeActions } from "@/store/helpers.ts"
import SceneList from "@/components/SceneList.vue"
import SceneDetail from "@/components/SceneDetail.vue"

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
  mounted() {},
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
