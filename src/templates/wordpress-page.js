import React from "react"
import Layout from "../components/layout"
import PageContent from "../components/page-content"
import PageHeader from "../components/page-header"
import PageWrapper from "../components/page-wrapper"

import { graphql } from "gatsby"

const WordpressPageTemplate = ({ data }) => {
  const { content, title, featured_media } = data.page

  return (
    <Layout>
      <div className="mx-auto my-8">
        <PageHeader
          title={title}
          renderedTitle={title}
          featureImage={featured_media} />
        <PageContent className="font-serif" content={content} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    page: wordpressPage(slug: {eq: $slug}) {
      title
      slug
      content
    }
  }
`

export default WordpressPageTemplate