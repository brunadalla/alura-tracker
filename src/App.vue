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
        <BoxComponent v-if="isEmpty"> Start your first task! </BoxComponent>
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
import BoxComponent from "./components/Box.vue"

export default defineComponent({
  name: "App",
  components: {
    SideSection,
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

<style>
.list {
  padding: 1.25rem;
}
</style>
