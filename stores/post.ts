export const usePostStore = defineStore('post', () => {
  const comments = ref([] as PostComment[])
  interface ListResponseWithPostComments extends ListResponse {
    comments: PostComment[]
  }
  const getCommentsForPost = async (id: string) => {
    const { data } = await useApi<ListResponseWithPostComments>(`/posts/${id}/comments`)
    if (data.value)
      comments.value = data.value?.comments
    return comments
  }

  const post = ref({} as Post)
  async function getPost(id: string) {
    const { data, error } = await useApi<Post>(`/post/${id}`)
    if (error.value) {
      throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    }
    if (data.value)
      post.value = data.value
    return post
  }

  const posts = ref([] as Post[])
  interface ListResponseWithPosts extends ListResponse {
    posts: Post[]
  }
  const getPosts = async () => {
    const { data } = await useApi<ListResponseWithPosts>('/posts?limit=5')
    if (data.value)
      posts.value = data.value?.posts
    return posts
  }

  return { post, posts, comments, getPost, getPosts, getCommentsForPost }
})
