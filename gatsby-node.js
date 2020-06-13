/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      featuredImage: File @link(from: "featuredImage___NODE")
    }

    type Frontmatter {
      title: String!
      featuredImageUrl: String
      featuredImageAlt: String
    }
  `)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (
    node.internal.type === "MarkdownRemark" &&
    node.frontmatter.featuredImageUrl !== null
  ) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.featuredImageUrl, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    })

    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.featuredImage___NODE = fileNode.id
    }
  }
}

const createWpPosts = async (graphql, createPage, reporter) => {
  let result = await graphql(`
    query MyQuery {
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