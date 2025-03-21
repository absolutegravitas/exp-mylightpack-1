import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "../../theme-toggle"
import { Logo } from "@/components/ui/logo"

const logo = <Logo className="h-12 w-12" />
const brandName = "myLightPack"
const socialLinks = [
  {
    icon: (
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: (
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    ),
    href: "https://instagram.com/mylightpack",
    label: "Instagram",
  },
]

const mainLinks = [
  { href: "/home", label: "Home" },
  // { href: "/features", label: "Features" },
  // { href: "/pricing", label: "Pricing" },
  { href: "/faqs", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/feature-request", label: "Feature Request" },
  { href: "/changelog", label: "Changelog" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
]
const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
]
const copyright = {
  text: `© ${new Date().getFullYear()} myLightPack | AbsoluteGravitas LLC | All rights reserved`,
  license: "",
}

export function Footer() {
  return (
    <footer className="relative container mx-auto w-full items-center pt-16 pb-6 lg:pt-24 lg:pb-8">
      <div className="px-4 lg:px-8">
        <Link
          href="/"
          className="flex place-items-end items-end gap-x-2 align-bottom tracking-tighter text-pretty"
          aria-label={brandName}
        >
          {logo}
          <span className="tracking-tightest pb-2 text-lg font-bold">{brandName}</span>
        </Link>
        <div className="mt-6 border-t pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
          <nav className="lg:col-[4/11] lg:mt-0 lg:flex lg:items-center lg:justify-center lg:space-x-4">
            <ul className="-mx-2 -my-1 list-none flex-wrap md:flex md:w-full lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="mx-2 my-1 shrink-0">
                  <Link href={link.href} className="text-primary text-sm underline-offset-4 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
              {socialLinks.map((link, i) => (
                <li key={i} className="#my-1 mx-2 shrink-0 gap-x-2">
                  <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full" asChild>
                    <Link href={link.href} target="_blank" aria-label={link.label}>
                      {link.icon}
                    </Link>
                  </Button>
                </li>
              ))}

              <ThemeToggle />
            </ul>
          </nav>
          {/* <div className="mt-6 lg:col-[4/11] lg:mt-0">
            <ul className="-mx-3 -my-1 flex list-none flex-wrap lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="mx-3 my-1 shrink-0">
                  <Link href={link.href} className="text-muted-foreground text-sm underline-offset-4 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          <div className="text-muted-foreground #text-sm mt-6 leading-6 whitespace-nowrap lg:col-[1/4] lg:row-[1/3] lg:mt-0">
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  )
}
