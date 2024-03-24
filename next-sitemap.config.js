// Sitemap Generator
// https://www.npmjs.com/package/next-sitemap

module.exports = {
  siteUrl: "https://www.hankyo.co",
  changefreq: "weekly",
  priority: 0.8,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/thank-you", "/thank-you/", "/builders", "/builders/*", "/components", "/components/*", "/fonts", "/fonts/*", "/layouts", "/layouts/*", "/pages", "/pages/*", "/styles", "/styles/*", "/svgs", "/svgs/*", "/_app", "/_document", "/_error", "/404", "/404/"],
  alternateRefs: [],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? []
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: "*",
        disallow: [
          "/thank-you",
          "/thank-you/",
          "/builders",
          "/builders/*",
          "/components",
          "/components/*",
          "/fonts",
          "/fonts/*",
          "/layouts",
          "/layouts/*",
          "/pages",
          "/pages/*",
          "/styles",
          "/styles/*",
          "/svgs",
          "/svgs/*",
        ]
      }
    ]
  }
}
