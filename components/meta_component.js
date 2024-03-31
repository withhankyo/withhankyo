// Meta Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import Head from "next/head";

export default function MetaComponent() {

  // Default meta data
  const meta = {
    title: "hankyō - Simplify Content with Our Headless CMS",
    description: "Discover hankyō, the Headless CMS for micro to small projects. Embrace simplicity and efficiency in content management. Join our waitlist now.",
    keywords: "headless, content, management, system, cms, minimal, simple",
    url: "https://www.hankyo.app/",
    image: "https://www.hankyo.app/images/opengraph/og.png",
    type: "website",
    application_name: "hankyō",
    twitter: {
      card: "summary_large_image",
      site: "@withhankyo",
    }
  };

  return (
    <Head>
      {/* Languages */}
      {/* <link rel="alternate" hrefLang="x-default" href="/" /> */}

      {/* SEO */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      {/* <link rel="canonical" href={meta.url} /> */}

      {/* Application */}
      <meta name="application-name" content={meta.application_name} />

      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={meta.url} />

      {/* Twitter */}
      <meta name="twitter:card" content={meta.twitter.card} />
      <meta name="twitter:site" content={meta.twitter.site} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {/* Theme */}
      <meta name="theme-color" content="#FCFCFC" />
      <meta name="msapplication-navbutton-color" content="#FCFCFC" />
    </Head>
  );
}
