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
const post = await postStore.getPost(id)
const comments = await postStore.getCommentsForPost(id)
</script>
