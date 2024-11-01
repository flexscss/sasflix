<template>
  <div class="flex">
    <Avatar class="mr-2 pt-1" />
    <div>
      <div class="font-semibold mb-1.5">
        {{ props.comment.user.fullName }}
      </div>
      <div class="mb-3">
        <template v-if="props.comment.isRemoved">
          This comment has been deleted.
          <button
            class="text-accent-primary link-border"
            @click="$emit('restore', props.comment.id)"
          >
            Return
          </button>
        </template>
        <template v-else>
          {{ props.comment.body }}
        </template>
      </div>
      <div
        v-if="!props.comment.isRemoved"
        class="flex text-caption"
      >
        <div class="text-gray-primary-200 mr-5">
          Today
        </div>
        <button
          class="text-accent-red link-border"
          @click="$emit('remove', props.comment.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Avatar from '@/components/shared/ui/avatar.vue'

const props = defineProps({
  comment: {
    type: Object as () => PostComment,
    required: true
  }
})

defineEmits(['remove', 'restore'])
</script>
