import type { Metadata, Viewport } from "next"

import { ServiceWorkerInit } from "@/components/service-worker-init"
import { DatabaseProvider } from "@/contexts/database-context"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <DatabaseProvider>{children}</DatabaseProvider>
      <ServiceWorkerInit />
    </>
  )
}
