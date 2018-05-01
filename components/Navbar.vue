<template>
  <header>
    <div class="menu">
      <img
        :src="icons.search"
        class="icon"
        width="24px"
        height="24px"
      >
    </div>
    <div class="brand">
      <h1>{{ title }}</h1>
    </div>
    <div class="menu">
      <img
        :src="icons.toggle"
        class="icon"
        width="24px"
        height="24px"
      >
    </div>
  </header>
</template>

<script>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  border-bottom: solid 0.5px #ccc;
}
.brand {
  padding: 1.45rem 1.0875rem;
}
.menu {
  padding: 1.45rem 1.0875rem;
}

.icon path {
  stroke: orangered;
  color: orangered;
}

@font-face {
  font-family: spokes;
  src: url("~/assets/spokes.ttf");
}

.brand h1 {
  color: orangered;
  font-family: spokes, "Courier New", Courier, monospace;
  font-weight: 800;
  font-size: 1.25rem;
  text-decoration: none;
  margin: 0;
}
</style>
