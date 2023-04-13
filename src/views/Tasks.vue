<template>
  <FormTask @toSaveTask="saveTask" />
  <div class="list">
    <TaskComponent v-for="(task, index) in tasks" :key="index" :task="task" />
    <BoxComponent v-if="isEmpty"> Start your first task! </BoxComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"

import { useStore } from "@/store"
import ITask from "../interfaces/ITask"
import FormTask from "../components/Form.vue"
import BoxComponent from "../components/Box.vue"
import TaskComponent from "../components/Task.vue"
import { SAVE_TASK } from "@/store/mutations-type"

export default defineComponent({
  name: "TasksComponent",
  components: {
    FormTask,
    TaskComponent,
    BoxComponent,
  },
  computed: {
    isEmpty(): boolean {
      return this.tasks.length === 0
    },
  },
  methods: {
    saveTask(task: ITask) {
      this.store.commit(SAVE_TASK, task)
    },
  },
  setup() {
    const store = useStore()
    return {
      tasks: computed(() => store.state.tasks),
      store,
    }
  },
})
</script>
