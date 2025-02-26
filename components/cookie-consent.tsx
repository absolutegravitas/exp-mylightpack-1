"use client"

import { CookieIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CookieConsent({
  variant = "default",
  mode = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [hide, setHide] = useState(false)

  const accept = () => {
    setIsOpen(false)
    document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT"
    setTimeout(() => {
      setHide(true)
    }, 700)
    onAcceptCallback()
  }

  const decline = () => {
    setIsOpen(false)
    setTimeout(() => {
      setHide(true)
    }, 700)
    onDeclineCallback()
  }

  useEffect(() => {
    try {
      setIsOpen(true)
      if (document.cookie.includes("cookieConsent=true")) {
        if (!mode) {
          setIsOpen(false)
          setTimeout(() => {
            setHide(true)
          }, 700)
        }
      }
    } catch (error) {
      console.error("Error checking cookie consent:", error)
    }
  }, [])

  return variant === "default" ? (
    <div
      className={cn(
        "fixed right-0 bottom-0 left-0 z-[200] w-full p-4 duration-700 sm:bottom-4 sm:left-4 sm:max-w-md sm:p-0",
        !isOpen
          ? "translate-y-8 opacity-0 transition-[opacity,transform]"
          : "translate-y-0 opacity-100 transition-[opacity,transform]",
        hide && "hidden"
      )}
    >
      <div className="dark:bg-card bg-background border-border rounded-lg border shadow-lg sm:rounded-md">
        <div className="grid gap-2">
          <div className="border-border flex h-12 items-center justify-between border-b p-3 sm:h-14 sm:p-4">
            <h1 className="text-base font-medium sm:text-lg">We use cookies</h1>
            <CookieIcon className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem]" />
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-muted-foreground text-start text-xs font-normal sm:text-sm">
              We use cookies to ensure you get the best experience on our website. For more information on how we use
              cookies, please see our cookie policy.
              <br />
              <br />
              <span className="text-xs">
                By clicking
                <span className="font-medium text-black dark:text-white"> Accept</span>, you agree to our use of
                cookies.{" "}
                <a href="#" className="text-xs underline">
                  Learn more.
                </a>
              </span>
              <br />
            </p>
          </div>
          <div className="border-border dark:bg-background/20 flex flex-col gap-2 border-t p-3 sm:flex-row sm:p-4 sm:py-5">
            <Button onClick={accept} className="w-full">
              Accept
            </Button>
            <Button onClick={decline} className="w-full" variant="secondary">
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : variant === "small" ? (
    <div
      className={cn(
        "fixed right-0 bottom-0 left-0 z-[200] w-full p-4 duration-700 sm:bottom-4 sm:left-4 sm:max-w-md sm:p-0",
        !isOpen
          ? "translate-y-8 opacity-0 transition-[opacity,transform]"
          : "translate-y-0 opacity-100 transition-[opacity,transform]",
        hide && "hidden"
      )}
    >
      <div className="dark:bg-card bg-background border-border m-0 rounded-lg border shadow-lg sm:m-3">
        <div className="flex items-center justify-between p-3">
          <h1 className="text-base font-medium sm:text-lg">We use cookies</h1>
          <CookieIcon className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem]" />
        </div>
        <div className="-mt-2 p-3">
          <p className="text-muted-foreground text-left text-xs sm:text-sm">
            We use cookies to ensure you get the best experience on our website. For more information on how we use
            cookies, please see our cookie policy.
          </p>
        </div>
        <div className="mt-2 flex flex-col items-center gap-2 border-t p-3 sm:flex-row">
          <Button onClick={accept} className="h-8 w-full text-xs sm:h-9 sm:text-sm">
            Accept
          </Button>
          <Button onClick={decline} className="h-8 w-full text-xs sm:h-9 sm:text-sm" variant="outline">
            Decline
          </Button>
        </div>
      </div>
    </div>
  ) : (
    variant === "minimal" && (
      <div
        className={cn(
          "fixed right-0 bottom-0 left-0 z-[200] w-full p-4 duration-700 sm:bottom-4 sm:left-4 sm:max-w-[300px] sm:p-0",
          !isOpen
            ? "translate-y-8 opacity-0 transition-[opacity,transform]"
            : "translate-y-0 opacity-100 transition-[opacity,transform]",
          hide && "hidden"
        )}
      >
        <div className="dark:bg-card bg-background border-border m-0 rounded-lg border shadow-lg sm:m-3">
          <div className="border-border flex items-center justify-between border-b p-3">
            <div className="flex items-center gap-2">
              <CookieIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs font-medium sm:text-sm">Cookie Notice</span>
            </div>
          </div>
          <div className="p-3">
            <p className="text-muted-foreground text-[11px] sm:text-xs">
              We use cookies to enhance your browsing experience.
            </p>
            <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row">
              <Button onClick={accept} size="sm" className="h-6 w-full px-2 text-[11px] sm:h-7 sm:px-3 sm:text-xs">
                Accept
              </Button>
              <Button
                onClick={decline}
                size="sm"
                variant="ghost"
                className="h-6 w-full px-2 text-[11px] sm:h-7 sm:px-3 sm:text-xs"
              >
                Decline
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
