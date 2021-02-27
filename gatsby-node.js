const axios = require('axios')
const path = require('path')
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from Substack API at build time
  const resultData = await axios.get("https://demaree.substack.com/api/v1/posts", {params: { limit: 100 }}).then(r => r.data)

  resultData.forEach(post => {
    const { title, subtitle, post_date } = post

    // create node for build time data example in the docs
    createNode({
      // nameWithOwner and url are arbitrary fields from the data
      title,
      subtitle,
      date: post_date,
      url: post.canonical_url,
      id: post.uuid,
      featured_image_url: post.cover_image,
      parent: null,
      children: [],
      internal: {
        type: `SubstackPost`,
        contentDigest: createContentDigest(post),
      },
    })
    
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    const slugPath = value.replace(/^(\/\d{4})*\/(\d{4}\-\d{2}-\d{2}\-)*/, '').replace(/\/$/, '')
    
    const relativePath = node.fileAbsolutePath.replace(__dirname + '/content/', '')
    const [section] = relativePath.split("/", 1)

    createNodeField({
      name: `slug`,
      node,
      value: (slugPath || value),
    })

    createNodeField({
      name: `section`,
      node,
      value: section
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      date: Date @dateformat
      featured_image: File @fileByRelativePath
      featured_image_url: String
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions: { createPage} }) => {
  const result = await graphql(`
    query CreatePagesQuery {
      tagsGroup: allMdx(limit: 2000, filter: {}) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      blogPosts: allMdx(filter: { fields: { section: {eq: "blog"}} }) {
        edges {
          previous {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          next {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);


  const postTemplate = path.resolve('src/templates/single-post.js')
  const tagTemplate = path.resolve('src/templates/tags-page.js')

  const blogPostEdges = result.data.blogPosts.edges
  blogPostEdges.forEach(edge => {
    const previousPost = edge.previous
    const nextPost = edge.next
    const post = edge.node
    const postSlug = post.fields.slug

    createPage({
      path: `/p/${postSlug}`,
      component: postTemplate,
      context: {
        postId: (post && post.id),
        previousId: (previousPost && previousPost.id),
        nextId: (nextPost && nextPost.id),
        post,
        previousPost,
        nextPost
      }
    })
  })

  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    const tagSlug = _.kebabCase(_.lowerCase(tag.fieldValue))
    createPage({
      path: `/tags/${tagSlug}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}