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
      parent: null,
      children: [],
      internal: {
        type: `SubstackPost`,
        contentDigest: createContentDigest(post),
      },
    })
    
  });
}

exports.createPages = async (graphql, actions) => {
  const { createPage } = actions

  const data = await graphql(
    `
    query CreatePagesQuery {
      blogPosts: allFile(filter: {relativePath: {glob: "blog/*"}}) {
        edges {
          node {
            id
            relativePath
            name
            doc: childMarkdownRemark {
              frontmatter {
                slug
                title
              }
              html
            }
          }
        }
      }
    }
  `
  )

  console.log(data)

  const blogPosts = data.blogPosts.edges.map(e => e.node)

  blogPosts.forEach((post, index) => {
    const { slug } = post.doc.frontmatter

    createPage({
      path: `/p/${slug}`,
      component: path.resolve('src/templates/single-post.js'),
      context: post
    })
  })
}