<template>
  <div class="scene-detail">
    <transition name="fade" appear>
      <img v-lazy="thumb" :style="styles" class="detail-image" />
    </transition>
    <img v-lazy="thumb" class="dummy-image" />
    <transition name="slide" tag="div" appear>
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
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
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
      title: "これはサンプルテキストです",
      link: "http://localhost:3000/",
      date: "2018-05-02T15:08:21Z",
      content: "<p>hogehoge</p><h2>subtitle</h2><p>hogehoge</p><p>hogehoge</p>"
    }
  },
  computed: {
    ...mapGetters("entries", {
      detail: "currentEntry"
    }),
    thumb() {
      return this.detail ? this.detail.image : this.image
    },
    styles() {
      const opacity = this.opacity
      return { opacity }
    }
  },
  mounted() {
    this.initScroll()
    this.setScroll()
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
      window.addEventListener("scroll", () => {
        const opacity = (window.scrollY * span) / 100
        if (opacity <= 1) {
          this.opacity = opacity
        }
        if (window.scrollY <= 0) {
          this.setSelect(null)
        }
      })
    },
    onMore() {
      window.open(this.detail ? this.detail.link : this.link)
    }
  }
}
</script>

<style scoped>
.scene-detail {
  position: absolute;
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
  background-color: #fff;
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
