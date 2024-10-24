export interface Post {
  id: number
  title: string
  body: string
  userId: number
  views: number
  reactions: {
    likes: number
    dislikes: number
  }
  tags: string[]
}

export interface PostComment {
  body: string
  id: number
  likes: number
  postId: number
  user: {
    fullName: string
    id: number
    username: string
  }
}

export interface ListResponse {
  total: number
  skip: number
  limit: number
}
