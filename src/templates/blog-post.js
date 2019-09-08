
import React from "react"
import Layout from "../components/layout"
import PageContent from "../components/page-content"
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data }) => {
  const { html } = data.post

  return (
    <Layout>
      <PageContent content={html} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String, $previousSlug: String, $nextSlug: String) {
    post: ghostPost(slug: {eq: $slug}) {
      title
      html
      published_at
      tags {
        slug
        name
        url
      }
    }
    nextPost: ghostPost(slug: {eq: $nextSlug}) {
      title
      published_at
      slug
      url
    }
    previousPost: ghostPost(slug: {eq: $previousSlug}) {
      title
      published_at
      slug
      url
    }
  }

`

export default BlogPostTemplate