"use client"

import { File, FileText, Image, Upload } from "lucide-react"
import type React from "react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface FileUploaderProps {
  onUpload: (file: File) => Promise<void>
  allowedTypes?: string
  className?: string
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  onUpload,
  allowedTypes = "image/*,.pdf,.txt",
  className,
}) => {
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setIsUploading(true)
      setError(null)

      // Simulate progress
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            clearInterval(timer)
            return 95
          }
          return prev + 5
        })
      }, 100)

      await onUpload(file)

      clearInterval(timer)
      setProgress(100)

      // Reset after 1 second
      setTimeout(() => {
        setIsUploading(false)
        setProgress(0)
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
      }, 1000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload file")
      setIsUploading(false)
      setProgress(0)
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const getFileTypeIcon = (fileType: string) => {
    if (fileType.startsWith("image/")) return <Image className="h-4 w-4" />
    if (fileType === "application/pdf") return <File className="h-4 w-4" />
    if (fileType === "text/plain") return <FileText className="h-4 w-4" />
    return <Upload className="h-4 w-4" />
  }

  return (
    <div className={className}>
      <input type="file" accept={allowedTypes} onChange={handleFileChange} className="hidden" ref={fileInputRef} />
      <Button variant="outline" size="sm" onClick={handleButtonClick} disabled={isUploading} className="w-full">
        {isUploading ? (
          <>
            <span>Uploading...</span>
          </>
        ) : (
          <>
            <Upload className="mr-2 h-4 w-4" />
            <span>Upload File</span>
          </>
        )}
      </Button>

      {isUploading && <Progress value={progress} className="mt-2 h-1" />}

      {error && <p className="text-destructive mt-1 text-xs">{error}</p>}
    </div>
  )
}
