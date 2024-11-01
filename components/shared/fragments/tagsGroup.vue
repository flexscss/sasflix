<template>
  <div class="flex">
    <Tag
      v-for="(item, index) in props.tags"
      :key="index"
      :name="item"
      :is-triangle="index === 0"
      class="mr-1 last:mr-0"
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
