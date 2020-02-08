
import React from "react"
import Layout from "../components/layout"
import PageContent from "../components/page-content"
import PageHeader from "../components/page-header"
import PageWrapper from "../components/page-wrapper"

import { graphql } from "gatsby"

const BlogPostTemplate = ({ data }) => {
  const { content, title, title_raw, date, word_count, featured_media } = data.post

  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto my-8 px-6">
        <PageHeader
          title={title_raw}
          renderedTitle={title}
          date={date}
          words={word_count}
          featureImage={featured_media} />
        <PageWrapper className="font-serif">
          <PageContent content={content} />
        </PageWrapper>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String, $previousSlug: String, $nextSlug: String) {
    post: wordpressPost(slug: {eq: $slug}) {
      title_raw
      title
      slug
      word_count
      excerpt_raw
      content
      date
      featured_media {
        source_url
        alt_text
        caption
      }
    }
    nextPost: wordpressPost(slug: {eq: $nextSlug}) {
      title_raw
      date
      slug
    }
    previousPost: wordpressPost(slug: {eq: $previousSlug}) {
      title_raw
      date
      slug
    }
  }

`

export default BlogPostTemplate