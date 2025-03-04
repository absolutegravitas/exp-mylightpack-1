"use client"

import { ArrowRight, Menu, MoveRight, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Logo } from "../Logo/Logo"

function Header1() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Features",
      href: "/#features",
      description: "",
    },
    {
      title: "Pricing",
      href: "/#pricing",
      description: "",
    },
    {
      title: "Roadmap",
      href: "/roadmap",
      description: "",
    },
    // {
    //   title: "Blog",
    //   href: "/blog",
    //   description: "",
    // },
    // {
    //   title: "About",
    //   href: "/#about",
    //   description: "",
    // },
  ]

  const [isOpen, setOpen] = useState(false)
  return (
    <header className="bg-background fixed top-0 left-0 z-40 w-full">
      <div className="relative container mx-auto flex min-h-20 flex-row items-center gap-3 lg:grid lg:grid-cols-3">
        <div className="hidden flex-row items-center justify-start gap-4 lg:flex">
          <NavigationMenu className="flex items-start justify-start">
            <NavigationMenuList className="flex flex-row justify-start gap-1">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href && (
                    <NavigationMenuLink href={item.href}>
                      <Button
                        variant="ghost"
                        className="cursor-pointer text-sm font-bold hover:tracking-wide hover:underline hover:underline-offset-4"
                      >
                        {item.title}
                      </Button>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ml-3 flex lg:justify-center">
          <p className="flex items-center align-middle font-semibold">
            <Logo className="h-10 w-10 pr-2" />
            {`myLightPack`}
          </p>
        </div>
        <div className="flex w-full justify-end gap-4">
          {/* <div className="hidden border-r md:inline"></div> */}
          <Button variant="outline">Sign In</Button>
          <Link href="/#features">
            <Button>
              Get started <ArrowRight className="h-5 w-5 pl-2" />
            </Button>
          </Link>
        </div>
        <div className="flex w-12 shrink items-end justify-end lg:hidden">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          {isOpen && (
            <div className="bg-background absolute top-20 right-0 container flex w-full flex-col gap-8 border-t py-4 shadow-lg">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link href={item.href} className="flex items-center justify-between">
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="text-muted-foreground h-4 w-4 stroke-1" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export { Header1 }
