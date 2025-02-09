// next.config.ts
// import MillionLint from "@million/lint"
import withBundleAnalyzer from "@next/bundle-analyzer"
import { type NextConfig } from "next"

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
