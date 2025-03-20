import { HeroPost } from "@/components/blog/hero-post"
import { Intro } from "@/components/blog/intro"
import { MoreStories } from "@/components/blog/more-stories"
import { Container } from "@/components/ui/container"
import { getAllPosts } from "@/lib/posts"

export default function Index() {
  const allPosts = getAllPosts()

  const heroPost = allPosts[0]

  const morePosts = allPosts.slice(1)

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost?.title}
          coverImage={heroPost?.coverImage}
          date={heroPost?.publishDate}
          author={heroPost?.author}
          slug={heroPost?.slug}
          excerpt={heroPost?.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  )
}

// "use client"

// import Link from "next/link"
// import { useState } from "react"
// import { getPosts, searchPosts } from "@/lib/posts"

// const POSTS_PER_PAGE = 5

// export default function Blog({ searchParams }: { searchParams: { page?: string; category?: string; q?: string } }) {
//   const [query, setQuery] = useState(searchParams.q || "")
//   const page = parseInt(searchParams.page || "1", 10)
//   const category = searchParams.category || ""

//   const posts = query ? searchPosts(query, category) : getPosts(category)
//   const paginatedPosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)
//   const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

//   return (
//     <div>
//       <h1>Blog</h1>

//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search posts..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyDown={(e) => {
//           if (e.key === "Enter") {
//             window.location.href = `/blog?q=${query}${category ? `&category=${category}` : ""}`
//           }
//         }}
//       />

//       {/* Category Filters */}
//       <div>
//         <Link href="/blog">All</Link> | <Link href="/blog?category=general">General Updates</Link> |{" "}
//         <Link href="/blog?category=build-in-public">Build in Public</Link>
//       </div>

//       {/* Posts List */}
//       <ul>
//         {paginatedPosts.map((post) => (
//           <li key={post.slug}>
//             <Link href={`/blog/${post.slug}`}>
//               <h2>{post.metadata.title}</h2>
//               <p>{post.metadata.date}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Pagination */}
//       <div>
//         {page > 1 && (
//           <Link href={`/blog?page=${page - 1}${query ? `&q=${query}` : ""}${category ? `&category=${category}` : ""}`}>
//             Previous
//           </Link>
//         )}
//         {page < totalPages && (
//           <Link href={`/blog?page=${page + 1}${query ? `&q=${query}` : ""}${category ? `&category=${category}` : ""}`}>
//             Next
//           </Link>
//         )}
//       </div>
//     </div>
//   )
// }
