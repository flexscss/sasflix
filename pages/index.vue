<template>
  <div>
    <Post
      v-for="item in posts"
      :key="item.id" :post="item"
      :is-title-link="true"
      :has-comments-link="true"
      class="mb-6.5 last:mb-0"
      @rate="ratePost($event, item.id)"
    />
  </div>
</template>

<script setup lang="ts">
import Post from '@/components/shared/fragments/post.vue'

const postStore = usePostStore()
const posts = await postStore.getPosts()
const { ratePost, setRatedPosts } = postStore

useSeo()
setRatedPosts()
</script>
