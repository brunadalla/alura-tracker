<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">{{ task.description }}</div>
      <div class="column">
        <TimeFormatted :timeInSeconds="task.durationInSeconds" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import TimeFormatted from "./TimeFormatted.vue"
import ITask from "@/interfaces/ITask"

export default defineComponent({
  name: "TaskComponent",
  components: {
    TimeFormatted,
  },
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
})
</script>

<style scoped>
.box {
  background: #faf0ca;
}
</style>

