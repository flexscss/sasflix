import type { Post, PostComment } from '@/types/post.ts'

export const usePostStore = defineStore('post', () => {
  const currentPost = ref({} as Post)
  const posts = ref([] as Post[])
  const comments = ref([] as PostComment[])

  return { currentPost, posts, comments }
})
