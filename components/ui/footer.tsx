import Link from "next/link"
import { Button } from "@/components/ui/button"

interface FooterProps {
  logo: React.ReactNode
  brandName: string
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  mainLinks: Array<{
    href: string
    label: string
  }>
  legalLinks: Array<{
    href: string
    label: string
  }>
  copyright: {
    text: string
    license?: string
  }
}

//  <div className="w-full py-20 lg:py-40 bg-foreground text-background">
//       <div className="container mx-auto"></div>

export function Footer({ logo, brandName, socialLinks, mainLinks, legalLinks, copyright }: FooterProps) {
  return (
    <footer className="relative container mx-auto w-full items-center pt-16 pb-6 lg:pt-24 lg:pb-8">
      <div className="px-4 lg:px-8">
        <div className="align-bottom md:flex md:items-start md:justify-between">
          <Link href="/" className="flex place-items-end items-end gap-x-2 align-bottom" aria-label={brandName}>
            {logo}
            <span className="pb-2 text-xl font-bold">{brandName}</span>
          </Link>
          <ul className="mt-6 flex list-none space-x-3 md:mt-0">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full" asChild>
                  <Link href={link.href} target="_blank" aria-label={link.label}>
                    {link.icon}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 border-t pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
          <nav className="lg:col-[4/11] lg:mt-0">
            <ul className="-mx-2 -my-1 flex list-none flex-wrap lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="mx-2 my-1 shrink-0">
                  <Link href={link.href} className="text-primary text-sm underline-offset-4 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 lg:col-[4/11] lg:mt-0">
            <ul className="-mx-3 -my-1 flex list-none flex-wrap lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="mx-3 my-1 shrink-0">
                  <Link href={link.href} className="text-muted-foreground text-sm underline-offset-4 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-muted-foreground mt-6 text-sm leading-6 whitespace-nowrap lg:col-[1/4] lg:row-[1/3] lg:mt-0">
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  )
}
