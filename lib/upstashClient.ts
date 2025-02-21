// lib/upstashClient.ts
import { Redis } from "@upstash/redis"

// Example initialization; ensure you have the proper environment variables.
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})
