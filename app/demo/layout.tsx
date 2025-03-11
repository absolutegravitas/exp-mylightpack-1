import type { Metadata } from "next"
import type React from "react"
import { DataProviders } from "@/components/data-providers"
import { DBStatus } from "@/components/db-status"
import { TestDriveUI } from "@/components/test-drive-ui"
import "@/styles/tailwind.css"
export const metadata: Metadata = {
  title: "Gear Manager",
  description: "Manage your outdoor gear, kits, and packing lists",
  generator: "v0.dev",
}

export default function DemoDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DataProviders>
      {/* Your existing layout */}
      <header className="flex items-center justify-between border-b p-4">
        <h1 className="text-xl font-bold">Gear Manager</h1>
        <div className="flex items-center gap-2">
          <DBStatus />
        </div>
      </header>
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <TestDriveUI />
        </div>
        <main>{children}</main>
      </div>
    </DataProviders>
  )
}
