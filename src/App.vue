<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'dark-mode': isDarkModeActivated }"
  >
    <div class="column is-one-quarter">
      <SideSection @toChangedTheme="changeTheme" />
    </div>
    <div class="column is-three-quarter content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import SideSection from "./components/SideSection.vue"

export default defineComponent({
  name: "App",
  components: {
    SideSection,
  },
  data() {
    return {
      isDarkModeActivated: false,
    }
  },
  methods: {
    changeTheme(isDarkModeActivated: boolean) {
      this.isDarkModeActivated = isDarkModeActivated
    },
  },
})
</script>

<style>
.list {
  padding: 1.25rem;
}
main {
  --bg-primary: #fff;
  --text-primary: #000;
}
main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}
.content {
  background-color: var(--bg-primary);
}
</style>

