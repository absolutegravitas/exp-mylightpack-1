import { Metadata } from "next"
import { AppLayout } from "@/components/app-layout"
import { MainContent } from "@/components/main-content"
import { MenuBar } from "@/components/menu-bar"

export const metadata: Metadata = {
  title: "myLightPack",
  description: "Manage your gear, pack lists and travel light for your next adventure.",
}

export default function HomePage() {
  return (
    <div className="bg-background flex h-screen flex-col">
      <MenuBar />
      <div className="grid flex-1 lg:grid-cols-5">
        <AppLayout className="hidden lg:block" />
        <div className="col-span-3 overflow-auto lg:col-span-4 lg:border-l">
          <MainContent />
        </div>
      </div>
    </div>
  )
}
