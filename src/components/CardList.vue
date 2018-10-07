<template>
  <div class="card-list">
    <div class="card-info">
      {{ title }}
    </div>
    <transition-group
      name="fade"
      class="card-column"
      tag="div"
      appear
    >
      <Card
        v-for="(item, index) in items"
        :key="index"
        :row="row"
        :column="index"
        :title="item.title"
        :image="item.image"
        @action="onDetail"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import Card from "~/src/components/Card"

export default {
  components: {
    Card
  },
  props: {
    title: { type: String, default: "" },
    row: { type: Number, default: 0 },
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    ...mapActions("entries", ["setSelect"]),

    onDetail({ row, column }) {
      this.setSelect({ row, column })
    }
  }
}
</script>

<style scoped>
.card-list {
  width: 100%;
  margin: 0 auto;
  padding: 0;
}
.card-info {
  color: #999;
  font-weight: 100;
  font-size: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  padding: 4px 8px;
}
.card-column {
  position: relative;
  left: 0px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}
</style>
