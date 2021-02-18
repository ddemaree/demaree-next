import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

function SinglePost({ data }) {
  console.log(data)

  return <Layout>
    <h1>Post title here</h1>
  </Layout>
}

export default SinglePost

export const query = graphql`
query($id: String) {
  file(id: {eq: $id}) {
    name
    relativePath
    mdxDoc: childMdx {
      html
      frontmatter {
        title
        date
        subtitle
        description
      }
    }
    remarkDoc: childMarkdownRemark {
      html
      frontmatter {
        title
        date
        subtitle
        description
      }
    }
  }
}
`