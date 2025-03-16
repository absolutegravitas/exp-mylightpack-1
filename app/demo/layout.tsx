import type { Metadata, Viewport } from "next"
import { Inter as FontSans } from "next/font/google"

import { ServiceWorkerInit } from "@/components/service-worker-init"
import { ThemeProvider } from "@/components/theme-provider"
import { DatabaseProvider } from "@/contexts/database-context"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "myLightPack",
  description: "Manage your gear, pack lists and travel light for your next adventure.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "myLightPack",
  },
}

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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("bg-background min-h-screen font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <DatabaseProvider>{children}</DatabaseProvider>
        </ThemeProvider>
        <ServiceWorkerInit />
      </body>
    </html>
  )
}
