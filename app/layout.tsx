import "styles/tailwind.css"
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Geist, Geist_Mono } from "next/font/google"
import { PostHogProvider } from "./provider"
import { CookieConsent } from "@/components/cookie-consent"

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <PostHogProvider>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
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
          </PostHogProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
