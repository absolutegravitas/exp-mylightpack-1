"use client"

import { Search as SearchIcon, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchProps {
  placeholder?: string
  className?: string
  onChange?: (value: string) => void
}

export function Search({ placeholder = "Search...", className, onChange }: SearchProps) {
  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    onChange?.(newValue)
  }

  const handleClear = () => {
    setValue("")
    onChange?.("")
  }

  return (
    <div className={`relative ${className}`}>
      <SearchIcon className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
      <Input
        type="search"
        placeholder={placeholder}
        className="h-9 pr-8 pl-8 md:w-[200px] lg:w-[280px]"
        value={value}
        onChange={handleChange}
      />
      {value && (
        <Button variant="ghost" size="icon" className="absolute top-0 right-0 h-9 w-9 px-2.5" onClick={handleClear}>
          <X className="h-4 w-4" />
          <span className="sr-only">Clear</span>
        </Button>
      )}
    </div>
  )
}
