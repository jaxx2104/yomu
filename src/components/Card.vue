<template>
  <div class="card-tile" @click="onClick">
    <div :key="image" v-lazy:background-image="_image" class="card-image">
      <h2 class="card-title">
        {{ title }}
      </h2>
    </div>
  </div>
</template>
<script>
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
      default: "/img/load.jpg"
    }
  },
  computed: {
    _image() {
      const image = this.image.replace(/^http:\/\//i, "https://")
      return image
    }
  },
  methods: {
    onClick() {
      this.$emit("action", {
        row: this.row,
        column: this.column
      })
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
  background-color: #ddd;
  background-position: center;
  background-size: cover;
  position: relative;

  border-radius: 8px;
  border: 1px solid #ccc;
  height: 200px;
  transition: all 0.3s;
  width: 200px;
}
.card-image::before {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  border-radius: 8px;
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.card-image:hover {
  transition: all 0.3s;
  transform: scale(0.98);
}
.card-image:active {
  transition: all 0.3s;
  transform: scale(0.9);
}
.card-title {
  color: #fff;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 1));
  word-wrap: break-word;
  font-size: 1rem;
  line-height: 1.25rem;
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
    font-size: 0.75rem;
    line-height: 1rem;
  }
}
.card-image[lazy="loaded"] {
  animation-duration: 1.5s;
  animation-fill-mode: both;
  animation-name: fadeIn;
}
</style>
