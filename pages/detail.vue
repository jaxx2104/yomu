<template>
  <div id="detail">
    <Navbar
      :menu-left="{icon: 'cancel', action: onCancel}"
      :menu-right="{icon: 'share', action: onShare}"
      title=""
    />
    <SceneDetail />
    <Loading v-show="isLoading"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

import Loading from "~/components/Loading"
import Navbar from "~/components/Navbar"
import SceneDetail from "~/components/SceneDetail"

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
    ...mapActions(["setSelected"]),

    onCancel() {
      this.setSelected(null)
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
