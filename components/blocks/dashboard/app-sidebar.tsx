"use client"

import { PaperPlaneIcon } from "@radix-ui/react-icons"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  HouseIcon,
  Map,
  MessageCircleMoreIcon,
  MessageSquareHeartIcon,
  PieChart,
  Rocket,
  RocketIcon,
  Settings2,
  SmilePlusIcon,
  SquareTerminal,
} from "lucide-react"
import Link from "next/link"
import React from "react"

import { NavMain } from "@/components/blocks/dashboard/nav-main"
import { NavProjects } from "@/components/blocks/dashboard/nav-projects"
import { NavUser } from "@/components/blocks/dashboard/nav-user"
import { Logo } from "@/components/ui/logo"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { getAllGearItems, getAllKits, getAllLists } from "@/lib/db"
// import { TeamSwitcher } from "@/components/team-switcher"

// This is sample data.
const data = {
  user: {
    name: "TEST-DRIVE",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Gear",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Kits",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Lists",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  projects: [
    {
      name: "Home",
      url: "/",
      icon: HouseIcon,
    },
    {
      name: "Feedback",
      url: "/feedback",
      icon: MessageSquareHeartIcon,
    },
    {
      name: "Feature Roadmap",
      url: "/feature-roadmap",
      icon: RocketIcon,
    },
    {
      name: "Request Feature",
      url: "/request-features",
      icon: SmilePlusIcon,
    },
  ],
}

const isDemoRoute = typeof window !== "undefined" && window.location.pathname.includes("/demo")

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [gearItems, setGearItems] = React.useState(data.navMain[0]?.items)
  const [kits, setKits] = React.useState(data.navMain[1]?.items)
  const [lists, setLists] = React.useState(data.navMain[2]?.items)

  const fetchData = async () => {
    try {
      const gear = await getAllGearItems(isDemoRoute)
      const kits = await getAllKits(isDemoRoute)
      const lists = await getAllLists(isDemoRoute)

      const mappedGear =
        gear && gear.length > 0 ? gear.map((item) => ({ title: item.name, url: `gear/${item.id}` })) : []
      const mappedKits =
        kits && kits.length > 0 ? kits.map((item) => ({ title: item.name, url: `kits/${item.id}` })) : []
      const mappedLists =
        lists && lists.length > 0
          ? lists.map((item) => ({ title: item.name || "Unnamed", url: `lists/${item.id}` }))
          : []

      setGearItems(mappedGear)
      setKits(mappedKits)
      setLists(mappedLists)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* TODO: implement when Groups functionality is available and find a different place for logo */}
        {/* <TeamSwitcher teams={data.teams} /> */}
        <Link href={"/"}>
          <p className="flex items-center align-middle text-sm font-semibold tracking-tight text-pretty md:text-base">
            <Logo className="h-10 w-10 pr-2" />
            {`myLightPack`}
          </p>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={[
            {
              title: "Gear",
              url: "#",
              icon: SquareTerminal,
              isActive: true,
              items: gearItems,
            },
            {
              title: "Kits",
              url: "#",
              icon: Bot,
              items: kits,
            },
            {
              title: "Lists",
              url: "#",
              icon: BookOpen,
              items: lists,
            },
          ]}
        />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter className="md:hidden">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
