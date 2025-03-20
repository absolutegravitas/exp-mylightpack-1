import Image from "next/image"
import React from "react"
import { Button } from "@/components/ui/button"

const MDXComponents = {
  // Custom headings with Tailwind classes
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="my-4 text-4xl font-bold" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="my-3 text-3xl font-semibold" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="my-2 text-2xl font-semibold" {...props} />,

  // Use Next.js <Image> for images with additional styling
  img: (
    props: { src?: string; alt?: string; width?: number; height?: number } & React.ImgHTMLAttributes<HTMLImageElement>
  ) => {
    const defaultSrc = "/path/to/placeholder-image.png"
    const defaultAlt = "Default blog image"
    const defaultWidth = 800
    const defaultHeight = 600

    return (
      <div className="my-4">
        <Image
          src={props.src || defaultSrc}
          alt={props.alt || defaultAlt}
          width={props.width || defaultWidth}
          height={props.height || defaultHeight}
          className="rounded-lg shadow-md"
        />
      </div>
    )
  },

  // Anchor links rendered as shadcn buttons (for call-to-action links)
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Button asChild variant="link">
      <a {...props} />
    </Button>
  ),

  // You can define additional components, e.g., for image galleries or custom CTAs.
}

export default MDXComponents
