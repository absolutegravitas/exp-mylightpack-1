"use client"

import { Download, File, FileText, FileType, ImageIcon, X } from "lucide-react"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface DocumentViewerProps {
  files: Array<{
    id: string
    name: string
    type: "image" | "pdf" | "txt" | string
    data: string
    contentType: string
  }>
  onDelete?: (fileId: string) => Promise<void>
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({ files, onDelete }) => {
  const [selectedFile, setSelectedFile] = useState<(typeof files)[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleFileClick = (file: (typeof files)[0]) => {
    setSelectedFile(file)
    setIsDialogOpen(true)
  }

  const handleDeleteFile = async (fileId: string) => {
    if (!onDelete) return

    try {
      setIsDeleting(true)
      await onDelete(fileId)
      setIsDialogOpen(false)
    } catch (error) {
      console.error("Error deleting file:", error)
    } finally {
      setIsDeleting(false)
    }
  }

  const handleDownload = (file: (typeof files)[0]) => {
    const link = document.createElement("a")
    link.href = file.data
    link.download = file.name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const renderFileIcon = (file: (typeof files)[0]) => {
    if (file.type === "image") return <ImageIcon className="h-5 w-5" />
    if (file.type === "pdf") return <File className="h-5 w-5" />
    if (file.type === "txt") return <FileText className="h-5 w-5" />
    return <FileType className="h-5 w-5" />
  }

  const renderFilePreview = (file: (typeof files)[0]) => {
    if (file.type === "image") {
      return (
        <img src={file.data || "/placeholder.svg"} alt={file.name} className="max-h-[70vh] max-w-full object-contain" />
      )
    }

    if (file.type === "pdf") {
      return <iframe src={file.data} className="h-[70vh] w-full" title={file.name} />
    }

    if (file.type === "txt") {
      // For text files, extract and display the content
      try {
        // Remove the data URL prefix to get the base64 content
        const base64Content = file.data.split(",")[1]
        const textContent = base64Content ? atob(base64Content) : ""
        return (
          <pre className="bg-muted max-h-[70vh] w-full overflow-auto rounded-md p-4 whitespace-pre-wrap">
            {textContent}
          </pre>
        )
      } catch (e) {
        return <p className="text-destructive">Error displaying text content.</p>
      }
    }

    return (
      <div className="p-8 text-center">
        <FileType className="mx-auto mb-4 h-16 w-16" />
        <p>Preview not available for this file type.</p>
        <Button onClick={() => handleDownload(file)} className="mt-4">
          <Download className="mr-2 h-4 w-4" /> Download File
        </Button>
      </div>
    )
  }

  if (files.length === 0) {
    return <p className="text-muted-foreground text-sm">No files attached</p>
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {files.map((file) => (
          <div
            key={file.id}
            className="hover:bg-accent cursor-pointer rounded-md border p-2 transition-colors"
            onClick={() => handleFileClick(file)}
          >
            <div className="bg-muted mb-2 flex aspect-square items-center justify-center rounded-md">
              {file.type === "image" ? (
                <img
                  src={file.data || "/placeholder.svg"}
                  alt={file.name}
                  className="h-full w-full rounded-md object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  {renderFileIcon(file)}
                  <span className="mt-1 text-xs uppercase">{file.type}</span>
                </div>
              )}
            </div>
            <p className="truncate text-center text-xs">{file.name}</p>
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedFile && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span className="truncate">{selectedFile.name}</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => handleDownload(selectedFile)}>
                    <Download className="h-4 w-4" />
                  </Button>
                  {onDelete && (
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDeleteFile(selectedFile.id)}
                      disabled={isDeleting}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">{renderFilePreview(selectedFile)}</div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
