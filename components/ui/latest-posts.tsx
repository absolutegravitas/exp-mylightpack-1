import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export const LatestPosts = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <h4 className="font-regular max-w-xl text-3xl tracking-tighter md:text-5xl">Latest articles</h4>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex cursor-pointer flex-col gap-4 hover:opacity-75 md:col-span-2">
          <div className="bg-muted aspect-video rounded-md"></div>
          <div className="flex flex-row items-center gap-4">
            <Badge>News</Badge>
            <p className="flex flex-row items-center gap-2 text-sm">
              <span className="text-muted-foreground">By</span>{" "}
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>John Johnsen</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="max-w-3xl text-4xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-muted-foreground max-w-3xl text-base">
              Managing a small business today is already tough. Avoid further complications by ditching outdated,
              tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
        </div>
        <div className="flex cursor-pointer flex-col gap-4 hover:opacity-75">
          <div className="bg-muted aspect-video rounded-md"></div>
          <div className="flex flex-row items-center gap-4">
            <Badge>News</Badge>
            <p className="flex flex-row items-center gap-2 text-sm">
              <span className="text-muted-foreground">By</span>{" "}
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>John Johnsen</span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="max-w-3xl text-2xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-muted-foreground max-w-3xl text-base">
              Managing a small business today is already tough. Avoid further complications by ditching outdated,
              tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
        </div>
        <div className="flex cursor-pointer flex-col gap-4 hover:opacity-75">
          <div className="bg-muted aspect-video rounded-md"></div>
          <div className="flex flex-row items-center gap-4">
            <Badge>News</Badge>
            <p className="flex flex-row items-center gap-2 text-sm">
              <span className="text-muted-foreground">By</span>{" "}
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>John Johnsen</span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="max-w-3xl text-2xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-muted-foreground max-w-3xl text-base">
              Managing a small business today is already tough. Avoid further complications by ditching outdated,
              tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
