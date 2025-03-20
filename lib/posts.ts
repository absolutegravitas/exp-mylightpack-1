// import matter from "gray-matter"
// import path from "path"

// const postsDirectory = path.join(process.cwd(), "app/(marketing)/blog/posts")

// export async function getPosts(category?: string) {
//   if (typeof window !== "undefined") {
//     throw new Error("getPosts can only be called on the server side")
//   }

//   const fs = await import("fs")
//   const files = fs.readdirSync(postsDirectory)
//   const now = new Date()

//   return files
//     .map((filename) => {
//       const filePath = path.join(postsDirectory, filename)
//       const fileContents = fs.readFileSync(filePath, "utf8")
//       const { data, content } = matter(fileContents)

//       return {
//         slug: filename.replace(".mdx", ""),
//         metadata: data,
//         content,
//       }
//     })
//     .filter((post) => {
//       // Only include posts whose publishDate is now or in the past
//       const publishDate = new Date(post.metadata.publishDate)
//       return publishDate <= now && (!category || post.metadata.category === category)
//     })
//     .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
// }

// import Fuse from "fuse.js"

// export function searchPosts(query: string, category?: string) {
//   const posts = getPosts(category)

//   if (!query) return posts // Return all posts if no query

//   const fuse = new Fuse(posts, {
//     keys: ["metadata.title", "metadata.description", "content"],
//     threshold: 0.3, // Adjust for strictness
//   })

//   return fuse.search(query).map((result) => result.item)
// }

import matter from "gray-matter"
import fs from "fs"
import { join } from "path"
import { Post } from "@/interfaces/post"

const postsDirectory = join(process.cwd(), "app/(marketing)/blog/posts")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return { ...data, slug: realSlug, content } as Post
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.publishDate > post2.publishDate ? -1 : 1))
  return posts
}
