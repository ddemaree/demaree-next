
import React from "react"
import Layout from "../components/layout"
import PageContent from "../components/page-content"
import PageHeader from "../components/page-header"

import { graphql } from "gatsby"
import getWordCount from "../utils/get-word-count"

const BlogPostTemplate = ({ data }) => {
  const { html, title, published_at, plaintext } = data.post

  return (
    <Layout>
      <div className="mx-auto my-8">
        <PageHeader
          title={title}
          date={published_at}
          words={getWordCount(plaintext)}
          />
        <PageContent className="font-serif" content={html} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    post: ghostPost(slug: {eq: $slug}) {
      title
      slug
      plaintext
      excerpt
      html
      published_at
      updated_at
      primary_tag {
        name
        slug
        visibility
      }
      tags {
        name
        slug
        visibility
      }
    }
  }
`

export default BlogPostTemplate