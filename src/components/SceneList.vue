<template>
  <transition-group
    name="fade"
    class="content"
    tag="div"
    appear
  >
    <CardList
      v-for="(entry, index) in entries"
      :key="index"
      :row="index"
      :title="entry.title"
      :items="entry.entry"
    />
  </transition-group>
</template>

<script>
import CardList from "~/src/components/CardList"
import { mapState } from "vuex"

export default {
  components: {
    CardList
  },
  computed: {
    ...mapState(["entries"])
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 auto;
}
</style>
