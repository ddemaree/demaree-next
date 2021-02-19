const axios = require('axios')
const path = require('path')

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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      tags: [String!]
      date: Date @dateformat
      featured_image: File @fileByRelativePath
      featured_image_url: String
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions: { createPage} }) => {
  const result = await graphql(
    `
    query CreatePagesQuery {
      blogPosts: allFile(filter: {relativePath: {glob: "blog/**/*.{md,mdx}"}}) {
        edges {
          previous {
            relativePath
          }
          next {
            relativePath
          }
          node {
            id
            relativePath
            name
            mdxDoc: childMdx {
              frontmatter {
                slug
                title
              }
            }
            remarkDoc: childMarkdownRemark {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    }
  `
  )

  const blogPostEdges = result.data.blogPosts.edges

  blogPostEdges.forEach((edge, index) => {
    const post = edge.node
    const previousPost = edge.previous
    const nextPost = edge.next
    let slug;
    
    if(post.name.match(/^\_/)) return;

    if(post.remarkDoc) {
      slug = post.remarkDoc.frontmatter.slug;
    } else if(post.mdxDoc) {
      slug = post.mdxDoc.frontmatter.slug;
    } else {
      slug = post.name;
    }

    const pagePath = `/p/${slug}`;
    console.log(post.relativePath, pagePath, post.name)

    createPage({
      path: pagePath,
      component: path.resolve('src/templates/single-post.js'),
      context: {
        slug,
        filePath: post.relativePath,
        previousFilePath: (previousPost && previousPost.relativePath),
        nextFilePath: (nextPost && nextPost.relativePath)
      }
    })
  })
}