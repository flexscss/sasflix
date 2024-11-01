<template>
  <div>
    <Post
      :post="post"
      class="mb-9.5" @rate="ratePost($event, post.id)"
    />
    <div id="comments">
      <h2 class="text-h1 font-bold mb-4">
        {{ comments.length }} comments
      </h2>
      <div v-if="comments.length">
        <Comment
          v-for="item in comments"
          :key="item.id"
          :comment="item"
          class="mb-6 last:mb-0"
          @restore="restoreComment($event, post.id)"
          @remove="removeComment($event, post.id)"
        />
      </div>
      <div
        v-else
        class="text-gray-primary-200"
      >
        There are no comments
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Comment from '@/components/shared/fragments/comment.vue'
import Post from '@/components/shared/fragments/post.vue'

const postStore = usePostStore()
const route = useRoute()
const id = route.params.id as string
const [post, comments] = await Promise.all([postStore.getPost(id), postStore.getCommentsForPost(id)])
const {
  ratePost,
  setRatedPosts,
  setRemovedComments,
  removeComment,
  restoreComment
} = postStore

useSeo({
  title: post.value.title,
  description: post.value.body
})
setRatedPosts()
setRemovedComments(post.value.id)
</script>
