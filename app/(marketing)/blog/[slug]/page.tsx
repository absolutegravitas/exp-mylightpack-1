// import { MDXRemote } from "next-mdx-remote/rsc"
// import MDXComponents from "@/components/mdx-components"
// import { getPosts } from "@/lib/posts"

// export async function generateStaticParams() {
//   return getPosts().map((post) => ({ slug: post.slug }))
// }

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = getPosts().find((p) => p.slug === params.slug)
//   if (!post) return { title: "Loading..." } // Avoid missing pages
//   return { title: post.metadata.title }
// }

// export const revalidate = 60 // Revalidate every 60 seconds

// export default async function BlogPost({ params }: { params: { slug: string } }) {
//   const posts = getPosts()
//   const post = posts.find((p) => p.slug === params.slug)

//   if (!post) return <div>Post not found</div>

//   return (
//     <article className="prose prose-lg mx-auto max-w-3xl py-8">
//       <header>
//         <h1 className="mt-0">{post.metadata.title}</h1>
//         <p className="text-gray-500">{new Date(post.metadata.publishDate).toLocaleDateString()}</p>
//       </header>
//       <MDXRemote source={post.content} components={MDXComponents} />
//       {/* Optionally include call-to-action and related posts sections here */}
//     </article>
//   )
// }

import { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/blocks/menus/header"
import { PostBody } from "@/components/blog/post-body"
import { PostHeader } from "@/components/blog/post-header"

import { Container } from "@/components/ui/container"
import { CMS_NAME } from "@/lib/constants"
import markdownToHtml from "@/lib/markdownToHtml"
import { getAllPosts, getPostBySlug } from "@/lib/posts"

export default async function Post(props: Params) {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const content = await markdownToHtml(post.content || "")

  return (
    <main>
      {/* <Alert preview={post.preview} /> */}
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader title={post.title} coverImage={post.coverImage} date={post.publishDate} author={post.author} />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  )
}

type Params = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
