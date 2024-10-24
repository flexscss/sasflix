export const usePostStore = defineStore('post', () => {
  const currentPost = ref({} as Post)
  const posts = ref([] as Post[])
  const comments = ref([] as PostComment[])

  return { currentPost, posts, comments }
})
