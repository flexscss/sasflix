<template>
  <div>
    {{ post }}
    {{ comments }}
  </div>
</template>

<script setup lang="ts">
const postStore = usePostStore()
const route = useRoute()
const id = route.params.id as string
const [post, comments] = await Promise.all([postStore.getPost(id), postStore.getCommentsForPost(id)])
</script>
