<template>
  <header>
    <div class="menu">
      <img
        :src="icons.search"
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
        :src="icons.toggle"
        class="icon"
      >
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"

import search from "~/assets/search.svg"
import toggle from "~/assets/toggle.svg"

export default {
  name: "Navibar",
  data() {
    return {
      title: "Yomu",
      icons: {
        search,
        toggle
      }
    }
  },
  computed: {
    ...mapState(["isPrimary"]),
    ...mapGetters(["currentFeeds"])
  },
  methods: {
    ...mapActions(["togglePrimary", "updateEntries"]),

    onClick() {
      this.togglePrimary(this.isPrimary)
      this.updateEntries(this.currentFeeds)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  align-items: center;
  background-color: #fafafa;
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

.menu {
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  padding: 1rem 1.0875rem;
  transition: background 0.8s;
}

.menu:hover {
  border-radius: 50%;
  background: #eee radial-gradient(circle, transparent 1%, #eee 1%)
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

@font-face {
  font-family: spokes;
  src: url("~/assets/spokes.ttf");
}

.brand h1 {
  color: #333;
  font-family: spokes, "Courier New", Courier, monospace;
  font-weight: 800;
  font-size: 1.25rem;
  text-decoration: none;
  margin: 0;
}
</style>
