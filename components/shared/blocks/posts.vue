<template>
  <div>
    <vPost
      v-for="item in props.posts"
      :key="item.id"
      :post="item"
    />
  </div>
</template>

<script setup lang="ts">
import vPost from '@/components/shared/widgets/post.vue'

const props = defineProps({
  posts: {
    type: Array as () => Post[],
    required: true
  }
})
</script>
