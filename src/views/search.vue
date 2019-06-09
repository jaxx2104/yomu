<template>
  <Layout>
    <Searchbar @search="onSearch" @cancel="onCancel" />
    <Draggable
      v-model="list"
      handle=".sort"
      class="list"
      @start="drag = true"
      @end="drag = false"
    >
      <transition-group name="fade" appear>
        <ListItem
          v-for="(item, index) in list"
          :desc="item.url"
          :index="index"
          :is-edit="!isSearch"
          :key="index + 1"
          :title="item.title"
          @select="onAdd"
          @delete="onRemove"
        />
      </transition-group>
    </Draggable>
  </Layout>
</template>

<script>
import Draggable from "vuedraggable"

import { searchComputed, searchActions } from "@/store/helpers.ts"
import ListItem from "@/components/ListItem.vue"
import Searchbar from "@/components/Searchbar.vue"
import Layout from "@/components/Layout.vue"

export default {
  components: {
    Draggable,
    ListItem,
    Layout,
    Searchbar
  },
  data() {
    return {}
  },
  computed: {
    ...searchComputed,
    list: {
      get() {
        return this.isSearch ? this.queries : this.currentFeeds
      },
      set(sortFeeds) {
        /* eslint-disable-next-line no-console */
        console.log(sortFeeds)
        const [mainFeeds, subFeeds] = this.feeds
        const feeds = this.isPrimary
          ? [[...sortFeeds], [...subFeeds]]
          : [[...mainFeeds], [...sortFeeds]]
        this.setFeeds({ feeds })
      }
    }
  },
  created() {
    this.load()
  },
  methods: {
    ...searchActions,

    async load() {
      await this.initFeeds()
    },
    onRemove(index) {
      const [mainFeeds, subFeeds] = this.feeds
      const feeds = this.isPrimary
        ? [[...mainFeeds.filter((_, i) => i !== index)], [...subFeeds]]
        : [[...mainFeeds], [...subFeeds.filter((_, i) => i !== index)]]
      this.setFeeds({ feeds })
    },
    onCancel() {
      this.setQueries([])
    },
    onAdd(index) {
      if (!this.isSearch) return
      const search = this.queries[index]
      const [mainFeeds, subFeeds] = this.feeds
      const feeds = this.isPrimary
        ? [[...mainFeeds, search], [...subFeeds]]
        : [[...mainFeeds], [...subFeeds, search]]
      this.setFeeds({ feeds })
      this.onCancel()
    },
    onSearch(query) {
      if (!query) {
        this.setQueries([])
      } else {
        this.updateQueries(query)
      }
    }
  }
}
</script>

<style scoped></style>
