<template>
  <div class="card-list">
    <div class="card-info">
      {{ title }}
    </div>
    <div class="card-column">
      <Card
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :image="item.image"
      />
    </div>
  </div>
</template>

<script>
import Card from "~/components/Card"

export default {
  components: {
    Card
  },
  props: {
    title: { type: String, default: "" },
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style>
.card-list {
  width: 100%;
  margin: 0 auto;
  padding: 8px 0;
}
.card-info {
  color: lightgrey;
  font-family: "Courier New", Courier, monospace;
  font-weight: 900;
  font-size: 0.75rem;
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
