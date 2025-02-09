import "styles/tailwind.css"
// import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { PostHogProvider } from "./provider"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body>
        <PostHogProvider>
          {/* <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
          {children}
        </PostHogProvider>
      </body>
    </html>
    // </ClerkProvider>
  )
}
