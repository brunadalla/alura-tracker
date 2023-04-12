<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Alura Tracker" />
    </h1>
    <div class="has-text-centered">
      <button class="button" @click="changeTheme">{{ buttonText }}</button>
    </div>
    <nav class="panel mt-5 p-2">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            Tasks
          </router-link>
        </li>
        <li>
          <router-link to="/projects" class="link">
            <i class="fas fa-project-diagram"></i>
            Projects
          </router-link>
        </li>
      </ul>
    </nav>
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
.panel li {
  margin: 8px 0;
  padding: 0 10px;
  text-align: left;
}
.link {
  color: #fff;
}
.link:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
