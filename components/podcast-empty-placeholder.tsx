import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PodcastEmptyPlaceholder() {
  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed dark:border-gray-700 dark:bg-zinc-900/20">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <PlusCircle className="text-muted-foreground h-10 w-10" />
        <h3 className="mt-4 text-lg font-semibold">No podcasts added</h3>
        <p className="text-muted-foreground mt-2 mb-4 text-sm">You have not added any podcasts. Add one below.</p>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Podcast
        </Button>
      </div>
    </div>
  )
}
