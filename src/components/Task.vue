<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">Description</div>
      <div class="column">
        <TimeFormatted :timeInSeconds="15" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TimeFormatted from "./TimeFormatted.vue"

export default defineComponent({
  name: "TaskComponent",
  components: {
    TimeFormatted,
  },
})
</script>

<style scoped>
.box {
  background: #faf0ca;
}
</style>
