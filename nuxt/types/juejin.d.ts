interface Article {
  title: string
  content: string
  author: any
  cover: any
  createdAt: string
  readingTime: number
}

interface Moment {
  content: string
  author: any
}

interface Category {
  categoryName: string
  displayName: string
  id: number
}

interface Tag {
  tagName: string
  displayName: string
  id: number
}

interface Ad {
  id: number
  name: string
  cover: any
  link: string
}
interface Person {
  id: number
  username: string

  avatar: any
  email: string

  articles: Article[]
  moments: Moment[]
}