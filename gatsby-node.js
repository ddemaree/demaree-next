const axios = require('axios')
// const _ = require('lodash')
// const path = require('path')
// const { createFilePath } = require(`gatsby-source-filesystem`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from Substack API at build time
  const resultData = await axios.get("https://letters.demaree.me/api/v1/posts", {params: { limit: 100 }}).then(r => r.data)

  resultData.forEach(post => {
    const { title, subtitle, post_date } = post

    createNode({
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

// exports.createPages = async ({ graphql, actions: { createPage } }) => {
//   const { data: { posts, mdPosts } } = await graphql(`
//     query CreatePagesQuery {
//       mdPosts: allMdx {
//         nodes {
//           id
//           frontmatter {
//             slug
//           }
//         }
//       }
//       posts: allWpPost(filter: {date: {gt: "2019-01-01"}}) {
//         edges {
//           node {
//             title
//             slug
//             databaseId
//           }
//           previous {
//             title
//             slug
//             databaseId
//           }
//           next {
//             title
//             slug
//             databaseId
//           }
//         }
//       }
//     }
//   `);

//   const postTemplate = path.resolve('src/templates/single-post.js')

//   posts.edges.forEach(edge => {
//     const { node, previous, next } = edge

//     createPage({
//       path: `/p/${node.slug}`,
//       component: postTemplate,
//       context: {
//         slug: (node && node.slug),
//         previousSlug: (previous && previous.slug),
//         nextSlug: (next && next.slug)
//       }
//     })
//   });

//   mdPosts.nodes.forEach(node => {
//     createPage({
//       path: `/mp/${node.frontmatter.slug}`,
//       component: path.resolve('src/templates/mdx-post.js'),
//       context: {
//         id: node.id
//       }
//     })
//   })
// }