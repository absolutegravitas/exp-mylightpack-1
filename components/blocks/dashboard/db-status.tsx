"use client"

import { AlertCircle, Check, Database } from "lucide-react"
import type React from "react"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useIndexedDB } from "@/hooks/use-indexed-db"

export const DBStatus: React.FC = () => {
  const { isSupported, isReady, error } = useIndexedDB()
  const [dbSize, setDbSize] = useState<string | null>(null)

  useEffect(() => {
    // Estimate IndexedDB storage usage
    if (isSupported && isReady && "navigator" in window && "storage" in navigator) {
      try {
        // // @ts-ignore - The StorageManager API might not be fully typed
        navigator.storage.estimate().then((estimate) => {
          if (estimate.usage && estimate.quota) {
            const usageInMB = (estimate.usage / (1024 * 1024)).toFixed(2)
            const quotaInMB = (estimate.quota / (1024 * 1024)).toFixed(0)
            setDbSize(`${usageInMB} MB / ${quotaInMB} MB`)
          }
        })
      } catch (e) {
        console.error("Error estimating storage:", e)
      }
    }
  }, [isSupported, isReady])

  if (!isSupported) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="destructive" className="gap-1">
              <AlertCircle className="h-3 w-3" />
              <span>DB Not Supported</span>
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>Your browser doesn't support IndexedDB.</p>
            <p>Some features may not work properly.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  if (error) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="destructive" className="gap-1">
              <AlertCircle className="h-3 w-3" />
              <span>DB Error</span>
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>{error}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="outline" className="gap-1">
            <Database className="h-3 w-3" />
            <span>Local DB</span>
            {isReady && <Check className="h-3 w-3 text-green-500" />}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>IndexedDB Status: {isReady ? "Connected" : "Connecting..."}</p>
          {dbSize && <p>Storage: {dbSize}</p>}
          <p className="text-muted-foreground mt-1 text-xs">All data is stored locally in your browser</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
