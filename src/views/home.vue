<template>
  <!-- <Navbar :menu-left="menuLeft" :menu-right="menuRight" :title="menuTitle" /> -->
  <Layout>
    <SceneList />
    <SceneDetail v-if="select" />
  </Layout>
</template>

<script>
import { homeComputed, homeActions } from "@/store/helpers.ts"
import SceneList from "@/components/SceneList.vue"
import SceneDetail from "@/components/SceneDetail.vue"
import Layout from "@/components/Layout.vue"

export default {
  components: {
    Layout,
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

<style scoped>
.scene {
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: scroll;
}
</style>
