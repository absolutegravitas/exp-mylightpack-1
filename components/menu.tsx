import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>Add to Library</DropdownMenuItem>
        <DropdownMenuItem>Add to Playlist</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Play Next</DropdownMenuItem>
        <DropdownMenuItem>Play Later</DropdownMenuItem>
        <DropdownMenuItem>Create Station</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Like</DropdownMenuItem>
        <DropdownMenuItem>Share</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
