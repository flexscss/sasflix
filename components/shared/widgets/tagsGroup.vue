<template>
  <div>
    <Tag
      v-for="(item, index) in props.tags"
      :key="index"
      :tag="item"
    />
  </div>
</template>

<script setup lang="ts">
import Tag from '@/components/shared/ui/tag.vue'

const props = defineProps({
  tags: {
    type: Array<string>,
    default: () => []
  }
})
</script>
