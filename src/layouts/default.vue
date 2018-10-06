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

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-move {
  transition: transform 1s;
}

.slide-enter-active,
.slide-leave-active {
  top: 0;
  opacity: 1;
  position: relative;
  transition: 0.5s ease-out;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  top: 40px;
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
  src: url("../assets/spokes.ttf");
}

.article {
  color: #495057;
}
.article > p {
  font-size: 1.25rem;
  line-height: 1.5;
  margin: 12px 0;
}

.article a {
  color: #e91e63;
}

.article h2 {
  padding-top: 10px;
  margin-bottom: 20px;
}

img {
  width: 100%;
}
</style>
