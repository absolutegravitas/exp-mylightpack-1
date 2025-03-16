import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmptyPlaceholder() {
  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed dark:border-gray-700 dark:bg-zinc-900/20">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <PlusCircle className="text-muted-foreground h-10 w-10" />
        <h3 className="mt-4 text-lg font-semibold">No pack lists created</h3>
        <p className="text-muted-foreground mt-2 mb-4 text-sm">
          You haven't created any pack lists yet. Create one for your next adventure.
        </p>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Pack List
        </Button>
      </div>
    </div>
  )
}
