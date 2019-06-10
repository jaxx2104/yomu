<template>
  <div class="spinner">
    <div class="double-bounce1" />
    <div class="double-bounce2" />
  </div>
</template>

<script>
export default {
  props: {
    isLoading: { type: Boolean, default: true }
  },
  methods: {
    start() {
      this.isLoading = true
    },
    finish() {
      this.isLoading = false
    }
  }
}
</script>

<style scoped>
.spinner {
  width: 60px;
  height: 60px;
  position: fixed;
  left: calc(50% - 30px);
  top: calc(50% - 30px);
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #e91e63;
  opacity: 0.6;
  position: absolute;

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
