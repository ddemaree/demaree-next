/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const createWpPosts = async (graphql, createPage, reporter) => {
  let result = await graphql(`
    query MyQuery {
      ghostPosts: allGhostPost {
        edges {
          node {
            title
            slug
          }
        }
      }
      ghostPages: allGhostPage {
        edges {
          node {
            slug
          }
        }
      }
      wpPosts: allWordpressPost {
        edges {
          node {
            title
            slug
          }
        }
      }
      wpPages: allWordpressPage {
        edges {
          node {
            title
            slug
          }
        }
      }
      mdPages: allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              slug
              date
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const wpPostEdges = result.data.wpPosts.edges
  wpPostEdges.forEach(edge => {
    const { slug } = edge.node

    createPage({
      path: `/${slug}`,
      component: require.resolve(`./src/templates/wordpress-post.js`),
      context: { slug },
    }) 
  })

  const wpPageEdges = result.data.wpPages.edges
  wpPageEdges.forEach(edge => {
    const { slug } = edge.node

    createPage({
      path: `/${slug}`,
      component: require.resolve(`./src/templates/wordpress-page.js`),
      context: { slug },
    })
  })

  const mdPageEdges = result.data.mdPages.edges
  mdPageEdges.forEach(edge => {
    const { slug } = edge.node.frontmatter
    createPage({
      path: `/${slug}`,
      component: require.resolve(`./src/templates/markdown-page.js`),
      context: { slug },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  createWpPosts(graphql, createPage, reporter);
}