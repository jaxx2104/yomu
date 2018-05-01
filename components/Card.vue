<template>
  <div class="card-tile">
    <div
      v-lazy:background-image="image"
      class="card-image"
    >
      <h2 class="card-title">{{ title }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    title: { type: String, default: "" },
    image: { type: String, default: "image.jpg" }
  },
  data() {
    return {}
  }
}
</script>

<style>
.card-tile {
  cursor: pointer;
  width: auto;
  padding: 2px;
}

.card-image {
  width: 200px;
  height: 200px;
  background-size: cover;
}

.card-title {
  color: white;
  padding: 8px;
  font-size: 1.25rem;
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

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.card-image[lazy="loading"] {
}
.card-image[lazy="error"] {
  /*your style here*/
}
.card-image[lazy="loaded"] {
  animation-duration: 1.5s;
  animation-fill-mode: both;
  animation-name: fadeIn;
}
</style>
