import "styles/tailwind.css"
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Footer } from "@/components/blocks/menus/footer"
import Header from "@/components/blocks/menus/header"
import { ReactScan } from "@/components/react-scan"
import { ThemeProvider } from "@/components/theme-provider"
import { Logo } from "@/components/ui/logo"
import { PostHogProvider } from "./(providers)/PostHogProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Determine the Vercel environment.
  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.VERCEL_ENV

  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#000000" },
        elements: {
          formButtonPrimary: "bg-black border border-black border-solid hover:bg-white hover:text-black",
          socialButtonsBlockButton:
            "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
          socialButtonsBlockButtonText: "font-semibold",
          formButtonReset:
            "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
          membersPageInviteButton: "bg-black border border-black border-solid hover:bg-white hover:text-black",
          card: "bg-[#fafafa]",
        },
      }}
    >
      <html lang="en">
        <ReactScan />
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <PostHogProvider>{children}</PostHogProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
