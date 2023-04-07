<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <TimeFormatted :timeInSeconds="timeInSeconds" />
    <button class="button" @click="start" :disabled="isInitialized">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="end" :disabled="!isInitialized">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TimeFormatted from "./TimeFormatted.vue"

export default defineComponent({
  name: "TimerComponent",
  emits: ['toFinishedTimer'],
  components: {
    TimeFormatted,
  },
  data() {
    return {
      timeInSeconds: 0,
      timer: 0,
      isInitialized: false,
    }
  },
  methods: {
    start() {
      this.isInitialized = true
      this.timer = setInterval(() => {
        this.timeInSeconds += 1
      }, 1000)
    },
    end() {
      this.isInitialized = false
      clearInterval(this.timer)
      this.$emit('toFinishedTimer', this.timeInSeconds)
      this.timeInSeconds = 0
    },
  },
})
</script>

. 