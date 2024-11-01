<template>
  <component :is="iconComponent" :class="props.class" />
</template>

<script setup lang="ts">
import dislike from './icons/dislike.vue'
import dislikeFilled from './icons/dislikeFilled.vue'
import like from './icons/like.vue'
import likeFilled from './icons/likeFilled.vue'

const props = withDefaults(defineProps<{
  name: IconName
  class?: string
}>(), {
  class: 'w-3.5'
})

const icons = {
  like,
  likeFilled,
  dislike,
  dislikeFilled
} as const

type IconName = keyof typeof icons
const iconComponent = computed(() => icons[props.name])
</script>
