<template>
  <div class="item">
    <Icon v-if="isEdit" icon="times-circle" @action="$emit('delete', index)" />
    <span class="info" @click="$emit('select', index)">
      <div class="title">{{ title }}</div>
      <div class="desc">{{ desc }}</div>
    </span>
    <Icon
      v-if="isEdit"
      icon="align-justify"
      class="sort"
      color="#ccc"
      @action="$emit('sort', index)"
    />
  </div>
</template>

<script>
import Icon from "./Icon.vue"

export default {
  name: "ListItem",
  components: {
    Icon
  },
  props: {
    title: {
      type: String,
      default: "Title"
    },
    desc: {
      type: String,
      default: "description"
    },
    index: {
      type: Number,
      default: 0
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.item {
  align-items: center;
  background-color: #fff;
  border-bottom: solid 0.5px #ccc;
  box-sizing: padding-box;
  cursor: pointer;
  display: flex;
  height: 72px;
  margin: auto 0;
  vertical-align: middle;
}

.info {
  display: inline-block;
  flex-grow: 1;
  margin: auto 1rem;
}

.desc {
  font-size: 0.75rem;
  color: #999;
}
</style>
