// app/(providers)/CookieConsentProvider.tsx
"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { CookieConsent } from "@/components/cookie-consent"

const CookieConsentContext = createContext({
  cookieConsentStatus: "pending",
  acceptCookies: () => {},
  declineCookies: () => {},
})

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [cookieConsentStatus, setCookieConsentStatus] = useState("pending")

  useEffect(() => {
    const consentCookie = document.cookie.includes("cookieConsent")
    if (consentCookie) {
      const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)cookieConsent\s*\=\s*([^;]*).*$)|^.*$/, "$1")
      setCookieConsentStatus(cookieValue)
    }
  }, [])

  const acceptCookies = () => {
    setCookieConsentStatus("accepted")
    document.cookie = "cookieConsent=accepted; max-age=31536000; path=/"
  }

  const declineCookies = () => {
    setCookieConsentStatus("declined")
    document.cookie = "cookieConsent=declined; max-age=31536000; path=/"
  }

  const contextValue = {
    cookieConsentStatus,
    acceptCookies,
    declineCookies,
  }

  return (
    <CookieConsentContext.Provider value={contextValue}>
      <CookieConsent variant="default" onAcceptCallback={acceptCookies} onDeclineCallback={declineCookies} />
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  return useContext(CookieConsentContext)
}
