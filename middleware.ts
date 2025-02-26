import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/blog(.*)",
  "/contact(.*)",
  "/terms(.*)",
  "/privacy(.*)",
  "/feedback(.*)",
])

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}

// export default function mock() {
//   console.log("mock middleware coz clerk breaks build")
// }

// By default, clerkMiddleware() makes all routes public. This step is specifically for applications that have configured clerkMiddleware() to make all routes protected. If you have not configured clerkMiddleware() to protect all routes, you can skip this step.

// To make the sign-in route public:

//     Navigate to your middleware.ts file.
//     Create a new route matcher that matches the sign-in route, or you can add it to your existing route matcher that is making routes public.
//     Create a check to see if the user's current route is a public route. If it is not a public route, use auth.protect() to protect the route.
