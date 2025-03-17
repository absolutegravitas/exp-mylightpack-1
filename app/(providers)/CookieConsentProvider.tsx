// app/(providers)/CookieConsentProvider.tsx
"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import CookieConsent from "@/components/cookie-consent"

const CookieConsentContext = createContext<{
  consent: boolean | null
  acceptCookies: () => void
  declineCookies: () => void
} | null>(null)

export const CookieConsentProvider = ({ children }: { children: React.ReactNode }) => {
  const [consent, setConsent] = useState<boolean | null>(null)

  useEffect(() => {
    const consentCookie = document.cookie.includes("cookieConsent")
    if (consentCookie) {
      const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)cookieConsent\s*=\s*([^;]*).*$)|^.*$/, "$1")
      setConsent(cookieValue === "accepted")
    }
  }, [])

  const acceptCookies = () => {
    setConsent(true)
    document.cookie = "cookieConsent=accepted; max-age=31536000; path=/"
  }

  const declineCookies = () => {
    setConsent(false)
    document.cookie = "cookieConsent=declined; max-age=31536000; path=/"
  }

  return (
    <CookieConsentContext.Provider value={{ consent, acceptCookies, declineCookies }}>
      <CookieConsent variant="default" onAcceptCallback={acceptCookies} onDeclineCallback={declineCookies} />
      {children}
    </CookieConsentContext.Provider>
  )
}

export const useCookieConsent = () => useContext(CookieConsentContext)
