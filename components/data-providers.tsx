"use client"

import { AlertCircle } from "lucide-react"
import type React from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AppModeProvider } from "../contexts/app-mode-context"
import { GearProvider } from "../contexts/gear-context"
import { KitsProvider } from "../contexts/kits-context"
import { ListsProvider } from "../contexts/lists-context"
import { useIndexedDB } from "../hooks/use-indexed-db"

export const DataProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isSupported, isReady, error } = useIndexedDB()

  if (!isSupported) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Browser Not Supported</AlertTitle>
        <AlertDescription>
          Your browser does not support IndexedDB. Please use a modern browser to access all features.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Database Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <AppModeProvider>
        <GearProvider>
          <KitsProvider>
            <ListsProvider>{children}</ListsProvider>
          </KitsProvider>
        </GearProvider>
      </AppModeProvider>
    </>
  )
}
