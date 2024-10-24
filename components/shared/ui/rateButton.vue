<template>
  <div>
    <Icon :name="props.type" />
    Rate button
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/shared/ui/icon.vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value: string) => {
      return Object.values(ReactionType).includes(value as ReactionType)
    }
  }
})
</script>

<script lang="ts">
enum ReactionType {
  Like = 'like',
  Dislike = 'dislike'
}
</script>
