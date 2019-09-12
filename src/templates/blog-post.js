
import React from "react"
import Layout from "../components/layout"
import PageContent, { PageWrapper } from "../components/page-content"
import PageHeader from "../components/page-header"

import { graphql } from "gatsby"

const BlogPostTemplate = ({ data }) => {
  const { html, title, feature_image, published_at } = data.post

  return (
    <Layout
      hasFancyHeader={!!feature_image}>
      <PageHeader
        title={title} 
        featureImage={feature_image}
        date={published_at} />
      <PageWrapper>
        <PageContent content={html} />
      </PageWrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String, $previousSlug: String, $nextSlug: String) {
    post: ghostPost(slug: {eq: $slug}) {
      title
      html
      published_at
      feature_image
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