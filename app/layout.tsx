import "styles/tailwind.css"
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Github, Hexagon, Twitter } from "lucide-react"
import { Geist, Geist_Mono } from "next/font/google"
import { CookieConsent } from "@/components/cookie-consent"
import { Logo } from "@/components/Logo/Logo"
import { Footer } from "@/components/ui/footer"
import { Header1 } from "@/components/ui/header"
import { PostHogProvider } from "./provider"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <PostHogProvider>
            <Header1 />
            {/* <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
            <CookieConsent
              variant="default"
              // onAcceptCallback={() => {
              //   // Handle accept
              // }}
              // onDeclineCallback={() => {
              //   // Handle decline
              // }}
            />
            {children}

            <Footer
              logo={<Logo className="h-10 w-10" />}
              brandName="myLightPack"
              socialLinks={[
                {
                  icon: <Twitter className="h-5 w-5" />,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
                {
                  icon: <Github className="h-5 w-5" />,
                  href: "https://github.com",
                  label: "GitHub",
                },
              ]}
              mainLinks={[
                { href: "/home", label: "Home" },
                { href: "/dashboard", label: "About" },
                { href: "/blog", label: "Blog" },
                { href: "/roadmap", label: "Roadmap" },
                { href: "/release-notes", label: "Release Notes" },
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" },
              ]}
              legalLinks={[]}
              copyright={{
                text: "© 2024 Awesome Corp",
                license: "All rights reserved",
              }}
            />
          </PostHogProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
