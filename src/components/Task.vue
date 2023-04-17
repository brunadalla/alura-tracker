<template>
  <BoxComponent>
    <div class="columns">
      <div class="column is-4">
        {{ task.description || "Task without description" }}
      </div>
      <div class="column is-3">
        {{ task.project?.name || 'N/A' }}
      </div>
      <div class="column">
        <TimeFormatted :timeInSeconds="task.durationInSeconds" />
      </div>
    </div>
  </BoxComponent>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import TimeFormatted from "./TimeFormatted.vue"
import ITask from "@/interfaces/ITask"
import BoxComponent from "./Box.vue"

export default defineComponent({
  name: "TaskComponent",
  components: {
    TimeFormatted,
    BoxComponent,
  },
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
})
</script>
