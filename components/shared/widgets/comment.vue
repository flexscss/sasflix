<template>
  <div>
    Comment component
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  comment: {
    type: Object as () => PostComment,
    required: true
  }
})
</script>
