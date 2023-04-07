<template>
  <button class="button" @click="clicked" :disabled="isDisabled">
    <span class="icon">
      <i :class="icon"></i>
    </span>
    <span>{{content}}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  emits: ['clicked'],
  props: {
    isDisabled: {
      type: Boolean
    },
    icon: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
  },
  methods: {
    clicked () : void {
      this.$emit('clicked')
    }
  }
});
</script>