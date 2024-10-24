<template>
  <div>
    Icon component
    <component :is="props.name" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
