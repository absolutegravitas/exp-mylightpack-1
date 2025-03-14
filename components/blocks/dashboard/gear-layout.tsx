"use client"

import { Menu, X } from "lucide-react"
import * as React from "react"
import { GearDisplay } from "@/components/blocks/dashboard/gear-display"
import { GearList } from "@/components/blocks/dashboard/gear-list"
import { Sidebar } from "@/components/blocks/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { TooltipProvider } from "@/components/ui/tooltip"
import { useGear } from "@/hooks/use-gear"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface GearLayoutProps {
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function GearLayout({
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize = 4,
}: GearLayoutProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false)
  const [isMobileListOpen, setIsMobileListOpen] = React.useState(false)

  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)")
  const isMobile = useMediaQuery("(max-width: 767px)")

  const { selectedItem, selectItem, viewMode } = useGear()

  // Handle layout changes based on screen size
  React.useEffect(() => {
    if (isDesktop) {
      setIsMobileSidebarOpen(false)
      setIsMobileListOpen(false)
    }
  }, [isDesktop])

  // Close list when item is selected on mobile
  React.useEffect(() => {
    if (isMobile && selectedItem) {
      setIsMobileListOpen(false)
    }
  }, [selectedItem, isMobile])

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex h-full min-h-[calc(100vh-theme(spacing.16))] flex-col">
        {/* Mobile Header */}
        {!isDesktop && (
          <div className="flex h-14 items-center justify-between border-b px-4 py-2 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">
              {viewMode === "gear" ? "Gear" : viewMode === "kits" ? "Kits" : "Packing Lists"}
            </h1>
            {isMobile && selectedItem && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  selectItem(null)
                  setIsMobileListOpen(true)
                }}
                aria-label="Back to list"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
            {isMobile && !selectedItem && <div className="w-10" />}
          </div>
        )}

        {/* Mobile Sidebar Overlay */}
        {isMobileSidebarOpen && !isDesktop && (
          <div
            className="bg-background/80 fixed inset-0 z-40 backdrop-blur-sm"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        {/* Mobile List Overlay (only on mobile, not tablet) */}
        {isMobileListOpen && isMobile && selectedItem && (
          <div
            className="bg-background/80 fixed inset-0 z-30 backdrop-blur-sm"
            onClick={() => setIsMobileListOpen(false)}
          />
        )}

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar for mobile */}
          <div
            className={cn(
              "bg-background fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r transition-transform lg:relative lg:z-auto",
              isDesktop ? "" : isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full",
              isDesktop ? "lg:translate-x-0" : ""
            )}
          >
            <div className="flex h-14 items-center justify-between border-b p-4">
              <h2 className="text-lg font-semibold">UltraLight Gear</h2>
              {!isDesktop && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileSidebarOpen(false)}
                  aria-label="Close sidebar"
                >
                  <X className="h-5 w-5" />
                </Button>
              )}
            </div>
            <ScrollArea className="flex-1">
              <Sidebar />
            </ScrollArea>
          </div>

          {/* Desktop Layout with Resizable Panels */}
          {isDesktop && (
            <ResizablePanelGroup
              direction="horizontal"
              className="flex-1"
              onLayout={(sizes) => {
                document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
              }}
            >
              <ResizablePanel
                defaultSize={defaultLayout[1]}
                collapsedSize={navCollapsedSize}
                collapsible={true}
                minSize={24}
                maxSize={35}
                className={cn(isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out")}
              >
                <GearList />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
                <GearDisplay />
              </ResizablePanel>
            </ResizablePanelGroup>
          )}

          {/* Tablet Layout */}
          {isTablet && !isDesktop && (
            <div className="flex flex-1 overflow-hidden">
              {/* List for Tablet */}
              <div className={cn("w-80 flex-shrink-0 border-r", selectedItem ? "hidden md:block" : "block")}>
                <GearList />
              </div>

              {/* Display for Tablet */}
              <div className="flex-1">
                <GearDisplay />
              </div>
            </div>
          )}

          {/* Mobile Layout */}
          {isMobile && !isTablet && !isDesktop && (
            <div className="flex flex-1 overflow-hidden">
              {/* List for Mobile */}
              <div
                className={cn(
                  "w-full flex-1",
                  selectedItem ? "hidden" : "block",
                  isMobileListOpen ? "fixed inset-0 z-40 pt-14" : ""
                )}
              >
                <GearList />
              </div>

              {/* Display for Mobile */}
              <div className={cn("w-full flex-1", !selectedItem ? "hidden" : "block")}>
                <GearDisplay />
              </div>
            </div>
          )}
        </div>
      </div>
    </TooltipProvider>
  )
}
