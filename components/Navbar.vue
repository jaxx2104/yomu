<template>
  <header>
    <div class="menu">
      <img
        src="/icons/search.svg"
        class="icon"
      >
    </div>
    <div class="brand">
      <h1>{{ title }}</h1>
    </div>
    <div
      class="menu"
      @click="onClick"
    >
      <img
        src="/icons/toggle.svg"
        class="icon"
      >
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"

export default {
  name: "Navibar",
  data() {
    return {
      title: "Yomu"
    }
  },
  computed: {
    ...mapState(["isPrimary"]),
    ...mapGetters(["currentFeeds"])
  },
  methods: {
    ...mapActions(["togglePrimary", "updateEntries"]),

    onClick() {
      this.togglePrimary()
      this.updateEntries(this.currentFeeds)
    }
  }
}
</script>

<style scoped>
header {
  align-items: center;
  background-color: #fff;
  border-bottom: solid 0.5px #ccc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  position: sticky;
  top: 0;
  z-index: 1;
}

.brand {
  padding: 1.45rem 1.0875rem;
}

@font-face {
  font-family: spokes;
  src: url("~/assets/spokes.ttf");
}

.brand h1 {
  color: #e91e63;
  font-family: spokes;
  font-weight: 900;
  font-size: 1.25rem;
  text-decoration: none;
  margin: 0;
}

.menu {
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  padding: 1rem 1.0875rem;
  transition: background 0.8s;
}

.menu:hover {
  border-radius: 50%;
  background: #fce4ec radial-gradient(circle, transparent 1%, #fce4ec 1%)
    center/15000%;
}

.menu:active {
  background-color: #fff;
  background-size: 100%;
  border-radius: 50%;
  transition: background 0s;
}

.icon {
  width: 20px;
}
</style>
