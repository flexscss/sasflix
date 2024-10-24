<template>
  <div>
    Comment component
  </div>
</template>

<script lang="ts" setup>
import type { PostComment } from '@/types/post.ts'

const props = defineProps({
  comment: {
    type: Object as () => PostComment,
    required: true
  }
})
</script>
