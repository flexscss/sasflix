<template>
  <div>
    {{ posts }}
  </div>
</template>

<script setup lang="ts">
const postStore = usePostStore()
const posts = await postStore.getPosts()
</script>
