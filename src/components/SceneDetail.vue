<template>
  <div class="scene-detail">
    <transition
      name="fade"
      appear>
      <img
        :src="detail ? detail.image : image"
        class="detail-image"
      >
    </transition>
    <transition
      name="slide"
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
    ...mapGetters({
      detail: "currentEntry"
    })
  },
  methods: {
    onMore() {
      window.open(this.detail ? this.detail.link : this.link)
    }
  }
}
</script>

<style scoped>
.detail-image {
  width: 100%;
  vertical-align: bottom;
}

.detail-wrap {
  filter: drop-shadow(-15px 0px 40px rgba(0, 0, 0, 0.6));
  background-color: #fff;
  padding: 20px;
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
}
</style>
