<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Form to create a new task"
      >
        <input
          type="text"
          class="input"
          placeholder="Which task do you like to start?"
        />
      </div>
      <div class="column">
        <TimerComponent />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TimerComponent from "./Timer.vue"

export default defineComponent({
  name: "FormTask",
  components: {
    TimerComponent,
  },
})
</script>

<style scoped></style>
