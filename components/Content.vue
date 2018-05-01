<template>
  <div class="content">
    <CardList
      :title="rss.title"
      :items="rss.entry"
    />
    <CardList
      :title="rss.title"
      :items="rss.entry"
    />
    <CardList
      :title="rss.title"
      :items="rss.entry"
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
    ...mapState(["rss"])
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
