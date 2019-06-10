<template>
  <transition name="slide" tag="div">
    <div class="scene-detail" v-show="isShow">
      <img :src="thumb" :style="styles" class="detail-image" />
      <img :src="thumb" class="dummy-image" />
      <div class="detail-wrap">
        <div class="detail-info">
          <h1 class="detail-title">
            {{ detail ? detail.title : title }}
          </h1>
          <time class="detail-date">{{ detail ? detail.date : date }}</time>
        </div>
        <div
          class="detail-content article"
          v-html="detail ? detail.content : content"
        />
        <Button label="MORE" @action="onMore" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"
import Button from "@/components/Button"

export default {
  components: {
    Button
  },
  data() {
    return {
      opacity: 1.0,
      scrollY: 40,
      image: "load.jpg",
      title: "",
      link: "",
      date: "",
      content: ""
    }
  },
  computed: {
    ...mapState("entries", ["select"]),
    ...mapGetters("entries", {
      detail: "currentEntry"
    }),
    isShow() {
      this.initScroll()
      this.setScroll()
      this.setScroll2()

      return this.select
    },
    thumb() {
      return this.detail ? this.detail.image : this.image
    },
    styles() {
      const opacity = this.opacity
      return { opacity }
    }
  },
  methods: {
    ...mapActions("entries", ["setSelect"]),

    // 初期のスクロール位置
    initScroll() {
      setTimeout(() => {
        window.scroll({
          top: this.scrollY,
          behavior: "smooth"
        })
      }, 300)
    },

    // とじる場合の挙動
    setScroll() {
      const span = 100 / this.scrollY
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
      window.open(this.detail ? this.detail.link : this.link)
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

.close {
  opacity: 0.75;
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
  word-break: break-all;
}
</style>
