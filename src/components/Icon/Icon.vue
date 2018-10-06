<template>
  <div
    :class="className"
    class="icon"
    @click="$emit('action')"
  >
    <font-awesome-icon
      :icon="icon"
      :style="styles"
    />
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    color: { type: String, default: "#e91e63" },
    className: { type: String, default: "" },
    icon: { type: String, default: "" }
  },
  data() {
    return {}
  },
  computed: {
    styles() {
      const color = this.color
      return { color }
    }
  },
  methods: {}
}
</script>

<style scoped>
.icon {
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  padding: 1rem 1.0875rem;
  transition: background 0.8s;
}

.icon:hover {
  border-radius: 50%;
  background: #fce4ec radial-gradient(circle, transparent 1%, #fce4ec 1%)
    center/15000%;
}

.icon:active {
  background-color: #fff;
  background-size: 100%;
  border-radius: 50%;
  transition: background 0s;
}

.icon > svg {
  vertical-align: middle;
}
</style>
