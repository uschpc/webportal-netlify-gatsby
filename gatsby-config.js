module.exports = {
  siteMetadata: {
    title: `USC Advanced Research Computing`,
    description: `USC's Center for Advanced Research Computing supports computational research and data-driven solutions.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-less`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID || "none",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `user-guides`,
        path: `${__dirname}/src/user-guides`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `latest-news`,
        path: `${__dirname}/src/latest-news`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `researcher-profiles`,
        path: `${__dirname}/src/researcher-profiles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `featured-story`,
        path: `${__dirname}/src/featured-story`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `feature-boxes`,
        path: `${__dirname}/src/feature-boxes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `navigation`,
        path: `${__dirname}/src/navigation`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `user-support`,
        path: `${__dirname}/src/user-support`,
      },
    },
    {
      resolve: `gatsby-plugin-minify`,
      options: {
        removeAttributeQuotes: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
      }
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
	      bucketName: 'webportal-dev-td3pl856c23o'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/browser-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
