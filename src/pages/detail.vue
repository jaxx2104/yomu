<template>
  <div id="detail">
    <Navbar
      :menu-left="{icon: 'times', action: onCancel}"
      :menu-right="{icon: 'share-square', action: onShare}"
      title=""
    />
    <SceneDetail />
    <Loading v-show="isLoading"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

import Loading from "~/src/components/Loading"
import Navbar from "~/src/components/Navbar"
import SceneDetail from "~/src/components/SceneDetail"

export default {
  components: {
    Loading,
    Navbar,
    SceneDetail
  },
  computed: {
    ...mapState(["isLoading"])
  },
  methods: {
    ...mapActions("entries", ["setSelect"]),

    onCancel() {
      this.setSelect(null)
      this.$router.push("/")
    },

    onShare() {
      alert("In development 📦")
    }
  }
}
</script>

<style scoped>
</style>
