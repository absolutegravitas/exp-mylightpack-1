"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import * as React from "react"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="flex space-x-2">
      <Button variant="ghost" size="icon" onClick={() => setTheme('light')}> 
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <Button variant="ghost" size="icon" onClick={() => setTheme('dark')}> 
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <Button variant="ghost" size="icon" onClick={() => setTheme('system')}> 
        <span className="sr-only">System</span>
      </Button>
    </div>
  );
}
