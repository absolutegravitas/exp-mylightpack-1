// Upstash Redis client configuration
import { Redis } from "@upstash/redis"

// Create a Redis client for Upstash
const redisClient = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL, // replace with your Upstash Redis URL
  token: process.env.UPSTASH_REDIS_REST_TOKEN, // replace with your Upstash Redis token
})

export default redisClient
