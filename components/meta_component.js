// Meta Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import Head from "next/head";

export default function MetaComponent() {

  // Default meta data
  const meta = {
    title: "Empower Your Projects with Hankyō",
    description: "Hankyō is a Headless CMS that embraces minimalism and simplicity for an effortless content management and web development experience.",
    keywords: "headless, content, management, minimal, simple",
    url: "https://www.hankyo.co/",
    image: "https://www.hankyo.co/images/opengraph/og.png",
    type: "website",
    application_name: "Hankyō",
    twitter: {
      card: "summary_large_image",
      site: "@withhankyo",
    },
    fonts: "https://use.typekit.net/sch6dmk.css",
  };

  return (
    <Head>
      {/* Languages */}
      <link rel="alternate" hrefLang="x-default" href="/" />

      {/* SEO */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={meta.url} />

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

      {/* Preloaders */}
      <link rel="dns-prefetch" href={meta.fonts} />
    </Head>
  );
}
