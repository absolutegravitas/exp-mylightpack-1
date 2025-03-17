"use client"

import { useEffect } from "react"
import { registerServiceWorker } from "@/lib/service-worker"

export function ServiceWorkerInit() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      registerServiceWorker()
    }
  }, [])

  return null
}
