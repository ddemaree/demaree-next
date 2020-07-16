require('dotenv').config();

const path = require('path')

console.log(process.env.DEPLOY_PRIME_URL)
console.log(process.env.URL)

const siteURL = (process.env.CONTEXT === "production" 
  ? process.env.URL
  : process.env.DEPLOY_PRIME_URL);

console.log(`Site URL is ${siteURL}`)

module.exports = {
  siteMetadata: {
    title: `demaree.me`,
    description: `David's web site`,
    author: `@ddemaree`,
    buildUrl: (siteURL || "")
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
