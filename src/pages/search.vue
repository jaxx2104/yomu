<template>
  <div id="detail">
    <Navbar
      :menu-left="{icon: 'times', action: onClose}"
      title=""
    />
    <div class="scene">
      <Searchbar
        @search="onSearch"
        @cancel="onCancel"
      />
      <Draggable
        v-model="list"
        :options="{handle:'.sort'}"
        class="list"
        @start="drag=true"
        @end="drag=false">
        <transition-group name="fade">
          <ListItem
            v-for="(item, index) in list"
            :desc="item.url"
            :index="index"
            :is-edit="!isSearch"
            :key="index"
            :title="item.title"
            @select="onAdd"
            @delete="onRemove"
          />
        </transition-group>
      </Draggable>
    </div>
    <Loading v-show="isLoading"/>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex"
import Draggable from "vuedraggable"
import Icon from "~/src/components/Icon"
import ListItem from "~/src/components/ListItem"
import Loading from "~/src/components/Loading"
import Navbar from "~/src/components/Navbar"
import Searchbar from "~/src/components/Searchbar"

export default {
  components: {
    Draggable,
    Icon,
    ListItem,
    Loading,
    Navbar,
    Searchbar
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters("feeds", ["currentFeeds"]),
    ...mapGetters("search", ["isSearch"]),
    ...mapState("entries", ["isPrimary"]),
    ...mapState("feeds", ["feeds"]),
    ...mapState("search", ["queries"]),
    ...mapState(["isLoading"]),
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
    ...mapActions("entries", ["setSelect"]),
    ...mapActions("feeds", ["initFeeds", "setFeeds"]),
    ...mapActions("search", ["setQueries", "updateQueries"]),

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
    onClose() {
      this.setSelect(null)
      this.$router.push("/")
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

<style scoped>
.scene {
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: scroll;
}
</style>
