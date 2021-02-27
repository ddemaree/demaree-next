import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function TagsPage({ tag, data }) {
  return <Layout>
    <h1>Everything tagged with ‘{tag}’</h1>
  </Layout>
}

export const pageQuery = graphql`
  query($tag: String) {
    posts: allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`