<template>
  <div class="box has-text-weight-bold" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "BoxComponent",
  data() {
    return {
      styles: {
        backgroundColor: "#faf0ca",
      },
    }
  },
})
</script>


