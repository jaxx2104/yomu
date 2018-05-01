<template>
  <div class="content">
    <CardList
      v-for="(entry, index) in entries"
      :key="index"
      :title="entry.title"
      :items="entry.entry"
    />
  </div>
</template>

<script>
import CardList from "~/components/CardList"
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
