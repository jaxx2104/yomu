<template>
  <div class="layout">
    <Navbar :menu-left="menuLeft" :menu-right="menuRight" :title="menuTitle" />
    <transition name="fade" appear>
      <div class="scene">
        <slot></slot>
      </div>
    </transition>
    <Loading v-show="isLoading" />
  </div>
</template>

<script>
import { commonComputed, commonActions } from "@/store/helpers.ts"

import Loading from "@/components/Loading.vue"
import Navbar from "@/components/Navbar.vue"

export default {
  components: {
    Loading,
    Navbar
  },
  data() {
    return {
      name: "home"
    }
  },
  watch: {
    $route: {
      handler(route) {
        this.name = route.name
      },
      immediate: true
    }
  },
  computed: {
    ...commonComputed,
    menuTitle() {
      const name = this.name
      let props = ""
      if (name === "search") {
        props = ""
      }
      if (name === "home") {
        props = this.select ? "" : "Yomu"
      }
      return props
    },
    menuLeft() {
      const name = this.name
      let props = {}
      if (name === "search") {
        props = { icon: "times", action: this.onClose }
      }
      if (name === "home") {
        props = this.select
          ? { icon: "times", action: this.onCancel }
          : { icon: "search", action: this.onSearch }
      }
      return props
    },
    menuRight() {
      const name = this.name
      let props = {}
      if (name === "search") {
        props = {}
      }
      if (name === "home") {
        props = this.select
          ? { icon: "share-square", action: this.onShare }
          : { icon: "toggle-off", action: this.onToggle }
      }
      return props
    }
  },
  created() {},
  methods: {
    ...commonActions,

    onCancel() {
      this.setSelect(null)
    },
    onClose() {
      this.setSelect(null)
      this.$router.push("/")
    },
    onSearch() {
      this.$router.push("search")
    },
    onShare() {
      if (!navigator.share) {
        alert("Not support share api 📦")
        return
      }
      navigator.share({
        url: this.detail.link,
        title: this.detail.title
      })
    },
    onToggle() {
      this.togglePrimary()
      this.updateEntries(this.currentFeeds)
    }
  }
}
</script>

<style scoped>
.scene {
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: scroll;
}
</style>
