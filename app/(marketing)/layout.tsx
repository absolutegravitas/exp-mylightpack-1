import { Footer } from "@/components/blocks/menus/footer"
import Header from "@/components/blocks/menus/header"
import { Logo } from "@/components/ui/logo"

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
