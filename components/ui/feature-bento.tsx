import { Check, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const FeatureBento = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-4">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">Something new!</h2>
            <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight lg:max-w-lg">
              Managing a small business today is already tough.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-4">
          <div className="bg-muted flex aspect-square h-full w-full flex-col justify-between rounded-md p-6 lg:col-span-2 lg:row-span-2">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster than ever.
              </p>
            </div>
          </div>

          <div className="bg-muted flex aspect-square h-full flex-col justify-between rounded-md p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster than ever.
              </p>
            </div>
          </div>

          <div className="bg-muted flex aspect-square h-full flex-col justify-between rounded-md p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster than ever.
              </p>
            </div>
          </div>

          <div className="bg-muted flex aspect-square h-full flex-col justify-between rounded-md p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster than ever.
              </p>
            </div>
          </div>

          <div className="bg-muted flex aspect-square h-full flex-col justify-between rounded-md p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster than ever.
              </p>
            </div>
          </div>

          <div className="bg-muted flex aspect-square h-full flex-col justify-between rounded-md p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster than ever.
              </p>
            </div>
          </div>

          <div className="bg-muted flex aspect-square h-full flex-col justify-between rounded-md p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster than ever.
              </p>
            </div>
          </div>

          <div className="bg-muted flex h-full flex-col justify-between rounded-md p-6 lg:col-span-2">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster than ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
