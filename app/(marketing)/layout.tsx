import { ClerkProvider } from "@clerk/nextjs"
import { Footer } from "@/components/blocks/menus/footer"
import { Header1 } from "@/components/blocks/menus/header"
import { ReactScan } from "@/components/react-scan"
import { ThemeProvider } from "@/components/theme-provider"
import { Logo } from "@/components/ui/logo"

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ReactScan />
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header1 />
            <main>{children}</main>
            <Footer
              logo={<Logo className="h-20 w-20" />}
              brandName="myLightPack"
              socialLinks={[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6h12z" />
                      <path d="M12 3v18m9-9H3" />
                    </svg>
                  ),
                  href: "https://facebook.com",
                  label: "Facebook",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3v18m9-9H3" />
                    </svg>
                  ),
                  href: "https://instagram.com/mylightpack",
                  label: "Instagram",
                },
              ]}
              mainLinks={[
                { href: "/home", label: "Home" },
                { href: "/faqs", label: "FAQs" },
                { href: "/blog", label: "Blog" },
              ]}
              legalLinks={[]}
              copyright={{
                text: `© ${new Date().getFullYear()} myLightPack | AbsoluteGravitas LLC | All rights reserved`,
              }}
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
