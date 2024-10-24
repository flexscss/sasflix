<template>
  <div>
    <div>Comments component</div>
    <Comment
      v-for="item in props.comments"
      :key="item.id"
      :comment="item"
    />
  </div>
</template>

<script setup lang="ts">
import type { PostComment } from '@/types/post.ts'
import Comment from '@/components/shared/widgets/comment.vue'

const props = defineProps({
  comments: {
    type: Array as () => PostComment[],
    required: true
  }
})
</script>
