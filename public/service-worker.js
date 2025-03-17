// Service Worker for myLightPack PWA

const CACHE_NAME = "myLightPack-v1"
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/icon-192x192.png",
  "/icon-512x512.png",
  "/logo.svg",
]

// Install event - cache all the static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Opened cache")
        return cache.addAll(ASSETS_TO_CACHE)
      })
      .then(() => self.skipWaiting())
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("Deleting old cache:", cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => self.clients.claim())
  )
})

// Fetch event - respond with cached assets or fetch from network
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return
  }

  // Skip cache for API requests
  if (event.request.url.includes("/api/")) {
    return
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }

      // Clone the request because it's a one-time use stream
      const fetchRequest = event.request.clone()

      return fetch(fetchRequest)
        .then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response
          }

          // Clone the response because it's a one-time use stream
          const responseToCache = response.clone()

          caches.open(CACHE_NAME).then((cache) => {
            // Cache the fetched resource
            cache.put(event.request, responseToCache)
          })

          return response
        })
        .catch(() => {
          // If the network is unavailable, return a fallback page for navigation requests
          if (event.request.mode === "navigate") {
            return caches.match("/")
          }

          return new Response("Network error happened", {
            status: 408,
            headers: { "Content-Type": "text/plain" },
          })
        })
    })
  )
})

// Background sync for offline data
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-pack-lists") {
    event.waitUntil(syncPackLists())
  } else if (event.tag === "sync-gear-items") {
    event.waitUntil(syncGearItems())
  }
})

// Push notifications
self.addEventListener("push", (event) => {
  if (!event.data) return

  const notification = event.data.json()
  const title = notification.title || "myLightPack"
  const options = {
    body: notification.body || "New notification",
    icon: "/icon-192x192.png",
    badge: "/badge-icon.png",
    data: notification.data || {},
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

// Notification click event
self.addEventListener("notificationclick", (event) => {
  event.notification.close()

  // Check if there's a URL to open
  const urlToOpen =
    event.notification.data && event.notification.data.url
      ? new URL(event.notification.data.url, self.location.origin).href
      : "/"

  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      // Check if there's already a window open
      for (const client of clientList) {
        if (client.url === urlToOpen && "focus" in client) {
          return client.focus()
        }
      }

      // If no window is open, open a new one
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen)
      }
    })
  )
})

// Helper functions for background sync
async function syncPackLists() {
  // Implement the logic to sync pack lists with the server
  // This would involve getting data from IndexedDB and sending it to your server
  console.log("Syncing pack lists...")
  // In this example, we're working completely client-side, so this is just a placeholder
}

async function syncGearItems() {
  // Implement the logic to sync gear items with the server
  console.log("Syncing gear items...")
  // In this example, we're working completely client-side, so this is just a placeholder
}
