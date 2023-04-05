<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideSection />
    </div>
    <div class="column is-three-quarter">
      <FormTask />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import SideSection from "./components/SideSection.vue"
import FormTask from "./components/Form.vue"

export default defineComponent({
  name: "App",
  components: {
    SideSection,
    FormTask,
  },
})
</script>

<style></style>
