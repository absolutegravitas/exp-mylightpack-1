import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { GearItem } from "@/lib/db"
import { cn } from "@/lib/utils"

interface GearItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: GearItem
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

export function GearItemCard({ item, aspectRatio = "square", width, height, className, ...props }: GearItemProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md dark:bg-zinc-900/50 dark:backdrop-blur-sm">
            <Image
              src={item.image}
              alt={item.name}
              width={width || 300}
              height={height || 300}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Pack</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to List</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>New List</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Summer Backpacking</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>View Details</ContextMenuItem>
          <ContextMenuItem>Compare</ContextMenuItem>
          <ContextMenuItem>Find Alternatives</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Mark as Owned</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="leading-none font-medium">{item.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-xs">{item.brand}</p>
          <Badge variant="outline" className="text-xs">
            {item.weight} lb
          </Badge>
        </div>
      </div>
    </div>
  )
}
