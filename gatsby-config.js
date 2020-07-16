require('dotenv').config();

const path = require('path')

console.log(process.env.BUILD_PRIME_URL)
console.log(process.env.URL)

module.exports = {
  siteMetadata: {
    title: `demaree.me`,
    description: `David's web site`,
    author: `@ddemaree`,
    buildUrl: (process.env.BASE_URL || "")
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://demaree.substack.com/feed`,
        name: `SubstackFeed`
      }
    },
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
    `gatsby-plugin-sharp`
  ],
}
