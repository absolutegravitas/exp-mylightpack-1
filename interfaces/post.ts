import { type Author } from "./author"

export type Post = {
  slug: string
  title: string
  description: string
  excerpt: string
  publishDate: string
  category: string
  coverImage: string
  author: Author
  tags: string[]
  seoKeywords: string[]
  canonicalUrl: string
  ogTitle: string
  ogDescription: string
  ogImage: {
    url: string
  }
  twitterCard: string
  twitterSite: string
  content: string
  preview?: boolean
}
