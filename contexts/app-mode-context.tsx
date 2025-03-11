"use client"

import type React from "react"
import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { deleteDatabase } from "../utils/db-service"

export type AppMode = "regular" | "testDrive"

interface AppModeContextType {
  mode: AppMode
  setMode: (mode: AppMode) => void
  isTestDrive: boolean
  testDriveStartTime: number | null
  testDriveTimeRemaining: number | null // in milliseconds
  testDriveExpiresAt: Date | null
  startTestDrive: () => Promise<void>
  endTestDrive: () => Promise<void>
}

const TEST_DRIVE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

const AppModeContext = createContext<AppModeContextType | null>(null)

export const useAppMode = () => {
  const context = useContext(AppModeContext)
  if (!context) {
    throw new Error("useAppMode must be used within an AppModeProvider")
  }
  return context
}

export const AppModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<AppMode>("regular")
  const [testDriveStartTime, setTestDriveStartTime] = useState<number | null>(null)
  const [testDriveTimeRemaining, setTestDriveTimeRemaining] = useState<number | null>(null)
  const [testDriveExpiresAt, setTestDriveExpiresAt] = useState<Date | null>(null)

  // Clean up test drive helper function
  const cleanupTestDrive = useCallback(async () => {
    try {
      setMode("regular")
      setTestDriveStartTime(null)
      setTestDriveTimeRemaining(null)
      setTestDriveExpiresAt(null)

      // Clean up localStorage
      localStorage.removeItem("appMode")
      localStorage.removeItem("testDriveStartTime")

      // Delete the test drive database
      await deleteDatabase(true)
    } catch (error) {
      console.error("Error cleaning up test drive:", error)
    }
  }, [])

  // Check for existing test drive session on mount
  useEffect(() => {
    const storedMode = localStorage.getItem("appMode")
    const storedStartTime = localStorage.getItem("testDriveStartTime")

    if (storedMode === "testDrive" && storedStartTime) {
      const startTime = Number.parseInt(storedStartTime, 10)
      const currentTime = Date.now()
      const elapsedTime = currentTime - startTime

      if (elapsedTime < TEST_DRIVE_DURATION) {
        // Test drive still valid
        setMode("testDrive")
        setTestDriveStartTime(startTime)
        setTestDriveTimeRemaining(TEST_DRIVE_DURATION - elapsedTime)
        setTestDriveExpiresAt(new Date(startTime + TEST_DRIVE_DURATION))
      } else {
        // Test drive expired, clean up
        cleanupTestDrive()
      }
    }
  }, [cleanupTestDrive])

  // Update remaining time periodically
  useEffect(() => {
    if (mode !== "testDrive" || !testDriveStartTime) return

    const interval = setInterval(() => {
      const currentTime = Date.now()
      const elapsedTime = currentTime - testDriveStartTime
      const remaining = TEST_DRIVE_DURATION - elapsedTime

      if (remaining <= 0) {
        // Test drive expired
        cleanupTestDrive()
        clearInterval(interval)
      } else {
        setTestDriveTimeRemaining(remaining)
      }
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [mode, testDriveStartTime, cleanupTestDrive])

  const startTestDrive = async () => {
    try {
      const startTime = Date.now()

      // Delete any existing test drive database
      await deleteDatabase(true)

      setMode("testDrive")
      setTestDriveStartTime(startTime)
      setTestDriveTimeRemaining(TEST_DRIVE_DURATION)
      setTestDriveExpiresAt(new Date(startTime + TEST_DRIVE_DURATION))

      // Store in localStorage for persistence
      localStorage.setItem("appMode", "testDrive")
      localStorage.setItem("testDriveStartTime", startTime.toString())
    } catch (error) {
      console.error("Error starting test drive:", error)
      throw error
    }
  }

  const endTestDrive = async () => {
    try {
      await cleanupTestDrive()
    } catch (error) {
      console.error("Error ending test drive:", error)
      throw error
    }
  }

  return (
    <AppModeContext.Provider
      value={{
        mode,
        setMode,
        isTestDrive: mode === "testDrive",
        testDriveStartTime,
        testDriveTimeRemaining,
        testDriveExpiresAt,
        startTestDrive,
        endTestDrive,
      }}
    >
      {children}
    </AppModeContext.Provider>
  )
}
