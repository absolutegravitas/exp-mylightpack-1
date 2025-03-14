"use client"

import { format, formatDistanceToNow } from "date-fns"
import { Clock, Play, RefreshCw, StopCircle } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useAppMode } from "@/contexts/app-mode-context"
import { generateMockData } from "@/utils/mock-data"

export function TestDriveUI() {
  const { isTestDrive, testDriveTimeRemaining, testDriveExpiresAt, startTestDrive, endTestDrive } = useAppMode()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Calculate progress percentage
  const progressPercentage = testDriveTimeRemaining ? 100 - (testDriveTimeRemaining / (24 * 60 * 60 * 1000)) * 100 : 0

  const handleStartTestDrive = async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Start test drive mode
      await startTestDrive()

      // Generate mock data
      const success = await generateMockData(true)

      if (!success) {
        throw new Error("Failed to generate sample data")
      }

      // Force page reload to refresh data
      window.location.reload()
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const handleEndTestDrive = async () => {
    try {
      setIsLoading(true)
      setError(null)

      await endTestDrive()

      // Force page reload to refresh data
      window.location.reload()
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Test Drive Mode
          {isTestDrive && (
            <Badge variant="outline" className="ml-2">
              <Clock className="mr-1 h-3 w-3" /> Active
            </Badge>
          )}
        </CardTitle>
        <CardDescription>
          {isTestDrive
            ? "Try out the app with sample data without affecting your real data."
            : "Start a test drive to explore the app with sample data."}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {isTestDrive && testDriveExpiresAt && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Time remaining:</span>
              <span className="font-medium">{formatDistanceToNow(testDriveExpiresAt, { addSuffix: false })}</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <p className="text-muted-foreground text-xs">Expires: {format(testDriveExpiresAt, "PPp")}</p>
          </div>
        )}

        {error && <div className="text-destructive mt-2 text-sm">{error}</div>}
      </CardContent>

      <CardFooter>
        {isTestDrive ? (
          <Button variant="destructive" className="w-full" onClick={handleEndTestDrive} disabled={isLoading}>
            {isLoading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Ending Test Drive...
              </>
            ) : (
              <>
                <StopCircle className="mr-2 h-4 w-4" />
                End Test Drive
              </>
            )}
          </Button>
        ) : (
          <Button variant="default" className="w-full" onClick={handleStartTestDrive} disabled={isLoading}>
            {isLoading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Starting Test Drive...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Start Test Drive
              </>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
