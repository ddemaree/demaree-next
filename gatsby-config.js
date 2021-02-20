require('dotenv').config();

const path = require('path')

const siteURL = (process.env.CONTEXT === "production" 
  ? process.env.URL
  : process.env.DEPLOY_PRIME_URL) || "localhost:9000";

console.log(`Site URL is ${siteURL}`)

module.exports = {
  siteMetadata: {
    title: `demaree.me`,
    description: `David's web site`,
    author: `@ddemaree`,
    buildUrl: (siteURL || "")
  },
  plugins: [
    `gatsby-remark-images`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              disableBgImageOnAlpha: true,
              showCaptions: ['title']
            },
          }
        ]
      }
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
              maxWidth: 900,
              disableBgImageOnAlpha: true,
              showCaptions: ['title']
            }
          }
        ]
      }
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}