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
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const ghostEdges = result.data.ghostPosts.edges
  ghostEdges.forEach(edge => {
    const { slug } = edge.node

    createPage({
      path: `/g/${slug}`,
      component: require.resolve(`./src/templates/ghost-post.js`),
      context: { slug },
    }) 
  })

  const wpPostEdges = result.data.wpPosts.edges
  wpPostEdges.forEach(edge => {
    const { slug } = edge.node

    createPage({
      path: `/${slug}`,
      component: require.resolve(`./src/templates/wordpress-post.js`),
      context: { slug },
    }) 
  })

  const ghostPageEdges = result.data.ghostPages.edges
  ghostPageEdges.forEach(edge => {
    const { slug } = edge.node

    createPage({
      path: `/g/${slug}`,
      component: require.resolve(`./src/templates/ghost-page.js`),
      context: { slug },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  createWpPosts(graphql, createPage, reporter);
}