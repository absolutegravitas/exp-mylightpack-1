"use client"

import Link from "next/link"
import React from "react"

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
}

export interface BlogPostCardProps {
  post: BlogPost
}

interface BlogPostsListProps {
  blogPosts: BlogPost[]
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const author = post.frontmatter.author || "Unknown Author"

  return (
    <div
      data-slot="card"
      className="text-card-foreground order-last rounded-xl border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
    >
      <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
        <div className="sm:col-span-5">
          <div className="mb-4 md:mb-6">
            <div className="text-muted-foreground flex flex-wrap gap-3 text-xs tracking-wider uppercase md:gap-5 lg:gap-6">
              {post.frontmatter.tags?.map((tag: string, index: number) => <span key={index}>{tag}</span>)}
            </div>
          </div>
          <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.frontmatter.title}
            </Link>
          </h3>
          <p className="text-muted-foreground mt-4 md:mt-5">{post.frontmatter.description}</p>
          <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
            <span className="text-muted-foreground">{author}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{post.frontmatter.date}</span>
          </div>
          <div className="mt-6 flex items-center space-x-2 md:mt-8">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center font-semibold hover:underline md:text-base"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-2 size-4 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="order-first sm:order-last sm:col-span-5">
          <Link href={`/blog/${post.slug}`} passHref className="block">
            <div className="border-border aspect-[16/9] overflow-clip rounded-lg border">
              <img
                src={post.frontmatter.image || "/images/block/placeholder-dark-1.svg"}
                alt={post.frontmatter.title}
                className="fade-in h-full w-full object-cover transition-opacity duration-200 hover:opacity-70"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

const BlogPostsList: React.FC<BlogPostsListProps> = ({ blogPosts }) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16">
        <div className="text-center">
          <h2 className="mx-auto mb-6 text-3xl font-semibold text-pretty md:text-4xl lg:max-w-3xl">Blog Posts</h2>
          <p className="mx-auto max-w-2xl md:text-lg">
            Discover the latest insights and tutorials about modern web development, UI design, and component-driven
            architecture.
          </p>
        </div>
        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {blogPosts?.map((post: BlogPost) => <BlogPostCard key={post.slug} post={post} />)}
        </div>
      </div>
    </section>
  )
}

export default BlogPostsList
