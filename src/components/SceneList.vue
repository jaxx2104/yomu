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
      :key="index"
      :row="index"
      :title="entry.title"
      :items="entry.items"
    />
  </transition-group>
</template>

<script>
import CardList from "~/src/components/CardList"
import { mapState } from "vuex"

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
