<template>
  <nuxt/>
</template>

<style>
html {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.list-enter-active,
.list-leave-active {
  transition: opacity 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
}
.list-move {
  transition: transform 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@font-face {
  font-family: spokes;
  src: url("~/assets/spokes.ttf");
}
</style>
