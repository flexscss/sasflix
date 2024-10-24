<template>
  <div>
    Post component
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/types/post.ts'

const props = defineProps({
  post: {
    type: Object as () => Post,
    required: true
  }
})
</script>
