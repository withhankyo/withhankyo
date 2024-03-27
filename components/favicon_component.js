// Favicon Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import Head from "next/head"

export default function FaviconComponent() {
  return (
    <Head>
      {/* Standard favicon */}
      <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
      {/* PNG favicons */}
      <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/png" href="/favicons/android-chrome-192x192.png" sizes="128x128" />
      <link rel="icon" type="image/png" href="/favicons/android-chrome-192x192.png" sizes="192x192" />
      <link rel="icon" type="image/png" href="/favicons/android-chrome-512x512.png" sizes="512x512" />
      {/* Apple Touch Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/favicons/apple-touch-icon-167x167.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png" />
      {/* Microsoft Tiles */}
      <meta name="msapplication-square70x70logo" content="/favicons/mstile-70x70.png" />
      <meta name="msapplication-square150x150logo" content="/favicons/mstile-150x150.png" />
      <meta name="msapplication-wide310x150logo" content="/favicons/mstile-310x150.png" />
      <meta name="msapplication-square310x310logo" content="/favicons/mstile-310x310.png" />
      {/* Safari Pinned Tab Icon */}
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#f5f6f6" />
      {/* Manifest */}
      <link rel="manifest" href="/favicons/manifest.webmanifest"></link>
    </Head>
  )
}
