<template>
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>
<script>
import Layout from "@/components/Layout.vue"

export default {
  components: {
    Layout
  }
}
</script>

<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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

*::-webkit-scrollbar {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: 0.3s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-move {
  transition: transform 0.3s;
}

.slide-enter-active {
  top: 0;
  opacity: 1;
  position: relative;
  transition: 0.6s ease-out;
}
.slide-leave-active {
  top: 0;
  opacity: 0.2;
  position: relative;
  transition: 0s ease-out;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  top: 0px;
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
  src: url("./assets/spokes.ttf");
}

.article {
  color: #495057;
}

.article > p {
  font-size: 1rem;
  line-height: 1.5;
  margin: 20px 0;
}

.article a {
  color: #999;
}

.article h2 {
  padding-top: 10px;
  margin-bottom: 20px;
}

img {
  display: block;
  margin: 0 auto;
  float: center;
  height: auto;
  max-width: 100%;
}

.detail-content img {
  max-width: 85%;
  border: 1px solid #aaa;
  border-radius: 3px;
  margin-bottom: 36px;
}

[v-cloak] {
  display: none;
}
</style>
