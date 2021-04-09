module.exports = {
  siteMetadata: {
    title: `David Demaree`,
    description: `make web sites weird again`,
    author: `@ddemaree`,
    socials: {
      twitter: "https://twitter.com/ddemaree",
      instagram: "https://instagram.com/ddemaree",
      linkedin: "https://linkedin.com/in/ddemaree",
      github: "https://github.com/ddemaree",
      email: "demaree@hey.com"
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://demaree.space/graphql`,
        html: {
          useGatsbyImage: false,
          createStaticFiles: false,
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-emotion`
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `posts`,
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: [".mdx", ".md"],
    //     defaultLayouts: {
    //       default: require.resolve('./src/components/mdx-layout.js')
    //     }
    //   }
    // },
    // `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `demaree-dot-me-v21`,
    //     short_name: `ddm`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
