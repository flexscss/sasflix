<template>
  <div>
    {{ props.tag }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  tag: {
    type: String,
    required: true
  }
})
</script>
