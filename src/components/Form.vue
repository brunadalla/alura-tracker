<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-5"
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
      <div class="column is-3">
        <div class="select">
          <select v-model="idProject">
            <option value="">Selecione o projeto</option>
            <option
              :value="project.id"
              v-for="project in projects"
              :key="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <TimerComponent @toFinishedTimer="saveTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "vuex"

import { key } from "@/store"
import TimerComponent from "./Timer.vue"

export default defineComponent({
  name: "FormTask",
  emits: ["toSaveTask"],
  components: {
    TimerComponent,
  },
  data() {
    return {
      description: "",
      idProject: "",
    }
  },
  methods: {
    saveTask(timeFormatted: number): void {
      this.$emit("toSaveTask", {
        durationInSeconds: timeFormatted,
        description: this.description,
        project: this.projects.find((proj) => proj.id == this.idProject),
      })
      this.description = ""
    },
  },
  setup() {
    const store = useStore(key)
    return {
      store,
      projects: computed(() => store.state.projects),
    }
  },
})
</script>

<style>
.form {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>
