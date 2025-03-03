// app/privacy/page.tsx
import { Container } from "@/components/ui/container"

export default function PrivacyPage() {
  return (
    <Container className="py-10">
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Privacy Policy</h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">Last updated: [Date]</p>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">1. Introduction</h2>
          <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our website.
          </p>

          <h2 className="text-2xl font-bold">2. Information We Collect</h2>
          <p>
            We may collect personal information that you provide to us directly, such as your name, email address, and
            any other information you choose to provide.
          </p>

          <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
          <p>
            We use the information we collect to operate, maintain, and improve our website, and to communicate with
            you.
          </p>

          <h2 className="text-2xl font-bold">4. Disclosure of Your Information</h2>
          <p>We may share your information with third-party service providers who perform services on our behalf.</p>

          <h2 className="text-2xl font-bold">5. Security of Your Information</h2>
          <p>We take reasonable measures to protect your information from unauthorized access, use, or disclosure.</p>

          <h2 className="text-2xl font-bold">6. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>

          <h2 className="text-2xl font-bold">7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].</p>
        </div>
      </div>
    </Container>
  )
}
