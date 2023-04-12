<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="logo" />
    </h1>
    <button class="button" @click="changeTheme"> {{buttonText}} </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "SideSection",
  emits: ["toChangedTheme"],
  data() {
    return {
      isDarkModeActivated: false,
    }
  },
  computed: {
    buttonText() {
      if (this.isDarkModeActivated) {
        return "Activate dark mode"
      }
      return "Deactivate dark mode"
    },
  },
  methods: {
    changeTheme() {
      this.isDarkModeActivated = !this.isDarkModeActivated
      this.$emit("toChangedTheme", this.isDarkModeActivated)
    },
  },
})
</script>

<style scoped>
header {
  background: #0d3b66;
  padding: 1rem;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
