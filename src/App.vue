<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideSection />
    </div>
    <div class="column is-three-quarter">
      <FormTask @toSaveTask="saveTask" />
      <div class="list">
        <TaskComponent
          v-for="(task, index) in tasks"
          :key="index"
          :task="task"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import SideSection from "./components/SideSection.vue"
import FormTask from "./components/Form.vue"
import TaskComponent from "./components/Task.vue"
import ITask from "./interfaces/ITask"

export default defineComponent({
  name: "App",
  components: {
    SideSection,
    FormTask,
    TaskComponent,
  },
  data() {
    return {
      tasks: [] as ITask[],
    }
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task)
    },
  },
})
</script>

<style>
.list {
  padding: 1.25rem;
}
</style>
