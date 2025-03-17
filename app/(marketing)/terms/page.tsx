// app/terms/page.tsx
import { Container } from "@/components/ui/container"

export default function TermsPage() {
  return (
    <Container className="py-10">
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Terms and Conditions</h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">Last updated: [Date]</p>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you agree to be bound by these Terms and Conditions. If you do not
            agree with any part of these terms, you must not use this website.
          </p>

          <h2 className="text-2xl font-bold">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on [Your Company Name]'s website for
            personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-2xl font-bold">3. Disclaimer</h2>
          <p>
            The materials on [Your Company Name]'s website are provided on an 'as is' basis. [Your Company Name] makes
            no warranties, expressed or implied.
          </p>

          <h2 className="text-2xl font-bold">4. Limitations</h2>
          <p>
            In no event shall [Your Company Name] or its suppliers be liable for any damages arising out of the use or
            inability to use the materials on [Your Company Name]'s website.
          </p>

          <h2 className="text-2xl font-bold">5. Revisions and Errata</h2>
          <p>
            The materials appearing on [Your Company Name]'s website could include technical, typographical, or
            photographic errors. [Your Company Name] does not warrant that any of the materials on its website are
            accurate, complete, or current.
          </p>

          <h2 className="text-2xl font-bold">6. Links</h2>
          <p>
            [Your Company Name] has not reviewed all of the sites linked to its website and is not responsible for the
            contents of any such linked site.
          </p>

          <h2 className="text-2xl font-bold">7. Site Terms of Use Modifications</h2>
          <p>
            [Your Company Name] may revise these terms of use for its website at any time without notice. By using this
            website you are agreeing to be bound by the then current version of these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-bold">8. Governing Law</h2>
          <p>
            Any claim relating to [Your Company Name]'s website shall be governed by the laws of [Your Country/State]
            without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
    </Container>
  )
}
