<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <TimeFormatted :timeInSeconds="timeInSeconds" />
    <ButtonComponent
      @clicked="start"
      icon="fas fa-play"
      content="play"
      :isDisabled="isInitialized"
    />
    <ButtonComponent
      @clicked="end"
      icon="fas fa-stop"
      content="stop"
      :isDisabled="!isInitialized"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TimeFormatted from "./TimeFormatted.vue"
import ButtonComponent from "./Button.vue"

export default defineComponent({
  name: "TimerComponent",
  emits: ["toFinishedTimer"],
  components: {
    TimeFormatted,
    ButtonComponent,
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
      this.$emit("toFinishedTimer", this.timeInSeconds)
      this.timeInSeconds = 0
    },
  },
})
</script>
