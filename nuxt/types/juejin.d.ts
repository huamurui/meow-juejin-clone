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
  id: number
}

interface Tag {
  tagName: string
  id: number
}
