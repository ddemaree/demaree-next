require('dotenv').config();

const path = require('path')

const siteURL = (process.env.CONTEXT === "production" 
  ? process.env.URL
  : process.env.DEPLOY_PRIME_URL) || "localhost:9000";

module.exports = {
  siteMetadata: {
    title: `demaree.me`,
    description: `David's web site`,
    author: `@ddemaree`,
    buildUrl: (siteURL || "")
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/notes`,
        name: `notes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/data`,
        name: `data`, 
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`
      }
    },
    `gatsby-remark-images`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
      }
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        // This folder will be created if it doesn’t exist.
        uploadFolder: 'gats',
      },
    },
    `gatsby-transformer-json`,
  ],
}