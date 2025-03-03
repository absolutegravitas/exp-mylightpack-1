import { Container } from "@/components/ui/container"
import { LatestPosts } from "@/components/ui/latest-posts"

export default function BlogPage() {
  return (
    <Container className="flex flex-col items-center justify-center">
      <LatestPosts />
    </Container>
  )
}
