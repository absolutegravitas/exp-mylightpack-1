const policies = {
  "default-src": ["'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
  "script-src": [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    "https://pay.google.com", // for google pay
    "https://applepay.cdn-apple.com", // for apple pay
    "https://va.vercel-scripts.com", // for vercel
    "https://checkout.stripe.com", // for stripe
    "https://js.stripe.com", // for stripe
    "https://maps.googleapis.com", // for google maps
    "https://*.maps.googleapis.com", // for google maps
    "https://fonts.googleapis.com", // for google fonts
    "https://fonts.gstatic.com", // for google fonts
    "http://cdn.jsdelivr.net", // for jsdelivr
    "https://vercel.live/", // for vercel feedback
    "https://unpkg.com", // for unpkg
    "https://www.google.com", // for reCAPTCHA
    "https://www.gstatic.com",
    "https://vercel.live", // for vercel live
  ],
  "child-src": ["'self'", "http://cdn.jsdelivr.net"],
  "style-src": [
    "'self'",
    "'unsafe-inline'",
    "https://fonts.googleapis.com", // for google fonts
    "https://fonts.gstatic.com", // for google fonts
    "http://cdn.jsdelivr.net", // for jsdelivr
  ],
  "img-src": [
    "'self'",
    "data:",
    "blob:",
    "https://*.stripe.com", // for stripe

    "https://images.unsplash.com", // for unsplash
    "http://cdn.jsdelivr.net",
    "https://maps.gstatic.com",
    "https://*.maps.gstatic.com", // for google maps

    "https://placehold.co", // for placehold

    "https://pay.google.com", // for google pay
    "https://lh3.googleusercontent.com", // for google login
    "https://media.licdn.com", // for linkedin login
    "https://platform-lookaside.fbsbx.com", // for facebook login
  ],
  "font-src": ["'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com", "https://cdn.jsdelivr.net"],
  "frame-src": [
    "'self'",
    "https://checkout.stripe.com", // for stripe
    "https://pay.google.com", // for google pay
    "https://applepay.cdn-apple.com", // for apple pay
    "https://js.stripe.com", // for stripe
    "https://hooks.stripe.com", // for stripe
    "https://maps.googleapis.com", // for google maps
    "https://www.google.com", // for reCAPTCHA
    "https://www.gstatic.com", // for reCAPTCHA
    "https://vercel.live", // for vercel live
  ],
  "connect-src": [
    "'self'",
    "https://checkout.stripe.com", // for stripe
    "https://pay.google.com", // for google pay
    "https://applepay.cdn-apple.com", // for apple pay
    "https://api.stripe.com", // for stripe
    "https://maps.googleapis.com", // for google maps
    "https://*.maps.googleapis.com", // for google maps
  ],
}

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(" ")}`
    }
    return ""
  })
  .join("; ")
