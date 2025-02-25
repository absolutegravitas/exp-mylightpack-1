import * as React from "react"

const Container = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  ({ className: _className, ...props }, ref) => (
    <div ref={ref} className="relative mx-auto w-full max-w-7xl p-4 md:p-8" {...props} />
  )
)
Container.displayName = "Container"

export { Container }
