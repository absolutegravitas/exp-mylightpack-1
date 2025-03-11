"use client"

import { useEffect, useState } from "react"

interface IndexedDBStatus {
  isSupported: boolean
  isReady: boolean
  error: string | null
}

export const useIndexedDB = (): IndexedDBStatus => {
  const [status, setStatus] = useState<IndexedDBStatus>({
    isSupported: false,
    isReady: false,
    error: null,
  })

  useEffect(() => {
    // Check if IndexedDB is available
    const isIndexedDBSupported = typeof window !== "undefined" && "indexedDB" in window && window.indexedDB !== null

    if (!isIndexedDBSupported) {
      setStatus({
        isSupported: false,
        isReady: false,
        error: "Your browser does not support IndexedDB. Some features may not work properly.",
      })
      return
    }

    // Test if we can open a connection
    try {
      const request = window.indexedDB.open("test-db", 1)

      request.onerror = (event) => {
        setStatus({
          isSupported: true,
          isReady: false,
          error: "Failed to open IndexedDB. Make sure your browser settings allow website data storage.",
        })
      }

      request.onsuccess = (event) => {
        // Close the test database
        request.result.close()

        // Try to delete the test database
        try {
          window.indexedDB.deleteDatabase("test-db")
        } catch (e) {
          // Ignore errors on deletion
        }

        setStatus({
          isSupported: true,
          isReady: true,
          error: null,
        })
      }
    } catch (error) {
      setStatus({
        isSupported: true,
        isReady: false,
        error: "An error occurred while initializing IndexedDB. Some features may not work properly.",
      })
    }
  }, [])

  return status
}
