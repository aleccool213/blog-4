require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Caffeinated Coding`,
    // Default title of the page
    siteTitleAlt: `Caffeinated Coding - Alec Brunelle's Blog`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Caffeinated Coding - Alec Brunelle's Blog`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://blog.alec.coffee`,
    // Used for SEO
    siteDescription: `Written by Alec Brunelle who lives and works in Toronto building useful things.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@yourboygbigal`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Uses`,
            slug: `/uses`,
          },
          {
            title: `Contact`,
            slug: `/contact`,
          },
          {
            title: `Newsletter`,
            slug: `/newsletter`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/yourboybigal`,
          },
          {
            name: `Github`,
            url: `https://github.com/aleccool213`,
          },
          {
            name: `Unsplash`,
            url: `https://unsplash.com/@aleccool21`,
          },
        ],
        feedTitle: "Caffeinated Coding - Alec Brunelle's Blog",
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn:
          "https://3ffa3d7b4a394317b74a99b662bab715@o361849.ingest.sentry.io/4045412",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Caffeinated Coding - Alec Brunelle's Blog`,
        short_name: `caffeinated-coding`,
        description: `Written by Alec Brunelle who lives and works in Toronto building useful things.`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#996633`,
        display: `standalone`,
        icon: "src/favicon.png",
      },
    },
    `gatsby-plugin-favicon`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-ackee-tracker",
      options: {
        // Domatin ID found when adding a domain in the admin panel.
        domainId: "348d7407-1f83-41dc-a620-f1b8de3acb15",
        // URL to Server eg: "https://analytics.test.com".
        server: "https://analytics.alec.coffee",
        // Disabled analytic tracking when running localy
        ignoreLocalhost: true,
        // If enabled it will collect info on OS, BrowserInfo, Device  & ScreenSize
        // False due to detailed information being personalized:
        // https://github.com/electerious/Ackee/blob/master/docs/Anonymization.md#personal-data
        detailed: false,
      },
    },
  ].filter(Boolean),
};
