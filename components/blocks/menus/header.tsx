"use client"

import { ArrowRight, LogInIcon, Menu, MoveRight, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

function Header1() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    // {
    //   title: "How It Works",
    //   href: "/#how-it-works",
    //   description: "",
    // },
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
    // {
    //   title: "FAQs",
    //   href: "/faqs",
    //   description: "",
    // },
    {
      title: "Roadmap",
      href: "/roadmap",
      description: "",
    },

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
                        className="#hover:tracking-tight cursor-pointer text-sm font-bold hover:underline hover:underline-offset-4 md:text-base"
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
          <Link href={"/"}>
            <p className="flex items-center align-middle text-sm font-semibold md:text-xl">
              <Logo className="h-10 w-10 pr-2" />
              {`myLightPack`}
            </p>
          </Link>
        </div>
        <div className="flex w-full justify-end gap-4">
          {/* <div className="hidden border-r md:inline"></div> */}
          <Link href="/sign-in" className="cursor-pointer">
            <Button variant="outline">
              <span className="md:text-lg">{`Sign In `}</span>
              <LogInIcon className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </Link>
          <Link href="/#features" className="cursor-pointer">
            <Button className="md:text-lg">
              Sign Up
              {/* <ArrowRight className="h-5 w-5 md:h-6 md:w-6" /> */}
            </Button>
          </Link>
        </div>
        <div className="flex w-12 shrink items-end justify-end lg:hidden">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          {isOpen && (
            <div className="bg-background absolute top-20 right-0 w-full px-5 shadow-lg">
              <div className="container mx-auto border-t py-4">
                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.title} className="px-2">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="hover:bg-accent flex items-center justify-center rounded-md p-2"
                          onClick={() => setOpen(false)}
                        >
                          <span className="text-lg font-medium">{item.title}</span>
                          {/* <MoveRight className="#text-muted-foreground h-4 w-4" /> */}
                        </Link>
                      ) : (
                        <p className="p-2 text-sm font-medium">{item.title}</p>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export { Header1 }
