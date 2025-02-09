// next.config.ts
// import MillionLint from "@million/lint"
import withBundleAnalyzer from "@next/bundle-analyzer"
import { type NextConfig } from "next"
import policies from "./csp.js"
import { env } from "./env.mjs"

const config: NextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  rewrites: async () => [
    { source: "/healthz", destination: "/api/health" },
    { source: "/api/healthz", destination: "/api/health" },
    { source: "/health", destination: "/api/health" },
    { source: "/ping", destination: "/api/health" },
  ],
  images: {
    formats: ["image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: policies, //"default-src 'self'; script-src 'none'; sandbox; ",
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      // { protocol: "https", hostname: `${env.NEXT_PUBLIC_SERVER_URL}` },
      // { protocol: "http", hostname: `localhost` },

      { protocol: "https", hostname: "**fonts.gstatic.com**" },
      { protocol: "https", hostname: "**fonts.googleapis.com**" },
      { protocol: "https", hostname: "**cdn.jsdelivr.net**" },
      { protocol: "https", hostname: "**images.unsplash.com**" },

      { protocol: "https", hostname: "**placehold.co**" },

      { protocol: "https", hostname: "**lh3.googleusercontent.com**" }, // for user avatars - google
      { protocol: "https", hostname: "**media.licdn.com**" }, // for user avatars - linkedin
      { protocol: "https", hostname: "**platform-lookaside.fbsbx.com**" }, // for user avatars - facebook
      { protocol: "https", hostname: "**vercel.live*" }, // for vercel feedback (non prod hosted preview instances)
    ],
  },
  async headers() {
    const headers = []

    // Prevent search engines from indexing the site if it is not live
    // This is useful for staging environments before they are ready to go live
    // To allow robots to crawl the site, use the `NEXT_PUBLIC_IS_LIVE` env variable
    // You may want to also use this variable to conditionally render any tracking scripts
    if (!process.env.NEXT_PUBLIC_IS_LIVE) {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
        source: "/:path*",
      })
    }

    // Set the `Content-Security-Policy` header as a security measure to prevent XSS attacks
    // It works by explicitly whitelisting trusted sources of content for your website
    // This will block all inline scripts and styles except for those that are allowed
    headers.push({
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value: policies,
        },
      ],
    })

    return headers
  },

  // webpack: (config, { dev, isServer }) => {

  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"],
  //   })
  //   return config
  // },
}

export default env.ANALYZE ? withBundleAnalyzer({ enabled: env.ANALYZE })(config) : config

// // breaks the runtime, causes LOT LONGER build times
// export default MillionLint.next({
//   enabled: true,
//   rsc: true,
// })(env.ANALYZE ? withBundleAnalyzer({ enabled: env.ANALYZE })(config) : config)
