<template>
  <div
    class="card-tile"
    @click="onClick">
    <div
      v-lazy:background-image="image"
      :key="image"
      class="card-image">
      <h2 class="card-title">{{ title }}</h2>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex"

export default {
  components: {},
  props: {
    column: {
      type: Number,
      default: 0
    },
    row: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: "load.jpg"
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(["entries"])
  },
  methods: {
    ...mapActions(["setSelected"]),

    onClick() {
      this.setSelected({
        row: this.row,
        column: this.column
      })
      this.$router.push("detail")
    }
  }
}
</script>

<style scoped>
.card-tile {
  cursor: pointer;
  width: auto;
  padding: 2px;
}

.card-image {
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: center;
}

.card-image:hover {
  transition: all 0.5s;
  transform: scale(0.98);
}
.card-image:active {
  transition: all 0.25s;
  transform: scale(0.9);
}

.card-title {
  color: white;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4));
  font-size: 1.25rem;
  padding: 8px;
  user-select: none;
}

@media screen and (max-width: 768px) {
  .card-image {
    width: 120px;
    height: 120px;
  }

  .card-title {
    padding: 4px;
    font-size: 1rem;
  }
}

.card-image[lazy="loaded"] {
  animation-duration: 1.5s;
  animation-fill-mode: both;
  animation-name: fadeIn;
}
</style>
