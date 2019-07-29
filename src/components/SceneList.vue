<template>
  <transition-group
    v-if="entries.length"
    name="fade"
    class="scene-list"
    tag="div"
    appear
  >
    <CardList
      v-for="(entry, index) in entries"
      :key="index + 1"
      :row="index"
      :title="entry.title"
      :items="entry.items"
    />
  </transition-group>
</template>

<script>
import { mapState } from "vuex"

import CardList from "./CardList.vue"

export default {
  name: "SceneList",
  components: {
    CardList
  },
  computed: {
    ...mapState("entries", ["entries"])
  }
}
</script>

<style>
.scene-list {
  height: 100%;
}
</style>
