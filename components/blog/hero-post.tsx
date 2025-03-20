import Link from "next/link"
import CoverImage from "@/components/blog/cover-image"
// import { Avatar } from "@/components/ui/avatar"
import { type Author } from "@/interfaces/author"
import DateFormatter from "./date-formatter"

type Props = {
  title: string | undefined
  coverImage: string | undefined
  date: string | undefined
  excerpt: string | undefined
  author: Author | undefined
  slug: string | undefined
}

export function HeroPost({ title, coverImage, date, excerpt, author, slug }: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title || ""} src={coverImage || ""} slug={slug || ""} />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-5xl">
            <Link href={`/blog/${slug || ""}`} className="hover:underline">
              {title || ""}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateFormatter dateString={date || ""} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt || ""}</p>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
      </div>
    </section>
  )
}
