<template>
  <transition
    name="fade"
    appear
  >
    <div
      class="scene-detail"
    >
      <img
        v-lazy="thumb"
        class="detail-image"
      >
      <transition
        name="slide"
        tag="div"
        appear
      >
        <div class="detail-wrap">
          <div class="detail-info">
            <h1 class="detail-title">{{ detail ? detail.title : title }}</h1>
            <time class="detail-date">{{ detail ? detail.date : date }}</time>
          </div>
          <div
            class="detail-content article"
            v-html="detail ? detail.content : content"
          />
          <Button
            label="MORE"
            @action="onMore"
          />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex"
import Button from "~/src/components/Button"

export default {
  components: {
    Button
  },
  data() {
    return {
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
    }
  },
  methods: {
    onMore() {
      window.open(this.detail ? this.detail.link : this.link)
    },
    onPress() {
      /* eslint-disable-next-line no-console */
      console.log("onTap")
    }
  }
}
</script>

<style scoped>
.scene-detail {
  position: absolute;
}
.detail-image {
  position: fixed;
  background-color: #fff;
  vertical-align: bottom;
  width: 100%;
}

.detail-wrap {
  filter: drop-shadow(-15px 0px 40px rgba(0, 0, 0, 0.6));
  background-color: #fff;
  padding: 16px;
  margin-top: 300px;
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
