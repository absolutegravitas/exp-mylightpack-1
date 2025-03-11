//https://clerk.com/docs/security/clerk-csp
const policies = {
  "default-src": ["'self'"],
  "child-src": ["'self'", "http://cdn.jsdelivr.net"],
  "font-src": ["'self'", "https://cdn.jsdelivr.net"],
  "worker-src": ["'self'", "blob:"],

  "script-src": [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",

    // scripts
    "http://cdn.jsdelivr.net",

    // payments
    "https://*.stripe.com",
    "https://pay.google.com",
    "https://applepay.cdn-apple.com",

    // clerk auth
    "https://*.clerk.dev",
    "https://clerk.dev",
    "https://cheerful-vervet-14.clerk.accounts.dev",
    "https://*.clerk.accounts.dev",
    "https://challenges.cloudflare.com",

    // posthog
    "https://us-assets.i.posthog.com",
    "https://us.i.posthog.com",

    // vercel
    "https://vercel.live",
    "https://va.vercel-scripts.com",
  ],
  "style-src": [
    "'self'",
    "'unsafe-inline'",

    // scripts
    "http://cdn.jsdelivr.net",
  ],
  "img-src": [
    "'self'",
    "data:",
    "blob:",

    // scripts
    "http://cdn.jsdelivr.net",

    // payments
    "https://*.stripe.com",
    "https://pay.google.com",
    "https://applepay.cdn-apple.com",

    // clerk auth
    "https://img.clerk.com",

    // images
    "https://images.unsplash.com",
    "https://placehold.co",
    "https://assets.aceternity.com",
    "https://html.tailus.io/",
    "https://shadcnblocks.com/",
    "https://assets.vercel.com",
    "https://tailwindcss.com",
    "https://supabase.com",
    "https://cdn.sanity.io",
    "https://astro.build",
    // "
    // login with google, facebook
    "https://lh3.googleusercontent.com",
    "https://platform-lookaside.fbsbx.com",
  ],
  "frame-src": [
    "'self'",

    // scripts
    "http://cdn.jsdelivr.net",

    // payments
    "https://*.stripe.com",
    "https://pay.google.com",
    "https://applepay.cdn-apple.com",

    // vercel
    "https://vercel.live",
    "https://va.vercel-scripts.com",

    // clerk auth
    "https://*.clerk.dev",
    "https://*.clerk.accounts.dev",
    "https://clerk.dev",
    "https://challenges.cloudflare.com",
    "https://cheerful-vervet-14.clerk.accounts.dev",
  ],
  "connect-src": [
    "'self'",
    // payments
    "https://*.stripe.com",
    "https://pay.google.com",
    "https://applepay.cdn-apple.com",

    // recaptcha

    // vercel
    "https://vercel.live",
    "https://va.vercel-scripts.com",

    // posthog
    "https://us-assets.i.posthog.com",
    "https://us.i.posthog.com",

    // clerk auth
    "https://clerk.dev",
    "https://*.clerk.dev",
    "https://*.clerk.accounts.dev",
    "wss://*.clerk.dev", // For Clerk WebSockets
    "wss://*.clerk.accounts.dev", // For Clerk WebSockets
    "https://cheerful-vervet-14.clerk.accounts.dev",
    "https://*.clerk.accounts.dev",
    "https://clerk-telemetry.com/v1/event",
  ],
}

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(" ")}`
    }
    return ""
  })
  .join("; ")
