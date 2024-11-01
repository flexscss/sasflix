<template>
  <button
    class="inline-flex text-caption py-2 pl-3 pr-2"
    :class="{
      'bg-accent-red text-white/95': props.type === ReactionType.Like && props.active,
      'bg-text text-white/95': props.type === ReactionType.Dislike && props.active,
      'bg-gray-primary-100': !props.active,
      'rounded-r-xl': props.radiusType === RadiusType.Right,
      'rounded-l-xl': props.radiusType === RadiusType.Left,
    }"
    @click="$emit('click', $event)"
  >
    <Icon
      :name="iconName"
      class="mr-1 -translate-y-[1px]"
    />
    <div class="mr-2">
      {{ props.type === ReactionType.Like ? 'Like' : 'Trash' }}
    </div>
    <div
      :class="{
        'opacity-30': !props.active,
        'opacity-40': props.active && props.type === ReactionType.Dislike,
        'opacity-100': props.active && props.type === ReactionType.Like,
      }"
    >
      {{ count }}
    </div>
  </button>
</template>

<script lang="ts">
enum RadiusType {
  Left = 'left',
  Right = 'right'
}
</script>

<script setup lang="ts">
// eslint-disable-next-line import/first
import Icon from '@/components/shared/ui/icon.vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value: string) => {
      return Object.values(ReactionType).includes(value as ReactionType)
    }
  },
  radiusType: {
    type: String,
    default: RadiusType.Left,
    validator: (value: string) => {
      return Object.values(RadiusType).includes(value as RadiusType)
    }
  },
  active: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number,
    default: 0
  }
})

defineEmits(['click'])

const iconName = computed(() => {
  if (props.type === ReactionType.Like) {
    return props.active ? 'likeFilled' : 'like'
  }
  if (props.type === ReactionType.Dislike) {
    return props.active ? 'dislikeFilled' : 'dislike'
  }
  return 'like'
})

const count = computed(() => {
  if (props.active)
    return props.count + 1
  return props.count
})
</script>
