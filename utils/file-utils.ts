export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}

/**
 * Convert a File object to an ArrayBuffer
 */
export const fileToArrayBuffer = (file: File): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onload = () => resolve(reader.result as ArrayBuffer)
    reader.onerror = (error) => reject(error)
  })
}

/**
 * Generate a unique ID
 */
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

/**
 * Determine the file type based on the file extension
 */
export const getFileType = (fileName: string): "image" | "pdf" | "txt" | "unknown" => {
  const extension = fileName.split(".").pop()?.toLowerCase() || ""

  if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(extension)) {
    return "image"
  } else if (extension === "pdf") {
    return "pdf"
  } else if (extension === "txt") {
    return "txt"
  }

  return "unknown"
}

/**
 * Get appropriate mime type for a file
 */
export const getMimeType = (fileName: string): string => {
  const extension = fileName.split(".").pop()?.toLowerCase() || ""

  const mimeTypes: Record<string, string> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    pdf: "application/pdf",
    txt: "text/plain",
  }

  return mimeTypes[extension] || "application/octet-stream"
}
