require('dotenv').config();

const path = require('path')

module.exports = {
  siteMetadata: {
    title: `demaree.me`,
    description: `David's web site`,
    author: `@ddemaree`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'src/sass_includes')
        ]
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-docs`,
        path: `${__dirname}/src/markdown-docs`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        "excerpt_separator": `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-embedder`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: "bitsandletters.club",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        excludedRoutes: [
          "**/jetpack/**",
          "**/redirection/**",
          "**/akismet/**",
          "**/wpcom/**",
          "**/feedback/**",
          "**/settings/**`",
        ]
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://demaree.substack.com/feed`,
        name: `SubstackFeed`
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: "UA-556801-2",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     // exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 100,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-rss-feed`,
    //   options: {
    //     url: `https://medium.com/feed/@ddemaree`,
    //     name: `MediumFeed`
    //   }
    // }
    // {
    //   resolve: `gatsby-source-tumblr`,
    //   options: {
    //     blogIdentifier: `ddemaree`,
    //     consumerKey: `QPuKF2pR1MHhU75b7MK1QFSsJMdQcxvHL4ZO3sAfKUSmVCe2fw`
    //   }
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
