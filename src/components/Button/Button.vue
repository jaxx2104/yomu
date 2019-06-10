<template>
  <button :class="className" @click="$emit('action')">
    {{ label }}
  </button>
</template>
<script>
export default {
  props: {
    className: { type: String, default: "" },
    label: { type: String, default: "" }
  }
}
</script>

<style scoped>
button {
  background-color: transparent;
  background-image: none;
  border-color: #e91e63;
  border-radius: 0.25rem;
  color: #e91e63;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  margin: 0.375rem;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
  transition: 0.8s;
}

button:hover {
  color: #fff;
  background: #e91e63 radial-gradient(circle, transparent 1%, #e91e63 1%)
    center/15000%;
}

button:active {
  background-color: #fff;
  background-size: 100%;
  transition: background 0s;
}
</style>
