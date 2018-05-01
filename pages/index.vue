<template>
  <div id="inspire">
    <Navbar />
    <Content />
  </div>
</template>

<script>
// import qs from "queryString"
import { mapActions } from "vuex"

import Navbar from "~/components/Navbar"
import Content from "~/components/Content"
import data from "~/assets/data.json"

export default {
  components: {
    Content,
    Navbar
  },
  created() {
    this.load()
  },
  methods: {
    ...mapActions(["setRss"]),
    async load() {
      /*
      const baseUrl = "http://query.yahooapis.com/v1/public/yql?";
      const loadUrl = "http://www.theverge.com/rss/full.xml"
      const options = qs.stringify({
        q: `select * from xml where url in ('${loadUrl}')`,
        format: "json"
      });
      const url = `${baseUrl}${options}`
      const result = await this.$axios.$get(url)
      */
      const result = data
      const { title, entry, link } = result.query.results.feed
      this.setRss({ title, entry, link })
    }
  }
}
</script>

<style>
</style>
