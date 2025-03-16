// Service worker registration utility

/**
 * Register the service worker and set up event handling
 */
export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        const registration = await navigator.serviceWorker.register("/service-worker.js", {
          scope: "/",
        })

        console.log("ServiceWorker registered with scope:", registration.scope)

        // Set up update handling
        registration.onupdatefound = () => {
          const installingWorker = registration.installing
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  // At this point, the old content will have been purged and
                  // the fresh content will have been added to the cache.
                  console.log("New content is available; please refresh.")

                  // Show notification to user about update
                  showUpdateNotification()
                } else {
                  // At this point, everything has been precached.
                  console.log("Content is cached for offline use.")
                }
              }
            }
          }
        }
      } catch (error) {
        console.error("ServiceWorker registration failed:", error)
      }
    })

    // Handle controller change (when the service worker is updated)
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      console.log("Service worker controller changed. Reloading...")
    })
  }
}

/**
 * Request notification permission and subscribe to push notifications
 */
export async function requestNotificationPermission(): Promise<boolean> {
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications")
    return false
  }

  try {
    const permission = await Notification.requestPermission()
    if (permission === "granted") {
      console.log("Notification permission granted")

      // Subscribe to push notifications if available
      await subscribeToPushNotifications()
      return true
    } else {
      console.log("Notification permission denied")
      return false
    }
  } catch (error) {
    console.error("Error requesting notification permission:", error)
    return false
  }
}

/**
 * Attempts to subscribe the user to push notifications.
 * This is a placeholder - in a real app, you would use the Web Push API.
 */
async function subscribeToPushNotifications() {
  try {
    if ("PushManager" in window) {
      await navigator.serviceWorker.ready

      // This would typically involve getting a VAPID public key from your server
      // and using it to subscribe to push notifications.
      // For now, this is just a placeholder.
      console.log("Push notifications are supported but not implemented in this demo.")
    }
  } catch (error) {
    console.error("Error subscribing to push notifications:", error)
  }
}

/**
 * Show a notification to the user about a service worker update
 */
function showUpdateNotification() {
  // In a real app, you might want to show a toast or modal here
  console.log("App update available. Refresh to update.")

  // This is where you'd implement a UI to inform the user about the update
}

/**
 * Register for background sync
 * @param tag The sync tag to identify the sync operation
 */
export async function registerBackgroundSync(tag: string): Promise<boolean> {
  try {
    if ("serviceWorker" in navigator && "SyncManager" in window) {
      const registration = await navigator.serviceWorker.ready
      await (
        registration as ServiceWorkerRegistration & { sync: { register(tag: string): Promise<void> } }
      ).sync.register(tag)
      console.log(`Background sync registered for ${tag}`)
      return true
    }
    console.log("Background sync not supported")
    return false
  } catch (error) {
    console.error("Error registering background sync:", error)
    return false
  }
}

/**
 * Check if the app is installed (in standalone mode)
 */
interface SafariNavigator extends Navigator {
  standalone?: boolean
}

export function isAppInstalled(): boolean {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    // For iOS Safari
    ("standalone" in window.navigator && (window.navigator as SafariNavigator).standalone === true)
  )
}

/**
 * Listen for beforeinstallprompt event to detect when the app can be installed
 * @param callback Function to call when the app can be installed
 */
export function listenForInstallPrompt(callback: (event: Event) => void): () => void {
  const handler = (event: Event) => {
    // Prevent the default browser install prompt
    event.preventDefault()
    // Notify the app that we can prompt the user
    callback(event)
  }

  window.addEventListener("beforeinstallprompt", handler)

  // Return a function to remove the listener
  return () => {
    window.removeEventListener("beforeinstallprompt", handler)
  }
}
