<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideSection />
    </div>
    <div class="column is-three-quarter">
      <FormTask />
      <div class="lista"></div>
      <Task/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import SideSection from "./components/SideSection.vue"
import FormTask from "./components/Form.vue"
import Task from "./components/Task.vue"

export default defineComponent({
  name: "App",
  components: {
    SideSection,
    FormTask,
    Task,
  },
})
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>
