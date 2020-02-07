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
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: process.env.GHOST_API_URL,
        contentApiKey: process.env.GHOST_CONTENT_API_KEY
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: "bitsandletters.club",
        protocol: "https",
        hostingWPCOM: false,
        useACF: false,
        auth: {
          jwt_user: process.env.WP_JWT_USER,
          jwt_pass: process.env.WP_JWT_PASSWORD,
        },
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
