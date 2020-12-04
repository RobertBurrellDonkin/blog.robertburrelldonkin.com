require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `A Life Engineering Software`,
    // Default title of the page
    siteTitleAlt: `A Life Engineering Software`,
    // Can be used for e.g. JSONLD
    siteHeadline: `A Life Engineering Software`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://blog.robertburrelldonkin.com`,
    // Used for SEO
    siteDescription: `Professional online journal focussing on software engineering using open source, agile and lean methodologies in programming languages including Java, Scala, JavaScript, Ruby and Python featuring technologies such as Spring Boot and Apache Kafka`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@itstechupnorth`,
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
            title: `Tags`,
            slug: `/tags`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Thanks`,
            slug: `/thanks`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/itstechupnorth`,
          },
          {
            name: `Apache`,
            url: `https://home.apache.org/~rdonkin/`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/RobertBurrellDonkin`,
          },
          {
            name: `Curriculum Vitae`,
            url: `https://www.robertburrelldonkin.com`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/robertburrelldonkin`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `A Life Engineering Software`,
        short_name: `engineering-blog`,
        description: `Professional online journal focussing on software engineering using open source, agile and lean methodologies in programming languages including Java, Scala, JavaScript, Ruby and Python featuring technologies such as Spring Boot and Apache Kafka`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
