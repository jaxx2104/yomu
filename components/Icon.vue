<template>
  <div
    :class="className"
    class="icon"
    @click="action"
  >
    <img
      :src="'/icons/' + icon + '.svg'"
    >
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    action: { type: Function, default: () => {} },
    className: { type: String, default: "" },
    icon: { type: String, default: "" }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style>
.icon {
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
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

.icon > img {
  vertical-align: middle;
  width: 20px;
}
</style>
