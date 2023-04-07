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
          v-model="description"
        />
      </div>
      <div class="column">
        <TimerComponent @toFinishedTimer="endTask" />
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
  data() {
    return {
      description: "",
    }
  },
  methods: {
    endTask(timeFormatted: number): void {
      console.log(timeFormatted)
      console.log(this.description)
      this.description = ""
    },
  },
})
</script>

<style scoped></style>
