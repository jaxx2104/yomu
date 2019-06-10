<template>
  <section class="searchbar">
    <input
      v-model="inputValue"
      type="text"
      class="search-input"
      placeholder="🔍"
      @keyup.enter="search"
    />
    <Button :label="buttonLabel" style="width:100px" @action="onClick" />
  </section>
</template>

<script>
import { mapGetters } from "vuex"
import Button from "@/components/Button"

export default {
  name: "Searchbar",
  components: {
    Button
  },
  data() {
    return {
      inputValue: ""
    }
  },
  computed: {
    ...mapGetters("search", ["isSearch"]),
    buttonLabel() {
      return this.isSearch ? "Cancel" : "Search"
    }
  },

  methods: {
    onClick() {
      if (this.isSearch) {
        this.cancel()
      } else {
        this.search()
      }
    },
    search() {
      this.$emit("search", this.inputValue)
    },
    cancel() {
      this.inputValue = ""
      this.$emit("cancel")
    }
  }
}
</script>

<style scoped>
.searchbar {
  background-color: #ced4da;
  display: flex;
  height: 56px;
}

.search-input {
  background-clip: padding-box;
  background-color: #fff;
  border-radius: 0.25rem;
  border: 0px solid #aaa;
  color: #333;
  display: block;
  font-size: 1.25rem;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  margin: 0.375rem;
  flex-grow: 1;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.search-input:focus {
  border: 1px #e91e63 solid;
  outline: 0;
}
</style>
