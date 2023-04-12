<template>
  <FormTask @toSaveTask="saveTask" />
  <div class="list">
    <TaskComponent v-for="(task, index) in tasks" :key="index" :task="task" />
    <BoxComponent v-if="isEmpty"> Start your first task! </BoxComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import FormTask from "../components/Form.vue"
import TaskComponent from "../components/Task.vue"
import ITask from "../interfaces/ITask"
import BoxComponent from "../components/Box.vue"

export default defineComponent({
  name: "TasksComponent",
  components: {
    FormTask,
    TaskComponent,
    BoxComponent,
  },
  data() {
    return {
      tasks: [] as ITask[],
    }
  },
  computed: {
    isEmpty(): boolean {
      return this.tasks.length === 0
    },
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task)
    },
  },
})
</script>
