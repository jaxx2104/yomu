<template>
  <transition name="slide" tag="div">
    <div class="scene-detail" v-show="isShow">
      <img :src="thumb || image" :style="styles" class="detail-image" />
      <img :src="thumb || image" :style="dummyStyles" class="dummy-image" />
      <div class="detail-wrap">
        <div class="detail-info">
          <h1 class="detail-title">
            {{ detail ? detail.title : "" }}
          </h1>
          <time class="detail-date">{{ detail ? detail.date : "" }}</time>
        </div>
        <div class="detail-content article" v-html="content" />
        <Button label="MORE" @action="onMore" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"

import Button from "./Button.tsx"

export default {
  components: {
    Button
  },
  data() {
    return {
      image: "/img/load.jpg",
      opacity: 1.0,
      scrollY: 30
    }
  },
  computed: {
    ...mapState("entries", ["select"]),
    ...mapGetters("entries", {
      detail: "currentEntry",
      content: "currentContent",
      thumb: "currentThumb"
    }),
    isShow() {
      if (this.select) {
        this.initScroll(this.scrollY)
        this.setScroll(this.scrollY)
        this.setScroll2()
      } else {
        this.initScroll(0)
      }
      return this.select
    },
    styles() {
      const opacity = this.opacity
      return { opacity }
    },
    dummyStyles() {
      return { "min-height": this.thumb ? "" : "500px" }
    }
  },
  methods: {
    ...mapActions("entries", ["setSelect"]),

    // 初期のスクロール位置
    initScroll(top) {
      setTimeout(() => {
        window.scroll({ top, behavior: "smooth" })
      }, 300)
    },

    // とじる場合の挙動
    setScroll(top) {
      const span = 100 / top
      const listener = () => {
        const opacity = (window.scrollY * span) / 100
        if (opacity <= 1) {
          this.opacity = opacity
        }
      }
      window.removeEventListener("scroll", listener)
      window.addEventListener("scroll", listener)
    },

    setScroll2() {
      const listener2 = () => {
        if (window.scrollY <= 0) {
          this.setSelect(null)
        }
      }
      window.removeEventListener("scroll", listener2)
      window.addEventListener("scroll", listener2)
    },
    onMore() {
      window.open(this.detail ? this.detail.link : "")
    }
  }
}
</script>

<style scoped>
.scene-detail {
  background-color: #fff;
  position: absolute;
  top: 72px;
  width: 100%;
}

.detail-image {
  position: fixed;
  background-color: #fff;
  vertical-align: bottom;
  width: 100%;
}

.dummy-image {
  margin: -2px 0;
  opacity: 0;
  width: 100%;
}

.detail-wrap {
  filter: drop-shadow(-15px 0px 40px rgba(0, 0, 0, 0.6));
  background-color: #fff;
  padding: 24px;
}

.detail-info {
  padding-bottom: 12px;
}

.detail-title {
  color: #495057;
  font-weight: 300;
  padding: 12px 0;
}

.detail-date {
  color: #aaa;
  font-weight: 300;
  padding: 0;
}

.detail-content {
  font-weight: 300;
  padding: 12px 0;
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>
