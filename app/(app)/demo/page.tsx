// "use client"

import { AppSidebar } from "@/components/blocks/dashboard/app-sidebar"
import { NavUser } from "@/components/blocks/dashboard/nav-user"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

// import { useEffect } from "react"
// import { AppLayout } from "@/components/app-layout"
// import { MainContent } from "@/components/main-content"
// import { MenuBar } from "@/components/menu-bar"
// import { useDatabase } from "@/contexts/database-context"

export default function DemoPage() {
  // const { refreshGearItems } = useDatabase()

  // useEffect(() => {
  //   refreshGearItems()
  // }, [])

  return (
    <div className="bg-background flex h-screen flex-col">
      <div className="w-full bg-yellow-500 p-2 text-center text-yellow-900 dark:bg-yellow-900 dark:text-yellow-500">
        This is a Test Drive. Your data will not be saved.
      </div>

      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center justify-between gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
              {/* TODO: Determine current sub-route Gear, Kits, Lists  */}
              <div className="breadcrumb-container">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
            <div className="ml-auto">
              <NavUser
                user={{
                  name: "TEST-DRIVE",
                  email: "m@example.com",
                  avatar: "/avatars/shadcn.jpg",
                }}
              />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="bg-muted/50 aspect-video rounded-xl" />
              <div className="bg-muted/50 aspect-video rounded-xl" />
              <div className="bg-muted/50 aspect-video rounded-xl" />
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
          </div>
        </SidebarInset>
      </SidebarProvider>
      {/* OLD CODE */}
      {/* <MenuBar />
      <div className="grid flex-1 lg:grid-cols-5">
        <AppLayout className="hidden lg:block" />
        <div className="col-span-3 overflow-auto lg:col-span-4 lg:border-l">
          <MainContent />
        </div>
      </div> */}
    </div>
  )
}
