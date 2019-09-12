/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  let result = await graphql(`
    query MyQuery {
      posts: allGhostPost {
        edges {
          node {
            slug
            published_at
          }
          previous {
            slug
            published_at
          }
          next {
            slug
            published_at
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

  const edges = result.data.posts.edges

  edges.forEach(edge => {
    const { slug } = edge.node

    createPage({
      path: `/posts/${slug}`,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug },
    })
  })

}