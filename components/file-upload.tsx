"use client"

import { FileText, Image, Upload, X } from "lucide-react"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface FileUploadProps {
  onUpload: (file: File) => Promise<void>
  accept?: string
  className?: string
  label?: string
  buttonText?: string
  isUploading?: boolean
}

export function FileUpload({
  onUpload,
  accept = "image/*",
  className,
  label = "Upload file",
  buttonText = "Select file",
  isUploading = false,
}: FileUploadProps) {
  const [isDragging, setIsDragging] = React.useState(false)
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0]
      if (file) {
        setSelectedFile(file)
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (file) {
        setSelectedFile(file)
      }
    }
  }

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        await onUpload(selectedFile)
        setSelectedFile(null)
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
      } catch (error) {
        console.error("Error uploading file:", error)
      }
    }
  }

  const handleCancel = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      <Label>{label}</Label>
      <div
        className={cn(
          "cursor-pointer rounded-md border-2 border-dashed p-4 text-center transition-colors",
          isDragging ? "border-primary bg-primary/10" : "border-muted-foreground/25",
          "hover:border-primary/50"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <Input ref={fileInputRef} type="file" accept={accept} onChange={handleFileChange} className="hidden" />
        <div className="flex flex-col items-center gap-2 py-4">
          <Upload className="text-muted-foreground h-8 w-8" />
          <p className="text-muted-foreground text-sm">Drag and drop a file here, or click to select</p>
        </div>
      </div>

      {selectedFile && (
        <div className="mt-2 flex items-center justify-between rounded-md border p-2">
          <div className="flex items-center gap-2">
            {selectedFile.type.startsWith("image/") ? <Image className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
            <span className="max-w-[200px] truncate text-sm">{selectedFile.name}</span>
          </div>
          <div className="flex gap-2">
            <Button size="sm" onClick={handleUpload} disabled={isUploading}>
              {isUploading ? "Uploading..." : buttonText}
            </Button>
            <Button size="sm" variant="ghost" onClick={handleCancel} disabled={isUploading}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
