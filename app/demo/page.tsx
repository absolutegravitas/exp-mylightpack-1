import { GearLayout } from "@/components/gear-layout"
import { GearProvider } from "@/hooks/use-gear"

export default function GearPage() {
  return (
    <GearProvider>
      <div className="flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col">
          <GearLayout defaultLayout={[265, 440, 655]} navCollapsedSize={4} />
        </main>
      </div>
    </GearProvider>
  )
}
