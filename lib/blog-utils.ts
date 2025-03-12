import frontMatter from "front-matter"
import * as fs from "fs"
import * as path from "path"

export interface BlogPost {
  slug: string
  frontmatter: {
    title: string
    date: string
    description: string
    image?: string
    tags?: string[]
    author?: string
    content?: string
  }
  content: string
}

export async function getBlogPostsFromMarkdown(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), "app", "blog", "posts")
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const fm = frontMatter<{
      title: string
      date: string
      description: string
      image?: string
      tags?: string[]
      author?: string
    }>(fileContent)
    const slug = filename.replace(".md", "")

    return {
      slug,
      frontmatter: {
        title: fm.attributes.title,
        date: fm.attributes.date ? new Date(fm.attributes.date).toLocaleDateString() : "Unknown date",
        description: fm.attributes.description,
        image: fm.attributes.image,
        tags: fm.attributes.tags || [],
        author: fm.attributes.author || "Unknown Author",
      },
      content: fm.body,
    }
  })

  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPostsFromMarkdown()
  return posts.find((post) => post.slug === slug)
}
