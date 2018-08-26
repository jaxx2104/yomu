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
      />
    </transition-group>
  </div>
</template>

<script>
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
  font-family: "Courier New", Courier, monospace;
  font-weight: 900;
  font-size: 0.75rem;
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
