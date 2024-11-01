<template>
  <div>
    <h2 class="text-h1 font-bold mb-2.5">
      <nuxt-link
        v-if="props.isTitleLink"
        :to="{ name: 'posts-id', params: { id: props.post.id } }"
        class="text-text"
      >
        {{ props.post.title }}
      </nuxt-link>
      <template v-else>
        {{ props.post.title }}
      </template>
    </h2>
    <p class="mb-5.5">
      {{ props.post.body }}
    </p>
    <div class="flex items-center sm:grid sm:grid-cols-2 sm:gap-2">
      <div class="flex mr-2 sm:mr-0">
        <RateButton
          type="like"
          :count="props.post.reactions.likes"
          :active="props.post.userRate === ReactionType.Like"
          class="mr-px"
          @click="$emit('rate', ReactionType.Like)"
        />
        <RateButton
          type="dislike"
          :count="props.post.reactions.dislikes"
          :active="props.post.userRate === ReactionType.Dislike"
          radius-type="right"
          @click="$emit('rate', ReactionType.Dislike)"
        />
      </div>
      <div class="flex items-center sm:justify-end">
        <nuxt-link
          v-if="props.hasCommentsLink"
          :to="{ name: 'posts-id', params: { id: props.post.id }, hash: '#comments' }"
          class="text-caption mr-2 link-border sm:hidden"
        >
          Open comments
        </nuxt-link>
        <div class="text-caption text-gray-primary-200 mr-2 sm:mr-0">
          {{ formatRelativeDate(new Date()) }}
        </div>
      </div>
      <TagsGroup :tags="props.post.tags" class="sm:col-span-2" />
      <div class="hidden sm:block col-span-2">
        <nuxt-link
          v-if="props.hasCommentsLink"
          :to="{ name: 'posts-id', params: { id: props.post.id }, hash: '#comments' }"
          class="text-caption link-border"
        >
          Open comments
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TagsGroup from '@/components/shared/fragments/tagsGroup.vue'
import RateButton from '@/components/shared/ui/rateButton.vue'
import { formatRelativeDate } from '@/utils/formatRelativeDate.ts'

const props = defineProps({
  post: {
    type: Object as () => Post,
    required: true
  },
  isTitleLink: {
    type: Boolean,
    default: false
  },
  hasCommentsLink: {
    type: Boolean,
    default: false
  }
})

defineEmits(['rate'])
</script>
